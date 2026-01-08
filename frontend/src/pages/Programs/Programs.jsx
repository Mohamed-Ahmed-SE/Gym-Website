import React, { useState, useEffect } from 'react';
import ProgramsGrid from './ProgramsGrid';
import SectionTitle from '../../components/ui/SectionTitle';
import ProgramMethodology from './sections/ProgramMethodology';
import ProgramEquipment from './sections/ProgramEquipment';
import ProgramSuccess from './sections/ProgramSuccess';
import ProgramSchedule from './sections/ProgramSchedule';
import ProgramFAQ from './sections/ProgramFAQ';
import ProgramCTA from './sections/ProgramCTA';
import { programsAPI } from '../../api/programs';
import Loading from '../../components/common/Loading/Loading';

const Programs = () => {
    const [programs, setPrograms] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchPrograms();
    }, []);

    const fetchPrograms = async () => {
        try {
            const data = await programsAPI.getAll();
            setPrograms(data);
        } catch (error) {
            console.error('Error fetching programs:', error);
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
                        src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=2875&auto=format&fit=crop"
                        alt="Background"
                        className="w-full h-full object-cover grayscale"
                    />
                </div>
                <div className="container-padding relative z-10 text-center">
                    <h1 className="text-6xl md:text-8xl font-display uppercase italic text-white mb-4">
                        Our <span className="text-primary">Programs</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
                        Choose from a variety of scientifically designed training paths to reach your specific goals.
                    </p>
                </div>
            </div>

            <section className="section-padding bg-background">
                <div className="container-padding">
                    <SectionTitle subtitle="Start Training" className="mb-16">
                        Find Your Path
                    </SectionTitle>
                    <ProgramsGrid programs={programs} />
                </div>
            </section>

            <ProgramMethodology />
            <ProgramEquipment />
            <ProgramSuccess />
            <ProgramSchedule />
            <ProgramFAQ />
            <ProgramCTA />
        </div>
    );
};

export default Programs;
