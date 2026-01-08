import React from 'react';
import SectionTitle from '../../../components/ui/SectionTitle';

const MembershipPerks = () => {
    return (
        <section className="section-padding bg-surface">
            <div className="container-padding">
                <SectionTitle align="left" subtitle="Exclusive Benefits">
                    Member Perks
                </SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex gap-4 items-start p-6 border border-white/5 bg-background">
                        <div className="text-4xl">🥤</div>
                        <div>
                            <h4 className="text-white font-bold uppercase mb-2">Supplement Discount</h4>
                            <p className="text-gray-400">Get 20% off all protein, pre-workout, and vitamins at our pro shop.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-start p-6 border border-white/5 bg-background">
                        <div className="text-4xl">🏥</div>
                        <div>
                            <h4 className="text-white font-bold uppercase mb-2">Physio Partners</h4>
                            <p className="text-gray-400">Exclusive rates with our partner physiotherapy and massage clinics.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-start p-6 border border-white/5 bg-background">
                        <div className="text-4xl">🥗</div>
                        <div>
                            <h4 className="text-white font-bold uppercase mb-2">Meal Prep</h4>
                            <p className="text-gray-400">Weekly meal prep delivery service discounts for all active members.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-start p-6 border border-white/5 bg-background">
                        <div className="text-4xl">🅿️</div>
                        <div>
                            <h4 className="text-white font-bold uppercase mb-2">Free Parking</h4>
                            <p className="text-gray-400">Complimentary 3-hour parking validation in our secure garage.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MembershipPerks;
