import React from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../ui/Icons';

const Footer = () => {
    return (
        <footer className="bg-secondary border-t border-white/5 pt-20 pb-10">
            <div className="container-padding">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div>
                        <Link to="/" className="flex items-center gap-2 mb-6">
                            <Icons.Dumbbell className="h-8 w-8 text-primary" />
                            <span className="text-2xl font-display font-bold tracking-wider text-white">
                                IRON<span className="text-primary">GYM</span>
                            </span>
                        </Link>
                        <p className="text-muted mb-6">
                            Forging elite bodies and minds through proven strength and conditioning methodologies.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-surface rounded-full text-white hover:bg-primary hover:text-white transition-colors">
                                <Icons.Social.Instagram size={20} />
                            </a>
                            <a href="#" className="p-2 bg-surface rounded-full text-white hover:bg-primary hover:text-white transition-colors">
                                <Icons.Social.Facebook size={20} />
                            </a>
                            <a href="#" className="p-2 bg-surface rounded-full text-white hover:bg-primary hover:text-white transition-colors">
                                <Icons.Social.Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white text-xl font-display mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><Link to="/programs" className="text-muted hover:text-primary transition-colors">Programs</Link></li>
                            <li><Link to="/trainers" className="text-muted hover:text-primary transition-colors">Trainers</Link></li>
                            <li><Link to="/membership" className="text-muted hover:text-primary transition-colors">Membership</Link></li>
                            <li><Link to="/contact" className="text-muted hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Programs */}
                    <div>
                        <h4 className="text-white text-xl font-display mb-6">Programs</h4>
                        <ul className="space-y-4">
                            <li className="text-muted">Strength Training</li>
                            <li className="text-muted">HIIT Cardio</li>
                            <li className="text-muted">Bodybuilding</li>
                            <li className="text-muted">Functional Fitness</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white text-xl font-display mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-muted">
                                <Icons.MapPin className="h-5 w-5 text-primary shrink-0" />
                                <span>123 Iron Street, Muscle City, MC 90210</span>
                            </li>
                            <li className="flex items-center gap-3 text-muted">
                                <Icons.Contact.Phone className="h-5 w-5 text-primary shrink-0" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3 text-muted">
                                <Icons.Contact.Mail className="h-5 w-5 text-primary shrink-0" />
                                <span>info@irongym.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 text-center text-muted sm:flex sm:justify-between sm:text-left">
                    <p>&copy; {new Date().getFullYear()} IronGym. All rights reserved.</p>
                    <div className="flex gap-6 justify-center mt-4 sm:mt-0">
                        <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
