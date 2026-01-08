import React from 'react';
import Button from '../../components/ui/Button';
import Image from '../../components/common/Image/Image';

const HeroSection = () => {
    return (
        <div className="relative h-screen min-h-[600px] flex items-center">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2938&auto=format&fit=crop"
                    alt="Gym Hero"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
                <div className="absolute inset-0 bg-background/40" />
            </div>

            <div className="container-padding relative z-10 w-full">
                <div className="max-w-3xl">
                    <span className="block text-primary font-bold uppercase tracking-[0.2em] mb-4 text-lg animate-fade-in-up">
                        Welcome to IronGym
                    </span>
                    <h1 className="text-6xl md:text-7xl lg:text-8xl text-white font-display uppercase italic mb-8 leading-none animate-fade-in-up delay-100">
                        Forging <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/50">Steel</span><br />
                        Building <span className="text-white">Legacy</span>
                    </h1>
                    <p className="text-xl text-gray-300 mb-10 max-w-xl font-light leading-relaxed animate-fade-in-up delay-200">
                        Experience elite training facilities, expert coaching, and a community dedicated to pushing limits. Your transformation starts here.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
                        <Button to="/membership" variant="primary">
                            Start Free Trial
                        </Button>
                        <Button to="/programs" variant="secondary">
                            Explore Programs
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
