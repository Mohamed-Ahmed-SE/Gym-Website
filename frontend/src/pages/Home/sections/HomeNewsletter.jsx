import React from 'react';
import Button from '../../../components/ui/Button';

const HomeNewsletter = () => {
    return (
        <section className="py-24 bg-background border-t border-white/5">
            <div className="container-padding text-center max-w-2xl mx-auto">
                <h2 className="text-4xl font-display uppercase italic text-white mb-4">Join The Inner Circle</h2>
                <p className="text-gray-400 mb-8">Get exclusive workout tips, nutrition guides, and member-only offers delivered to your inbox.</p>

                <form className="flex flex-col sm:flex-row gap-4">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="flex-1 bg-surface border border-white/10 px-6 py-4 text-white focus:border-primary outline-none"
                    />
                    <Button variant="primary">Subscribe</Button>
                </form>
            </div>
        </section>
    );
};

export default HomeNewsletter;
