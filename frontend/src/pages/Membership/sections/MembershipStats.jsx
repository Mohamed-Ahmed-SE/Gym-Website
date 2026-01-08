import React from 'react';
import SectionTitle from '../../../components/ui/SectionTitle';

const MembershipStats = () => {
    return (
        <section className="py-20 bg-primary">
            <div className="container-padding text-center">
                <SectionTitle align="center" subtitle="Invest In Yourself" className="mb-12">
                    The Return
                </SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
                    <div>
                        <div className="text-6xl font-display italic mb-2">3x</div>
                        <p className="font-bold uppercase tracking-widest text-white/80">More Energy</p>
                        <p className="text-white/60 text-sm mt-2 max-w-xs mx-auto">Members report tripled energy levels within first month.</p>
                    </div>
                    <div>
                        <div className="text-6xl font-display italic mb-2">40%</div>
                        <p className="font-bold uppercase tracking-widest text-white/80">Stress Reduction</p>
                        <p className="text-white/60 text-sm mt-2 max-w-xs mx-auto">Lower cortisol levels through regular exercise.</p>
                    </div>
                    <div>
                        <div className="text-6xl font-display italic mb-2">100%</div>
                        <p className="font-bold uppercase tracking-widest text-white/80">Commitment</p>
                        <p className="text-white/60 text-sm mt-2 max-w-xs mx-auto">We are dedicated to your success every step.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MembershipStats;
