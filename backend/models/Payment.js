import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    amount: {
        type: Number,
        required: true,
        min: 0,
    },
    currency: {
        type: String,
        default: 'usd',
        uppercase: true,
    },
    paymentMethod: {
        type: String,
        enum: ['card', 'cash', 'other'],
        default: 'card',
    },
    stripePaymentIntentId: {
        type: String,
        trim: true,
    },
    stripeChargeId: {
        type: String,
        trim: true,
    },
    status: {
        type: String,
        enum: ['pending', 'succeeded', 'failed', 'refunded'],
        default: 'pending',
    },
    type: {
        type: String,
        enum: ['membership', 'booking', 'other'],
        required: true,
    },
    membership: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Membership',
        default: null,
    },
    booking: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Booking',
        default: null,
    },
    metadata: {
        type: Map,
        of: String,
    },
}, {
    timestamps: true,
});

export default mongoose.model('Payment', paymentSchema);
