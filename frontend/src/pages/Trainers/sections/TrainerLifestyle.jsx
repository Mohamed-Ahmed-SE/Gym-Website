import React from 'react';
import SectionTitle from '../../../components/ui/SectionTitle';

const TrainerLifestyle = () => {
    return (
        <section className="section-padding bg-surface">
            <div className="container-padding">
                <SectionTitle align="center" subtitle="Behind The Scenes">
                    A Day In The Life
                </SectionTitle>
                <div className="relative h-[400px] w-full max-w-5xl mx-auto overflow-hidden group">
                    <img
                        src="https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=2970&auto=format&fit=crop"
                        alt="Trainer Lifestyle"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border-2 border-white group-hover:scale-110 transition-transform cursor-pointer">
                            <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                        </div>
                    </div>
                </div>
                <p className="text-center text-gray-400 mt-6 max-w-2xl mx-auto">
                    See what it takes to be an IronGym coach. From early morning own-training sessions to late night program design, passion fuels everything we do.
                </p>
            </div>
        </section>
    );
};

export default TrainerLifestyle;
