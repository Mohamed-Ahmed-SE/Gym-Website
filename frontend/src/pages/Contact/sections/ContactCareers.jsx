import React from 'react';
import Button from '../../../components/ui/Button';

const ContactCareers = () => {
    return (
        <section className="bg-primary text-white py-16">
            <div className="container-padding flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                    <h3 className="text-3xl font-display uppercase italic mb-2">We Are Hiring</h3>
                    <p className="text-white/80 max-w-md">Join a team of passionate professionals. We are currently looking for trainers, front desk staff, and cleaning crew.</p>
                </div>
                <Button variant="secondary" className="bg-white text-primary hover:bg-white hover:text-black">
                    View Openings
                </Button>
            </div>
        </section>
    );
};

export default ContactCareers;
