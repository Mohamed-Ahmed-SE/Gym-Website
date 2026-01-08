import React from 'react';
import SectionTitle from '../../../components/ui/SectionTitle';
import { Icons } from '../../../components/ui/Icons';

const ContactSocial = () => {
    return (
        <section className="py-20 bg-surface border-y border-white/5">
            <div className="container-padding text-center">
                <SectionTitle align="center" subtitle="Stay Connected">
                    Follow The Action
                </SectionTitle>
                <div className="flex justify-center gap-8 mb-12">
                    <a href="#" className="flex flex-col items-center gap-2 group">
                        <div className="w-16 h-16 bg-background border border-white/10 rounded-full flex items-center justify-center text-white group-hover:text-primary group-hover:border-primary transition-all duration-300">
                            <Icons.Social.Instagram size={32} />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">@IronGym</span>
                    </a>
                    <a href="#" className="flex flex-col items-center gap-2 group">
                        <div className="w-16 h-16 bg-background border border-white/10 rounded-full flex items-center justify-center text-white group-hover:text-primary group-hover:border-primary transition-all duration-300">
                            <Icons.Social.Facebook size={32} />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">IronGym Official</span>
                    </a>
                    <a href="#" className="flex flex-col items-center gap-2 group">
                        <div className="w-16 h-16 bg-background border border-white/10 rounded-full flex items-center justify-center text-white group-hover:text-primary group-hover:border-primary transition-all duration-300">
                            <Icons.Social.Twitter size={32} />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">@IronGymTweets</span>
                    </a>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto opacity-50 hover:opacity-100 transition-opacity duration-300">
                    <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600&auto=format&fit=crop" className="aspect-square object-cover" alt="Social 1" />
                    <img src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=600&auto=format&fit=crop" className="aspect-square object-cover" alt="Social 2" />
                    <img src="https://images.unsplash.com/photo-1517963879466-cd11fa97f41a?q=80&w=600&auto=format&fit=crop" className="aspect-square object-cover" alt="Social 3" />
                    <img src="https://images.unsplash.com/photo-1601422407692-ec4ee6bf4deb?q=80&w=600&auto=format&fit=crop" className="aspect-square object-cover" alt="Social 4" />
                </div>
            </div>
        </section>
    );
};

export default ContactSocial;
