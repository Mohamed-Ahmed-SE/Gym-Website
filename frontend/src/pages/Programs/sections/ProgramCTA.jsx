import React from 'react';
import Button from '../../../components/ui/Button';

const ProgramCTA = () => {
    return (
        <section className="py-20 bg-secondary border-t border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
            <div className="container-padding text-center relative z-10">
                <h2 className="text-5xl font-display text-white uppercase italic mb-6">First Class Is On Us</h2>
                <p className="text-gray-300 mb-8 max-w-xl mx-auto text-lg">
                    Experience the difference for yourself. Sign up for a free trial class and see why we're the city's premier training facility.
                </p>
                <Button to="/contact" variant="primary" className="shadow-xl shadow-primary/20">
                    Claim Free Pass
                </Button>
            </div>
        </section>
    );
};

export default ProgramCTA;
