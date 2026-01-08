import React from 'react';
import Button from '../../components/ui/Button';
import SectionTitle from '../../components/ui/SectionTitle';
import { Icons } from '../../components/ui/Icons';

const About = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const values = [
        {
            icon: <Icons.Heart className="h-12 w-12 text-primary" />,
            title: 'Passion',
            description: 'We live and breathe fitness. Our passion drives everything we do.',
        },
        {
            icon: <Icons.Users className="h-12 w-12 text-primary" />,
            title: 'Community',
            description: 'Building a supportive community where everyone belongs.',
        },
        {
            icon: <Icons.Target className="h-12 w-12 text-primary" />,
            title: 'Excellence',
            description: 'Striving for excellence in every workout, every day.',
        },
        {
            icon: <Icons.Award className="h-12 w-12 text-primary" />,
            title: 'Results',
            description: 'Your success is our success. We measure by your results.',
        },
    ];

    const stats = [
        { number: '10+', label: 'Years Experience' },
        { number: '5000+', label: 'Happy Members' },
        { number: '50+', label: 'Expert Trainers' },
        { number: '24/7', label: 'Access' },
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <div className="bg-secondary py-20 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2940&auto=format&fit=crop"
                        alt="About Background"
                        className="w-full h-full object-cover grayscale"
                    />
                </div>
                <div className="container-padding relative z-10 text-center">
                    <h1 className="text-6xl md:text-8xl font-display uppercase italic text-white mb-4">
                        About <span className="text-primary">IronGym</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
                        Building stronger bodies, stronger minds, and stronger communities since 2014.
                    </p>
                </div>
            </div>

            {/* Story Section */}
            <section className="section-padding bg-background">
                <div className="container-padding">
                    <div className="max-w-4xl mx-auto">
                        <SectionTitle title="Our Story" />
                        <div className="prose prose-invert max-w-none">
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                IronGym was founded with a simple mission: to create a fitness experience that
                                goes beyond the ordinary. We believe that everyone deserves access to world-class
                                facilities, expert training, and a supportive community that pushes you to be your best.
                            </p>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                What started as a small local gym has grown into a premier fitness destination,
                                serving thousands of members who trust us with their health and fitness goals.
                                Our state-of-the-art facilities, combined with our passionate team of trainers,
                                create an environment where transformation happens.
                            </p>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Today, IronGym stands as a testament to what's possible when you combine
                                cutting-edge equipment, expert guidance, and an unwavering commitment to
                                member success. We're not just a gym—we're your partners in achieving
                                extraordinary results.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-surface border-y border-white/5">
                <div className="container-padding">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="text-center">
                                <div className="text-5xl md:text-6xl font-display italic text-primary mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-400 font-bold uppercase tracking-wider text-sm">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section-padding bg-background">
                <div className="container-padding">
                    <SectionTitle title="Our Values" subtitle="What drives us every day" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                        {values.map((value, idx) => (
                            <div
                                key={idx}
                                className="bg-surface border border-white/10 rounded-lg p-6 text-center hover:border-primary/50 transition-colors"
                            >
                                <div className="flex justify-center mb-4">{value.icon}</div>
                                <h3 className="text-xl font-display uppercase text-white mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-gray-400">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="section-padding bg-surface border-y border-white/5">
                <div className="container-padding">
                    <div className="max-w-4xl mx-auto text-center">
                        <SectionTitle title="Our Mission" />
                        <p className="text-gray-300 text-xl leading-relaxed mb-8">
                            To empower every individual to achieve their peak physical and mental potential
                            through world-class facilities, expert guidance, and an unwavering commitment to
                            excellence. We believe fitness is a journey, not a destination, and we're here
                            to support you every step of the way.
                        </p>
                        <Button to="/membership" variant="primary" className="text-lg px-10 py-4">
                            Join Our Mission
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
