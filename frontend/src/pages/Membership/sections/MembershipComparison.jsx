import React from 'react';
import SectionTitle from '../../../components/ui/SectionTitle';
import { Icons } from '../../../components/ui/Icons';

const MembershipComparison = () => {
    const features = [
        "Gym Floor Access",
        "Locker Room & Showers",
        "Free WiFi",
        "Group Classes",
        "Sauna & Steam",
        "Towel Service",
        "Personal Training",
        "Guest Privileges",
        "Private Locker"
    ];

    const plans = [
        { name: "Basic", checks: [true, true, true, false, false, false, false, false, false] },
        { name: "Pro", checks: [true, true, true, true, true, false, "1 Session", false, false] },
        { name: "Elite", checks: [true, true, true, true, true, true, "Unlimited", true, true] },
    ];

    return (
        <section className="section-padding bg-background">
            <div className="container-padding max-w-5xl mx-auto">
                <SectionTitle align="center" subtitle="Detailed Breakdown">
                    Compare Plans
                </SectionTitle>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[600px]">
                        <thead>
                            <tr>
                                <th className="p-4 bg-surface border-b border-white/10 text-gray-400 font-bold uppercase tracking-wider text-sm">Features</th>
                                {plans.map((plan, idx) => (
                                    <th key={idx} className="p-4 bg-surface border-b border-white/10 text-white font-display text-2xl uppercase italic text-center text-primary-hover">
                                        {plan.name}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {features.map((feature, fIdx) => (
                                <tr key={fIdx} className="hover:bg-white/5 transition-colors">
                                    <td className="p-4 border-b border-white/5 text-gray-300 font-medium">{feature}</td>
                                    {plans.map((plan, pIdx) => {
                                        const val = plan.checks[fIdx];
                                        return (
                                            <td key={pIdx} className="p-4 border-b border-white/5 text-center">
                                                {val === true ? (
                                                    <Icons.Check className="mx-auto text-primary" size={20} />
                                                ) : val === false ? (
                                                    <Icons.Close className="mx-auto text-gray-600" size={20} />
                                                ) : (
                                                    <span className="text-white font-bold text-sm bg-primary/20 px-2 py-1 rounded">{val}</span>
                                                )}
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default MembershipComparison;
