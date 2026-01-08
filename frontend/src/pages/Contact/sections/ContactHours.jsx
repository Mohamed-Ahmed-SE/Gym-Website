import React from 'react';

const ContactHours = () => {
    const hours = [
        { day: "Monday", hours: "05:00 - 23:00" },
        { day: "Tuesday", hours: "05:00 - 23:00" },
        { day: "Wednesday", hours: "05:00 - 23:00" },
        { day: "Thursday", hours: "05:00 - 23:00" },
        { day: "Friday", hours: "05:00 - 22:00" },
        { day: "Saturday", hours: "07:00 - 20:00" },
        { day: "Sunday", hours: "07:00 - 20:00" },
    ];

    return (
        <section className="section-padding bg-surface">
            <div className="container-padding max-w-2xl mx-auto text-center">
                <h3 className="text-3xl font-display text-white uppercase italic mb-8">Detailed Hours</h3>
                <div className="border border-white/10 bg-background p-8 rounded-sm">
                    <ul className="space-y-4">
                        {hours.map((item, idx) => (
                            <li key={idx} className="flex justify-between items-center text-gray-300 border-b border-white/5 pb-2 last:border-0 last:pb-0">
                                <span className="font-bold uppercase tracking-wider">{item.day}</span>
                                <span className="font-mono text-primary">{item.hours}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="mt-8 text-xs text-gray-500 uppercase tracking-widest">
                        *Keycard access available 24/7 for members
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ContactHours;
