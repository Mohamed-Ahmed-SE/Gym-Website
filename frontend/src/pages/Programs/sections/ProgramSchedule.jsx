import React from 'react';
import SectionTitle from '../../../components/ui/SectionTitle';
import Button from '../../../components/ui/Button';

const ProgramSchedule = () => {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const classes = [
        { name: "Strength", time: "06:00", duration: "60m" },
        { name: "HIIT", time: "07:00", duration: "45m" },
        { name: "Yoga", time: "08:00", duration: "60m" },
        { name: "CrossFit", time: "17:00", duration: "60m" },
        { name: "Strength", time: "18:00", duration: "60m" },
    ];

    return (
        <section className="section-padding bg-surface">
            <div className="container-padding">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <SectionTitle align="left" subtitle="Plan Your Week" className="mb-0">
                        Class Schedule
                    </SectionTitle>
                    <Button variant="outline" to="/programs">Download Full Schedule</Button>
                </div>

                <div className="overflow-x-auto">
                    <div className="min-w-[800px]">
                        <div className="grid grid-cols-7 gap-4 mb-4">
                            {days.map(day => (
                                <div key={day} className="text-center text-primary font-bold uppercase tracking-wider bg-white/5 py-2">
                                    {day}
                                </div>
                            ))}
                        </div>
                        {/* Mock Schedule Rows */}
                        <div className="grid grid-cols-7 gap-4">
                            {[...Array(7)].map((_, colIdx) => (
                                <div key={colIdx} className="space-y-4">
                                    {classes.filter((_, i) => (i + colIdx) % 3 === 0).map((cls, idx) => (
                                        <div key={idx} className="bg-background border border-white/5 p-3 text-center hover:border-primary/50 transition-colors cursor-pointer group">
                                            <div className="text-white font-bold uppercase text-sm group-hover:text-primary">{cls.name}</div>
                                            <div className="text-gray-500 text-xs">{cls.time} • {cls.duration}</div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProgramSchedule;
