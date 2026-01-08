import React from 'react';
import SectionTitle from '../../components/ui/SectionTitle';
import Button from '../../components/ui/Button';
import { Icons } from '../../components/ui/Icons';
import ContactMap from './sections/ContactMap';
import ContactFAQ from './sections/ContactFAQ';
import ContactSocial from './sections/ContactSocial';
import ContactCareers from './sections/ContactCareers';
import ContactDirect from './sections/ContactDirect';
import ContactHours from './sections/ContactHours';

const Contact = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-20">
            <div className="bg-secondary py-20 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2940&auto=format&fit=crop"
                        alt="Contact Background"
                        className="w-full h-full object-cover grayscale"
                    />
                </div>
                <div className="container-padding relative z-10 text-center">
                    <h1 className="text-6xl md:text-8xl font-display uppercase italic text-white mb-4">
                        Get In <span className="text-primary">Touch</span>
                    </h1>
                </div>
            </div>

            <section className="section-padding bg-background">
                <div className="container-padding">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <div>
                            <SectionTitle align="left" subtitle="Contact Us">
                                Visit The Gym
                            </SectionTitle>
                            <p className="text-gray-300 mb-10 text-lg">
                                We are located in the heart of the city. Come visit us for a tour and see why we are the best rated gym in the area.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                                        <Icons.MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white text-xl font-bold mb-1">Location</h4>
                                        <p className="text-gray-400">123 Iron Street<br />Muscle City, MC 90210</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                                        <Icons.Contact.Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white text-xl font-bold mb-1">Phone</h4>
                                        <p className="text-gray-400">+1 (555) 123-4567</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                                        <Icons.Contact.Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white text-xl font-bold mb-1">Email</h4>
                                        <p className="text-gray-400">info@irongym.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                                        <Icons.Timer size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white text-xl font-bold mb-1">Hours</h4>
                                        <p className="text-gray-400">Mon - Fri: 5am - 11pm</p>
                                        <p className="text-gray-400">Sat - Sun: 7am - 8pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-surface p-8 border border-white/5">
                            <h3 className="text-2xl text-white font-display uppercase italic mb-6">Send us a message</h3>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">First Name</label>
                                        <input type="text" className="w-full bg-background border border-white/10 p-3 text-white focus:border-primary outline-none transition-colors" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Last Name</label>
                                        <input type="text" className="w-full bg-background border border-white/10 p-3 text-white focus:border-primary outline-none transition-colors" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Email</label>
                                    <input type="email" className="w-full bg-background border border-white/10 p-3 text-white focus:border-primary outline-none transition-colors" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Message</label>
                                    <textarea rows="4" className="w-full bg-background border border-white/10 p-3 text-white focus:border-primary outline-none transition-colors"></textarea>
                                </div>

                                <Button variant="primary" className="w-full">
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <ContactMap />
            <ContactHours />
            <ContactFAQ />
            <ContactSocial />
            <ContactCareers />
            <ContactDirect />
        </div>
    );
};

export default Contact;
