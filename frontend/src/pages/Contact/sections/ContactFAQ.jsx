import React from 'react';
import SectionTitle from '../../../components/ui/SectionTitle';

const ContactFAQ = () => {
    return (
        <section className="section-padding bg-background">
            <div className="container-padding max-w-4xl mx-auto">
                <SectionTitle align="center" subtitle="Need Help?">
                    Common Inquiries
                </SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="text-white font-bold uppercase mb-2">Is there parking available?</h4>
                        <p className="text-gray-400 text-sm">Yes, we have a dedicated parking lot for members with 2-hour validation.</p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold uppercase mb-2">Is the facility wheelchair accessible?</h4>
                        <p className="text-gray-400 text-sm">Absolutely. Our entire gym is located on the ground floor with ADA compliant restrooms.</p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold uppercase mb-2">What are the peak hours?</h4>
                        <p className="text-gray-400 text-sm">Peak hours are generally 6am-8am and 5pm-7pm. Come mid-day for a quieter session.</p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold uppercase mb-2">Lost and Found?</h4>
                        <p className="text-gray-400 text-sm">Items left behind are kept at the front desk for 14 days before donation.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactFAQ;
