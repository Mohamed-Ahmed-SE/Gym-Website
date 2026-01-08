import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Membership from '../models/Membership.js';

dotenv.config();

const memberships = [
    {
        name: "Basic",
        price: 29,
        period: "/month",
        features: [
            "Access to gym floor",
            "Locker room access",
            "Free WiFi",
            "1 Guest pass per month"
        ],
        recommended: false,
        isActive: true
    },
    {
        name: "Pro Athlete",
        price: 59,
        period: "/month",
        features: [
            "All Basic features",
            "Unlimited group classes",
            "Sauna access",
            "Personal training: 1 session",
            "Nutrition plan"
        ],
        recommended: true,
        isActive: true
    },
    {
        name: "Elite",
        price: 99,
        period: "/month",
        features: [
            "All Pro features",
            "Unlimited personal training",
            "Private locker",
            "Towel service",
            "Recovery lounge access"
        ],
        recommended: false,
        isActive: true
    }
];

const seedMemberships = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');

        // Clear existing memberships
        await Membership.deleteMany({});
        console.log('Cleared existing memberships');

        // Insert new memberships
        const created = await Membership.insertMany(memberships);
        console.log(`Seeded ${created.length} memberships`);
        
        process.exit(0);
    } catch (error) {
        console.error('Error seeding memberships:', error);
        process.exit(1);
    }
};

seedMemberships();
