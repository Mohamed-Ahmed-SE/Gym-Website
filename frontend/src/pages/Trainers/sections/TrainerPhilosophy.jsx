import React from 'react';
import SectionTitle from '../../../components/ui/SectionTitle';

const TrainerPhilosophy = () => {
    return (
        <section className="section-padding bg-background">
            <div className="container-padding">
                <SectionTitle align="left" subtitle="Our Approach">
                    More Than Just Reps
                </SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            We believe that a great coach does more than just count reps. They are mentors, specificiers, and partners in your journey.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Our team adopts a holistic approach to fitness, emphasizing not just physical strength, but also mental resilience, mobility, and sustainable lifestyle habits. We don't just train you for the gym; we train you for life.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-surface p-6 border border-white/5 text-center">
                            <h4 className="text-4xl font-display text-primary italic mb-2">10+</h4>
                            <p className="text-gray-400 text-xs uppercase font-bold">Years Avg Exp</p>
                        </div>
                        <div className="bg-surface p-6 border border-white/5 text-center">
                            <h4 className="text-4xl font-display text-primary italic mb-2">100%</h4>
                            <p className="text-gray-400 text-xs uppercase font-bold">Certified</p>
                        </div>
                        <div className="bg-surface p-6 border border-white/5 text-center">
                            <h4 className="text-4xl font-display text-primary italic mb-2">1:1</h4>
                            <p className="text-gray-400 text-xs uppercase font-bold">Attention</p>
                        </div>
                        <div className="bg-surface p-6 border border-white/5 text-center">
                            <h4 className="text-4xl font-display text-primary italic mb-2">5k+</h4>
                            <p className="text-gray-400 text-xs uppercase font-bold">Lives Changed</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrainerPhilosophy;
