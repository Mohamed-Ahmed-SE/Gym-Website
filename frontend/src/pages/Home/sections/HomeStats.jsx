import React from 'react';

const HomeStats = () => {
    const stats = [
        { label: "Members", value: "2,000+" },
        { label: "Trainers", value: "50+" },
        { label: "Programs", value: "25+" },
        { label: "Awards", value: "15" },
    ];

    return (
        <div className="bg-primary py-12">
            <div className="container-padding">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, idx) => (
                        <div key={idx}>
                            <div className="text-4xl md:text-5xl font-display text-white font-bold italic mb-1">{stat.value}</div>
                            <div className="text-white/80 font-bold uppercase tracking-wider text-sm">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeStats;
