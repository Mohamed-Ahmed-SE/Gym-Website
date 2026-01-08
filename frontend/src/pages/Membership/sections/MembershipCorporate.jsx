import React from 'react';
import SectionTitle from '../../../components/ui/SectionTitle';
import Button from '../../../components/ui/Button';

const MembershipCorporate = () => {
    return (
        <section className="section-padding bg-background border-t border-white/5">
            <div className="container-padding">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1">
                        <SectionTitle align="left" subtitle="For Business">
                            Corporate Wellness
                        </SectionTitle>
                        <p className="text-gray-300 text-lg mb-6">
                            Healthy employees are happy, productive employees. We offer customized corporate packages for teams of 5 to 500.
                        </p>
                        <ul className="space-y-3 mb-8 text-gray-400">
                            <li className="flex items-center gap-2"><span className="w-2 h-2 bg-primary rounded-full"></span>Subsidized Membership Rates</li>
                            <li className="flex items-center gap-2"><span className="w-2 h-2 bg-primary rounded-full"></span>Quarterly Team Challenges</li>
                            <li className="flex items-center gap-2"><span className="w-2 h-2 bg-primary rounded-full"></span>On-site Wellness Seminars</li>
                        </ul>
                        <Button to="/contact" variant="outline">Request Corporate Info</Button>
                    </div>
                    <div className="flex-1 w-full">
                        <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=2875&auto=format&fit=crop" alt="Corporate Gym" className="w-full h-80 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MembershipCorporate;
