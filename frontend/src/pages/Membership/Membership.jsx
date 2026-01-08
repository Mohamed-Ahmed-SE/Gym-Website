import React, { useState, useEffect } from 'react';
import PricingCard from './PricingCard';
import MembershipComparison from './sections/MembershipComparison';
import MembershipStats from './sections/MembershipStats';
import MembershipPerks from './sections/MembershipPerks';
import MembershipCorporate from './sections/MembershipCorporate';
import MembershipFAQ from './sections/MembershipFAQ';
import MembershipGuarantee from './sections/MembershipGuarantee';
import { membershipsAPI } from '../../api/memberships';
import { memberships as fallbackMemberships } from '../../data/memberships';
import { Icons } from '../../components/ui/Icons';
import Loading from '../../components/common/Loading/Loading';

const Membership = () => {
    const [memberships, setMemberships] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchMemberships();
    }, []);

    const fetchMemberships = async () => {
        try {
            const data = await membershipsAPI.getAll();
            // Use API data if available, otherwise use fallback
            if (data && data.length > 0) {
                setMemberships(data);
            } else {
                setMemberships(fallbackMemberships);
            }
        } catch (error) {
            console.error('Error fetching memberships:', error);
            // Use fallback data if API fails
            setMemberships(fallbackMemberships);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="pt-20 min-h-screen flex items-center justify-center">
                <Loading size="lg" />
            </div>
        );
    }

    return (
        <div className="pt-20">
            <div className="bg-secondary py-20 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1534258936925-c48947387e3b?q=80&w=2940&auto=format&fit=crop"
                        alt="Membership Background"
                        className="w-full h-full object-cover grayscale"
                    />
                </div>
                <div className="container-padding relative z-10 text-center">
                    <h1 className="text-6xl md:text-8xl font-display uppercase italic text-white mb-4">
                        Join The <span className="text-primary">Club</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
                        No contracts. No hidden fees. Just results. Choose the plan that fits your goals.
                    </p>
                </div>
            </div>

            <section className="section-padding bg-background">
                <div className="container-padding">
                    {memberships.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
                            {memberships.map((plan) => (
                                <PricingCard key={plan._id || plan.id} plan={plan} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-gray-400 mb-4">No membership plans available at the moment.</p>
                            <p className="text-gray-500 text-sm">Please check back later or contact us for more information.</p>
                        </div>
                    )}
                </div>
            </section>

            <MembershipComparison />
            <MembershipStats />
            <MembershipPerks />
            <MembershipCorporate />
            <MembershipFAQ />

            <section className="py-20 bg-surface border-y border-white/5">
                <div className="container-padding">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="max-w-xl">
                            <h2 className="text-4xl font-display uppercase italic text-white mb-4">Free Day Pass</h2>
                            <p className="text-gray-300 mb-6">
                                Not sure if IronGym is right for you? Come in and try us out for free. No obligation.
                            </p>
                            <div className="flex items-center gap-4 text-primary font-bold uppercase tracking-wider">
                                <Icons.Check size={20} />
                                <span>Full Access</span>
                                <Icons.Check size={20} />
                                <span>Group Classes</span>
                            </div>
                        </div>

                        <form className="w-full max-w-md bg-secondary p-8 border border-white/5 rounded-lg">
                            <h3 className="text-xl text-white font-bold mb-6 text-center">Claim Your Pass</h3>
                            <div className="space-y-4">
                                <input type="text" placeholder="Name" className="w-full bg-surface border border-white/10 p-3 text-white focus:border-primary outline-none transition-colors rounded-sm" />
                                <input type="email" placeholder="Email" className="w-full bg-surface border border-white/10 p-3 text-white focus:border-primary outline-none transition-colors rounded-sm" />
                                <button type="button" className="w-full bg-white text-black font-bold uppercase py-3 hover:bg-gray-200 transition-colors">
                                    Get Free Pass
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <MembershipGuarantee />
        </div>
    );
};

export default Membership;
