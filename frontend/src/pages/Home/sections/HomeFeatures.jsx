import React from 'react';
import SectionTitle from '../../../components/ui/SectionTitle';
import { Icons } from '../../../components/ui/Icons';

const HomeFeatures = () => {
    const features = [
        {
            icon: Icons.Dumbbell,
            title: "Premium Equipment",
            description: "Train with the best. We stock Hammer Strength, Eleiko, and Rogue fitness gear."
        },
        {
            icon: Icons.ClockCircle || Icons.Timer, // Fallback if ClockCircle doesn't exist in our map
            title: "24/7 Access",
            description: "Train on your schedule. Our doors never close for members."
        },
        {
            icon: Icons.User,
            title: "Expert Trainers",
            description: "Our diverse team of certified coaches is here to guide your every rep."
        },
        {
            icon: Icons.Zap,
            title: "Recovery Zone",
            description: "Sauna, cold plunge, and massage guns available for post-workout recovery."
        }
    ];

    return (
        <section className="section-padding bg-background">
            <div className="container-padding">
                <SectionTitle subtitle="Why Choose Us" align="left">
                    The Iron Advantage
                </SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <div key={idx} className="bg-surface/50 p-6 border border-white/5 hover:border-primary/30 transition-colors group">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                                <feature.icon size={24} />
                            </div>
                            <h3 className="text-xl text-white font-bold uppercase italic mb-3">{feature.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeFeatures;
