import React from 'react';
import SectionTitle from '../../../components/ui/SectionTitle';

const ProgramMethodology = () => {
    return (
        <section className="section-padding bg-background">
            <div className="container-padding text-center max-w-4xl mx-auto">
                <SectionTitle align="center" subtitle="Our Philosophy">
                    The Science of Strength
                </SectionTitle>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    We don't believe in fad diets or quick fixes. Our programming is rooted in exercise science and proven periodization principles.
                    Every rep, set, and rest interval is calculated to drive adaptation and results.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    <div className="p-6 border border-white/5 bg-surface/30">
                        <h3 className="text-primary font-bold uppercase tracking-widest mb-2">Phase 1</h3>
                        <h4 className="text-white text-xl font-display uppercase italic mb-2">Stabilization</h4>
                        <p className="text-gray-400 text-sm">Building a solid foundation of movement quality and core control.</p>
                    </div>
                    <div className="p-6 border border-white/5 bg-surface/30">
                        <h3 className="text-primary font-bold uppercase tracking-widest mb-2">Phase 2</h3>
                        <h4 className="text-white text-xl font-display uppercase italic mb-2">Strength</h4>
                        <p className="text-gray-400 text-sm">Increasing load and intensity to build raw power and muscle density.</p>
                    </div>
                    <div className="p-6 border border-white/5 bg-surface/30">
                        <h3 className="text-primary font-bold uppercase tracking-widest mb-2">Phase 3</h3>
                        <h4 className="text-white text-xl font-display uppercase italic mb-2">Performance</h4>
                        <p className="text-gray-400 text-sm">Translating strength into explosive power and athletic capacity.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProgramMethodology;
