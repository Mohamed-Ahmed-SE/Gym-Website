import React from 'react';
import Button from '../../../components/ui/Button';

const TrainerJoinCTA = () => {
    return (
        <section className="py-20 bg-secondary border-t border-white/5">
            <div className="container-padding text-center">
                <h2 className="text-4xl font-display text-white uppercase italic mb-6">Are you a Coach?</h2>
                <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                    We're always looking for top-tier talent to join our roster. If you have what it takes, we want to hear from you.
                </p>
                <Button to="/contact" variant="outline">
                    Apply Now
                </Button>
            </div>
        </section>
    );
};

export default TrainerJoinCTA;
