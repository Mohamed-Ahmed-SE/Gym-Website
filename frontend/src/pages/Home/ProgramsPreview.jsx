import React from 'react';
import SectionTitle from '../../components/ui/SectionTitle';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { Icons } from '../../components/ui/Icons';

const ProgramsPreview = ({ programs }) => {
    // Take only first 3 programs for preview
    const featuredPrograms = programs.slice(0, 3);

    return (
        <section className="section-padding bg-background w-full">
            <div className="container-padding">
                <SectionTitle subtitle="Our Training" align="center">
                    Featured Programs
                </SectionTitle>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {featuredPrograms.map((program) => (
                        <Card key={program.id} className="group relative overflow-hidden h-[400px]">
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={program.image}
                                    alt={program.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                                <div className="flex items-center gap-2 mb-2 text-primary text-sm font-bold uppercase tracking-wider">
                                    <Icons.Flame size={16} />
                                    <span>{program.intensity} Intensity</span>
                                </div>
                                <h3 className="text-3xl font-display text-white mb-2 uppercase italic">{program.title}</h3>
                                <p className="text-gray-300 mb-4 line-clamp-2">{program.description}</p>
                                <div className="flex items-center text-sm font-medium text-white mb-4">
                                    <Icons.Timer className="mr-2 text-primary" size={16} />
                                    {program.duration}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="text-center">
                    <Button to="/programs" variant="outline">
                        View All Programs
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default ProgramsPreview;
