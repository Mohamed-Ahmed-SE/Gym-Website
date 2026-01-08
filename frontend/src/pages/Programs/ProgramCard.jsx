import React from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { Icons } from '../../components/ui/Icons';
import Image from '../../components/common/Image/Image';

const ProgramCard = ({ program }) => {
    return (
        <Card className="h-full flex flex-col p-0 overflow-hidden group">
            <div className="relative h-64 overflow-hidden">
                <Image
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-90" />

                <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-md px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary border border-white/5 rounded-sm">
                    {program.intensity} Intensity
                </div>
            </div>

            <div className="p-8 flex-1 flex flex-col bg-surface relative z-10 transition-colors duration-300 group-hover:bg-[#1E293B]">
                <h3 className="text-3xl font-display text-white uppercase italic mb-4">{program.title}</h3>
                <p className="text-gray-400 mb-6 flex-1">{program.description}</p>

                <div className="space-y-4">
                    <div className="flex items-center text-sm font-medium text-gray-300">
                        <Icons.Timer className="mr-3 text-primary h-5 w-5" />
                        {program.duration} per session
                    </div>
                    <div className="flex items-center text-sm font-medium text-gray-300">
                        <Icons.Activity className="mr-3 text-primary h-5 w-5" />
                        Daily Workouts
                    </div>

                    <Button to={`/programs/${program._id || program.id}`} variant="outline" className="w-full mt-6">
                        View Details
                    </Button>
                </div>
            </div>
        </Card>
    );
};

export default ProgramCard;
