import mongoose from 'mongoose';

const programSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    longDescription: {
        type: String,
        default: '',
    },
    duration: {
        type: String,
        required: true,
    },
    intensity: {
        type: String,
        required: true,
        enum: ['Low', 'Medium', 'High', 'Very High'],
    },
    image: {
        type: String,
        required: true,
    },
    benefits: [{
        type: String,
    }],
    schedule: [{
        day: String,
        time: String,
    }],
    instructorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Trainer',
        required: true,
    },
    capacity: {
        type: Number,
        default: 20,
        min: 1,
    },
    currentBookings: {
        type: Number,
        default: 0,
    },
    price: {
        type: Number,
        default: 0,
        min: 0,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
}, {
    timestamps: true,
});

export default mongoose.model('Program', programSchema);
