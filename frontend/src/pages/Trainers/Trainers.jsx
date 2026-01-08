import React, { useState, useEffect } from 'react';
import TrainerCard from './TrainerCard';
import TrainerCertifications from './sections/TrainerCertifications';
import TrainerPhilosophy from './sections/TrainerPhilosophy';
import TrainerLifestyle from './sections/TrainerLifestyle';
import TrainerResults from './sections/TrainerResults';
import TrainerFAQ from './sections/TrainerFAQ';
import TrainerJoinCTA from './sections/TrainerJoinCTA';
import { trainersAPI } from '../../api/trainers';
import Loading from '../../components/common/Loading/Loading';

const Trainers = () => {
    const [trainers, setTrainers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchTrainers();
    }, []);

    const fetchTrainers = async () => {
        try {
            const data = await trainersAPI.getAll();
            setTrainers(data);
        } catch (error) {
            console.error('Error fetching trainers:', error);
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
                        src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2938&auto=format&fit=crop"
                        alt="Trainers Background"
                        className="w-full h-full object-cover grayscale"
                    />
                </div>
                <div className="container-padding relative z-10 text-center">
                    <h1 className="text-6xl md:text-8xl font-display uppercase italic text-white mb-4">
                        Elite <span className="text-primary">Coaches</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
                        Led by industry experts committed to helping you smash your personal records.
                    </p>
                </div>
            </div>

            <TrainerCertifications />

            <section className="section-padding bg-background">
                <div className="container-padding">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {trainers.map((trainer) => (
                            <TrainerCard key={trainer._id || trainer.id} trainer={trainer} />
                        ))}
                    </div>
                </div>
            </section>

            <TrainerPhilosophy />
            <TrainerLifestyle />
            <TrainerResults />
            <TrainerFAQ />
            <TrainerJoinCTA />
        </div>
    );
};

export default Trainers;
