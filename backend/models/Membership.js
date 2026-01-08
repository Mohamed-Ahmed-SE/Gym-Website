import mongoose from 'mongoose';

const membershipSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    period: {
        type: String,
        required: true,
        default: '/month',
    },
    features: [{
        type: String,
        required: true,
    }],
    recommended: {
        type: Boolean,
        default: false,
    },
    stripePriceId: {
        type: String,
        trim: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
}, {
    timestamps: true,
});

export default mongoose.model('Membership', membershipSchema);
