import React from 'react';
import SectionTitle from '../../../components/ui/SectionTitle';
import Card from '../../../components/ui/Card';
import { Icons } from '../../../components/ui/Icons';

const HomeTestimonials = () => {
    const reviews = [
        {
            name: "Michael R.",
            role: "Member since 2023",
            text: "IronGym changed my life. The coaches are world-class and the atmosphere is unmatched. I've never felt stronger.",
            rating: 5
        },
        {
            name: "Sarah L.",
            role: "Pro Athlete",
            text: "The equipment here is top-tier. As a professional, I need a facility that can keep up with my training. This is it.",
            rating: 5
        },
        {
            name: "James K.",
            role: "Weight Loss Journey",
            text: "Lost 50lbs in 6 months thanks to the HIIT program. The community support kept me going when I wanted to quit.",
            rating: 5
        }
    ];

    return (
        <section className="section-padding bg-surface">
            <div className="container-padding">
                <SectionTitle subtitle="Success Stories" align="center">
                    Member Reviews
                </SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, idx) => (
                        <Card key={idx} className="flex flex-col">
                            <div className="flex gap-1 mb-4 text-primary">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Icons.Star key={i} size={18} fill="currentColor" />
                                ))}
                            </div>
                            <p className="text-gray-300 italic mb-6 flex-1">"{review.text}"</p>
                            <div>
                                <h4 className="text-white font-bold uppercase">{review.name}</h4>
                                <span className="text-gray-500 text-sm">{review.role}</span>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeTestimonials;
