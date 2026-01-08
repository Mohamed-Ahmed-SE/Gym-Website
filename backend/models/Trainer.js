import mongoose from 'mongoose';

const trainerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    role: {
        type: String,
        required: true,
        trim: true,
    },
    bio: {
        type: String,
        required: true,
    },
    specialties: [{
        type: String,
    }],
    image: {
        type: String,
        required: true,
    },
    certifications: [{
        name: String,
        issuer: String,
        year: Number,
    }],
    socialLinks: {
        instagram: String,
        facebook: String,
        twitter: String,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
}, {
    timestamps: true,
});

export default mongoose.model('Trainer', trainerSchema);
