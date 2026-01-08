import React from 'react';
import SectionTitle from '../../../components/ui/SectionTitle';

const MembershipFAQ = () => {
    return (
        <section className="section-padding bg-surface">
            <div className="container-padding max-w-4xl mx-auto">
                <SectionTitle align="center" subtitle="Membership Details">
                    FAQ
                </SectionTitle>
                <div className="space-y-6">
                    <div className="border-l-4 border-primary pl-6 py-2 bg-white/5">
                        <h4 className="text-white font-bold uppercase mb-2">Is there a joining fee?</h4>
                        <p className="text-gray-400 text-sm">Yes, there is a one-time initiation fee of $49 for Basic and Pro plans. Elite members have this fee waived.</p>
                    </div>
                    <div className="border-l-4 border-primary pl-6 py-2 bg-white/5">
                        <h4 className="text-white font-bold uppercase mb-2">What is the cancellation policy?</h4>
                        <p className="text-gray-400 text-sm">We require 30 days written notice. Early termination of 12-month contracts may incur a fee.</p>
                    </div>
                    <div className="border-l-4 border-primary pl-6 py-2 bg-white/5">
                        <h4 className="text-white font-bold uppercase mb-2">Can I bring a friend?</h4>
                        <p className="text-gray-400 text-sm">Basic members get 1 guest pass/month. Elite members have unlimited guest privileges on weekends.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MembershipFAQ;
