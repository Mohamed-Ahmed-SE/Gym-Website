import React, { useState, useEffect } from 'react';
import HeroSection from './HeroSection';
import HomeStats from './sections/HomeStats';
import HomeFeatures from './sections/HomeFeatures';
import ProgramsPreview from './ProgramsPreview';
import HomeGallery from './sections/HomeGallery';
import TrainersPreview from './TrainersPreview';
import HomeTestimonials from './sections/HomeTestimonials';
import HomeFAQ from './sections/HomeFAQ';
import HomeNewsletter from './sections/HomeNewsletter';
import { programsAPI } from '../../api/programs';
import { trainersAPI } from '../../api/trainers';
import Button from '../../components/ui/Button';
import Loading from '../../components/common/Loading/Loading';

const Home = () => {
    const [programs, setPrograms] = useState([]);
    const [trainers, setTrainers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const [programsData, trainersData] = await Promise.all([
                programsAPI.getAll().catch(() => []),
                trainersAPI.getAll().catch(() => []),
            ]);
            setPrograms(programsData);
            setTrainers(trainersData);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="w-full overflow-x-hidden min-h-screen flex items-center justify-center">
                <Loading size="lg" />
            </div>
        );
    }

    return (
        <div className="w-full overflow-x-hidden">
            <HeroSection />
            <HomeStats />
            <HomeFeatures />
            <ProgramsPreview programs={programs} />
            <HomeGallery />
            <TrainersPreview trainers={trainers} />
            <HomeTestimonials />
            <HomeFAQ />

            {/* Call to Action Section */}
            <section className="py-24 bg-primary text-white text-center">
                <div className="container-padding">
                    <h2 className="text-5xl md:text-7xl font-display uppercase italic mb-6">
                        Ready to Transform?
                    </h2>
                    <p className="text-xl mb-10 max-w-2xl mx-auto font-light">
                        Join the elite community at IronGym today and start your journey to a stronger, healthier you.
                    </p>
                    <Button to="/membership" variant="secondary" className="bg-white text-primary border-transparent hover:bg-gray-100 hover:text-primary text-lg px-10 py-4">
                        Join Now
                    </Button>
                </div>
            </section>

            <HomeNewsletter />
        </div>
    );
};

export default Home;
