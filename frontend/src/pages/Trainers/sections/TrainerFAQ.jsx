import React from 'react';
import SectionTitle from '../../../components/ui/SectionTitle';
import Button from '../../../components/ui/Button';

const TrainerFAQ = () => {
    return (
        <section className="section-padding bg-surface border-t border-white/5">
            <div className="container-padding max-w-4xl mx-auto">
                <SectionTitle align="center" subtitle="Coaching Questions">
                    FAQ
                </SectionTitle>
                <div className="space-y-6">
                    <div className="border-b border-white/5 pb-6">
                        <h4 className="text-white font-bold uppercase mb-2">How do I choose a personal trainer?</h4>
                        <p className="text-gray-400">Read through the bios to find a specialist that matches your goals. We also offer a free consultation to help match you.</p>
                    </div>
                    <div className="border-b border-white/5 pb-6">
                        <h4 className="text-white font-bold uppercase mb-2">How often should I meet with my trainer?</h4>
                        <p className="text-gray-400">It depends on your goals and budget. Most clients see best results with 2-3 sessions per week.</p>
                    </div>
                    <div className="border-b border-white/5 pb-6">
                        <h4 className="text-white font-bold uppercase mb-2">What if I need to cancel a session?</h4>
                        <p className="text-gray-400">We require 24-hour notice for cancellations to avoid being charged for the session.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrainerFAQ;
