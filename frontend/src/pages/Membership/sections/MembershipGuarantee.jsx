import React from 'react';
import { Icons } from '../../../components/ui/Icons';

const MembershipGuarantee = () => {
    return (
        <section className="py-12 bg-black border-t border-white/10">
            <div className="container-padding text-center">
                <div className="inline-flex items-center justify-center p-4 rounded-full border-2 border-primary mb-6 text-primary">
                    <Icons.Check size={32} />
                </div>
                <h3 className="text-2xl text-white font-display uppercase italic mb-2">30-Day Money Back Guarantee</h3>
                <p className="text-gray-400 max-w-xl mx-auto">
                    If you're not completely satisfied with your IronGym experience in the first 30 days, we'll refund your membership dues. No questions asked.
                </p>
            </div>
        </section>
    );
};

export default MembershipGuarantee;
