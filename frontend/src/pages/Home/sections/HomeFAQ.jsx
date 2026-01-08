import React, { useState } from 'react';
import SectionTitle from '../../../components/ui/SectionTitle';
import { Icons } from '../../../components/ui/Icons';

const HomeFAQ = () => {
    const faqs = [
        { q: "What are your operating hours?", a: "We are open 24/7 for members. Staffed hours are 6am - 10pm daily." },
        { q: "Do you offer a free trial?", a: "Yes! We offer a one-day complimentary pass for locals. Just bring your ID." },
        { q: "Can I freeze my membership?", a: "Absolutely. You can freeze your membership for up to 3 months per year for medical or travel reasons." },
        { q: "Is personal training included?", a: "Personal training is an add-on service, but our Pro and Elite memberships include monthly sessions." }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="section-padding bg-surface">
            <div className="container-padding max-w-4xl mx-auto">
                <SectionTitle align="center" subtitle="Common Questions">
                    FAQ
                </SectionTitle>
                <div className="space-y-4">
                    {faqs.map((item, idx) => (
                        <div key={idx} className="border border-white/5 bg-background rounded-sm overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="font-bold text-white uppercase tracking-wide">{item.q}</span>
                                <Icons.ChevronRight className={`transition-transform duration-300 text-primary ${openIndex === idx ? 'rotate-90' : ''}`} />
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-40 p-6 pt-0' : 'max-h-0'}`}>
                                <p className="text-gray-400">{item.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeFAQ;
