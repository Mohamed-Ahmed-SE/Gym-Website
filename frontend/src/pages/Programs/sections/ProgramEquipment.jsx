import React from 'react';
import { Icons } from '../../../components/ui/Icons';
import SectionTitle from '../../../components/ui/SectionTitle';

const ProgramEquipment = () => {
    return (
        <section className="section-padding bg-surface border-y border-white/5">
            <div className="container-padding">
                <SectionTitle align="left" subtitle="World-Class Gear">
                    Train With The Best
                </SectionTitle>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                    {[
                        "Hammer Strength", "Eleiko", "Rogue", "Technogym", "Concept2", "Assault Fitness"
                    ].map((brand, idx) => (
                        <div key={idx} className="flex flex-col items-center justify-center p-6 bg-background border border-white/5 hover:border-primary/50 transition-colors group">
                            <Icons.Dumbbell className="text-gray-600 mb-4 group-hover:text-primary transition-colors h-8 w-8" />
                            <span className="text-gray-400 font-bold uppercase tracking-wider text-sm">{brand}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProgramEquipment;
