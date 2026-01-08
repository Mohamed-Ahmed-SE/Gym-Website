import React from 'react';
import SectionTitle from '../../../components/ui/SectionTitle';

const ProgramSuccess = () => {
    return (
        <section className="section-padding bg-background">
            <div className="container-padding">
                <SectionTitle align="center" subtitle="Real Results">
                    Transformations
                </SectionTitle>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Story 1 */}
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="w-full md:w-1/2 h-64 relative bg-surface">
                            <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop" alt="Transformation" className="w-full h-full object-cover" />
                            <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs font-bold px-2 py-1 uppercase">Before</div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <h3 className="text-2xl text-white font-display uppercase italic mb-2">Marcus, 34</h3>
                            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Program: Strength Training</p>
                            <p className="text-gray-400">"I gained 15lbs of muscle in just 12 weeks. The structured progression made all the difference. I'm stronger than I've ever been."</p>
                        </div>
                    </div>

                    {/* Story 2 */}
                    <div className="flex flex-col md:flex-row gap-6 items-center md:flex-row-reverse">
                        <div className="w-full md:w-1/2 h-64 relative bg-surface">
                            <img src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2938&auto=format&fit=crop" alt="Transformation" className="w-full h-full object-cover" />
                            <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs font-bold px-2 py-1 uppercase">After</div>
                        </div>
                        <div className="w-full md:w-1/2 text-left md:text-right">
                            <h3 className="text-2xl text-white font-display uppercase italic mb-2">Jessica, 28</h3>
                            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Program: HIIT Cardio</p>
                            <p className="text-gray-400">"The energy in the HIIT classes is addictive. I've dropped 2 dress sizes and my endurance has skyrocketed. Love this gym!"</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProgramSuccess;
