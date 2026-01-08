import React from 'react';
import SectionTitle from '../../components/ui/SectionTitle';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { Icons } from '../../components/ui/Icons';

const TrainersPreview = ({ trainers }) => {
    // Take only first 3 trainers
    const featuredTrainers = trainers.slice(0, 3);

    return (
        <section className="section-padding bg-surface w-full relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 -mr-24 -mt-24 text-white/5 pointer-events-none">
                <Icons.Dumbbell size={400} />
            </div>

            <div className="container-padding relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <SectionTitle subtitle="Expert Coaching" align="left" className="mb-0">
                        Meet The Team
                    </SectionTitle>
                    <Button to="/trainers" variant="outline" className="hidden md:inline-flex">
                        See All Coaches
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                    {featuredTrainers.map((trainer) => (
                        <Card key={trainer.id} className="text-center p-0 overflow-hidden group border-none">
                            <div className="h-80 relative overflow-hidden">
                                <img
                                    src={trainer.image}
                                    alt={trainer.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            <div className="p-6 bg-surface relative -mt-10 mx-6 shadow-xl border border-white/5">
                                <h3 className="text-2xl font-display text-white uppercase tracking-wide">{trainer.name}</h3>
                                <p className="text-primary font-bold text-sm uppercase mb-4">{trainer.role}</p>
                                <div className="flex justify-center gap-4">
                                    <a href="#" className="text-muted hover:text-primary transition-colors"><Icons.Social.Instagram size={18} /></a>
                                    <a href="#" className="text-muted hover:text-primary transition-colors"><Icons.Social.Twitter size={18} /></a>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="text-center md:hidden mt-8">
                    <Button to="/trainers" variant="outline">
                        See All Coaches
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default TrainersPreview;
