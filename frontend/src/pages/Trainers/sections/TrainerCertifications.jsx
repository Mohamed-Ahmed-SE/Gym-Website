import React from 'react';
import SectionTitle from '../../../components/ui/SectionTitle';

const TrainerCertifications = () => {
    return (
        <section className="py-16 bg-surface border-y border-white/5">
            <div className="container-padding text-center">
                <p className="text-gray-400 uppercase tracking-widest text-sm font-bold mb-8">Our coaches hold elite certifications from</p>
                <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Text placeholders for logos since we don't have SVGs */}
                    <span className="text-2xl font-display text-white italic">NASM</span>
                    <span className="text-2xl font-display text-white italic">CROSSFIT L3</span>
                    <span className="text-2xl font-display text-white italic">NSCA</span>
                    <span className="text-2xl font-display text-white italic">PRECISION NUTRITION</span>
                    <span className="text-2xl font-display text-white italic">USA WEIGHTLIFTING</span>
                </div>
            </div>
        </section>
    );
};

export default TrainerCertifications;
