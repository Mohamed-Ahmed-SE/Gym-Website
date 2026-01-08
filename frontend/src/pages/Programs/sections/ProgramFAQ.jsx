import React from 'react';
import SectionTitle from '../../../components/ui/SectionTitle';
import { Icons } from '../../../components/ui/Icons';

const ProgramFAQ = () => {
    return (
        <section className="section-padding bg-background">
            <div className="container-padding max-w-4xl mx-auto">
                <SectionTitle align="center" subtitle="Program Details">
                    Common Questions
                </SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-surface p-6 border border-white/5">
                        <h4 className="text-white font-bold uppercase mb-2">Do I need experience?</h4>
                        <p className="text-gray-400 text-sm">Most of our programs are scalable to all fitness levels. Our coaches will modify movements to match your ability.</p>
                    </div>
                    <div className="bg-surface p-6 border border-white/5">
                        <h4 className="text-white font-bold uppercase mb-2">What should I bring?</h4>
                        <p className="text-gray-400 text-sm">Water bottle, towel, and appropriate athletic wear. We provide all the specialized equipment you need.</p>
                    </div>
                    <div className="bg-surface p-6 border border-white/5">
                        <h4 className="text-white font-bold uppercase mb-2">How do I book a class?</h4>
                        <p className="text-gray-400 text-sm">Download our mobile app to view the schedule and reserve your spot up to 7 days in advance.</p>
                    </div>
                    <div className="bg-surface p-6 border border-white/5">
                        <h4 className="text-white font-bold uppercase mb-2">Can I switch programs?</h4>
                        <p className="text-gray-400 text-sm">Yes, you are not locked into one specific track. We encourage trying different styles to find what you love.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProgramFAQ;
