import stripe from '../config/stripe.js';
import Payment from '../models/Payment.js';

export const createPaymentIntent = async (amount, currency = 'usd', metadata = {}) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: Math.round(amount * 100), // Convert to cents
            currency,
            metadata,
        });

        return paymentIntent;
    } catch (error) {
        throw new Error(`Payment intent creation failed: ${error.message}`);
    }
};

export const confirmPayment = async (paymentIntentId) => {
    try {
        const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
        return paymentIntent;
    } catch (error) {
        throw new Error(`Payment confirmation failed: ${error.message}`);
    }
};

export const createPaymentRecord = async (paymentData) => {
    try {
        const payment = await Payment.create(paymentData);
        return payment;
    } catch (error) {
        throw new Error(`Payment record creation failed: ${error.message}`);
    }
};

export const processRefund = async (paymentIntentId, amount = null) => {
    try {
        const refund = await stripe.refunds.create({
            payment_intent: paymentIntentId,
            amount: amount ? Math.round(amount * 100) : undefined,
        });
        return refund;
    } catch (error) {
        throw new Error(`Refund processing failed: ${error.message}`);
    }
};
