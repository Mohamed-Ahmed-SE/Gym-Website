import React from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { Icons } from '../../components/ui/Icons';

const PricingCard = ({ plan }) => {
    const isRecommended = plan.recommended;

    return (
        <Card
            className={`
        relative flex flex-col p-8 transition-transform duration-300
        ${isRecommended ? 'border-primary shadow-2xl shadow-primary/20 scale-105 z-10' : 'border-white/5 bg-surface/50'}
      `}
            hover={!isRecommended}
        >
            {isRecommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full shadow-lg">
                    Most Popular
                </div>
            )}

            <div className="text-center mb-8">
                <h3 className="text-2xl font-display uppercase italic text-white mb-4">{plan.name}</h3>
                <div className="flex items-center justify-center gap-1 text-primary">
                    <span className="text-3xl font-bold">$</span>
                    <span className="text-6xl font-display italic">{plan.price}</span>
                    <span className="text-gray-400 font-sans text-lg">{plan.period}</span>
                </div>
            </div>

            <ul className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <Icons.Check className={`shrink-0 h-5 w-5 ${isRecommended ? 'text-primary' : 'text-gray-500'}`} />
                        <span className="text-sm">{feature}</span>
                    </li>
                ))}
            </ul>

            <Button
                variant={isRecommended ? 'primary' : 'secondary'}
                className="w-full"
                onClick={() => {
                    // This will be connected to payment flow
                    const planId = plan._id || plan.id;
                    if (window.confirm(`Purchase ${plan.name} membership for $${plan.price}${plan.period}?`)) {
                        // Navigate to payment or handle purchase
                        window.location.href = `/membership?plan=${planId}`;
                    }
                }}
            >
                Choose {plan.name}
            </Button>
        </Card>
    );
};

export default PricingCard;
