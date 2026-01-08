import { createPaymentIntent, confirmPayment, createPaymentRecord } from '../services/payment.service.js';
import Payment from '../models/Payment.js';

// @desc    Create payment intent
// @route   POST /api/payments/create-intent
// @access  Private
export const createIntent = async (req, res) => {
    try {
        const { amount, currency, type, membershipId, bookingId } = req.body;

        const metadata = {
            userId: req.user._id.toString(),
            type,
        };

        if (membershipId) metadata.membershipId = membershipId;
        if (bookingId) metadata.bookingId = bookingId;

        const paymentIntent = await createPaymentIntent(amount, currency || 'usd', metadata);

        res.json({
            clientSecret: paymentIntent.client_secret,
            paymentIntentId: paymentIntent.id,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Confirm payment
// @route   POST /api/payments/confirm
// @access  Private
export const confirm = async (req, res) => {
    try {
        const { paymentIntentId, type, membershipId, bookingId } = req.body;

        const paymentIntent = await confirmPayment(paymentIntentId);

        if (paymentIntent.status !== 'succeeded') {
            return res.status(400).json({ message: 'Payment not completed' });
        }

        // Create payment record
        const paymentData = {
            user: req.user._id,
            amount: paymentIntent.amount / 100,
            currency: paymentIntent.currency,
            paymentMethod: 'card',
            stripePaymentIntentId: paymentIntentId,
            stripeChargeId: paymentIntent.latest_charge,
            status: 'succeeded',
            type,
        };

        if (membershipId) paymentData.membership = membershipId;
        if (bookingId) paymentData.booking = bookingId;

        const payment = await createPaymentRecord(paymentData);

        res.json({
            message: 'Payment confirmed',
            payment,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get user's payment history
// @route   GET /api/payments/user/:userId
// @access  Private
export const getUserPayments = async (req, res) => {
    try {
        const userId = req.params.userId;

        // Check if user is accessing their own payments or is admin
        if (req.user._id.toString() !== userId && req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Not authorized' });
        }

        const payments = await Payment.find({ user: userId })
            .populate('membership')
            .populate('booking')
            .sort({ createdAt: -1 });

        res.json(payments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
