import React from 'react';
import Card from '../../../components/ui/Card';
import SectionTitle from '../../../components/ui/SectionTitle';

const TrainerResults = () => {
    return (
        <section className="section-padding bg-background">
            <div className="container-padding">
                <SectionTitle align="left" subtitle="Proven Track Record">
                    Client Wins
                </SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card className="text-center bg-surface border-white/5">
                        <div className="text-6xl font-display text-primary italic mb-2">-40lbs</div>
                        <p className="text-gray-300">"Alex helped me lose the weight I've been carrying for 10 years."</p>
                        <p className="text-gray-500 text-sm mt-4 font-bold uppercase">- John D.</p>
                    </Card>
                    <Card className="text-center bg-surface border-white/5">
                        <div className="text-6xl font-display text-primary italic mb-2">+50kg</div>
                        <p className="text-gray-300">"Added 50kg to my total in just 8 weeks under Sarah's programming."</p>
                        <p className="text-gray-500 text-sm mt-4 font-bold uppercase">- Mike T.</p>
                    </Card>
                    <Card className="text-center bg-surface border-white/5">
                        <div className="text-6xl font-display text-primary italic mb-2">Marathon</div>
                        <p className="text-gray-300">"Qualified for Boston thanks to Marcus's endurance coaching."</p>
                        <p className="text-gray-500 text-sm mt-4 font-bold uppercase">- Lisa M.</p>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default TrainerResults;
