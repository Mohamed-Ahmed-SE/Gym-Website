import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { programsAPI } from '../../api/programs';
import { Icons } from '../../components/ui/Icons';
import Button from '../../components/ui/Button';
import Loading from '../../components/common/Loading/Loading';
import Image from '../../components/common/Image/Image';

const ProgramDetails = () => {
    const { id } = useParams();
    const [program, setProgram] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchProgram();
    }, [id]);

    const fetchProgram = async () => {
        try {
            const data = await programsAPI.getById(id);
            setProgram(data);
        } catch (error) {
            console.error('Error fetching program:', error);
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

    if (!program) {
        return (
            <div className="pt-20 min-h-screen flex items-center justify-center bg-background text-white">
                <div className="text-center">
                    <h2 className="text-4xl font-display mb-4">Program Not Found</h2>
                    <Button to="/programs" variant="primary">Back to Programs</Button>
                </div>
            </div>
        );
    }

    const instructor = program.instructorId;

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <div className="relative h-[600px]">
                <div className="absolute inset-0">
                    <img src={program.image} alt={program.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                </div>
                <div className="absolute inset-0 flex items-end">
                    <div className="container-padding pb-20 w-full">
                        <span className="inline-block py-1 px-3 border border-primary text-primary text-sm font-bold uppercase tracking-widest mb-4 backdrop-blur-sm">
                            {program.intensity} Intensity
                        </span>
                        <h1 className="text-6xl md:text-8xl font-display text-white italic uppercase mb-6 leading-none">
                            {program.title}
                        </h1>
                        <div className="flex items-center gap-6 text-gray-200 font-medium">
                            <div className="flex items-center gap-2">
                                <Icons.Timer className="text-primary" />
                                <span>{program.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Icons.Flame className="text-primary" />
                                <span>{program.intensity}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-background section-padding">
                <div className="container-padding">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <h2 className="text-4xl font-display text-white uppercase italic mb-6">About The Program</h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-12">
                                {program.longDescription}
                            </p>

                            <h3 className="text-2xl font-display text-white uppercase italic mb-6">Key Benefits</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                                {program.benefits.map((benefit, idx) => (
                                    <div key={idx} className="flex items-center gap-3 bg-surface p-4 border border-white/5 rounded-sm">
                                        <Icons.Check className="text-primary shrink-0" />
                                        <span className="text-gray-200">{benefit}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Schedule */}
                            <div className="mb-12">
                                <h3 className="text-2xl font-display text-white uppercase italic mb-6">Weekly Schedule</h3>
                                <div className="flex flex-wrap gap-4">
                                    {program.schedule?.map((schedule, idx) => (
                                        <div key={idx} className="bg-white/5 px-6 py-3 rounded-sm border-l-4 border-primary">
                                            <span className="text-white font-bold tracking-wide">
                                                {typeof schedule === 'string' ? schedule : `${schedule.day} ${schedule.time}`}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="bg-surface p-8 border border-white/5 sticky top-24">
                                <h3 className="text-2xl font-display text-white uppercase italic mb-6">Your Coach</h3>
                                {instructor && (
                                    <div className="text-center mb-8">
                                        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-2 border-primary">
                                            <Image src={instructor.image} alt={instructor.name} className="w-full h-full object-cover" />
                                        </div>
                                        <h4 className="text-xl font-bold text-white uppercase tracking-wider">{instructor.name}</h4>
                                        <p className="text-primary text-sm font-bold uppercase mb-4">{instructor.role}</p>
                                        <p className="text-gray-400 text-sm">{instructor.bio}</p>
                                    </div>
                                )}

                                <div className="space-y-4">
                                    <Button to="/membership" variant="primary" className="w-full">
                                        Join Now
                                    </Button>
                                    <Button to="/contact" variant="outline" className="w-full">
                                        Ask a Question
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Section (Simple Previous) */}
            <section className="py-20 bg-secondary border-t border-white/5">
                <div className="container-padding text-center">
                    <h2 className="text-4xl font-display text-white uppercase italic mb-8">Ready to Start?</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">Take the first step towards your fitness goals. Sign up for a membership today and get unlimited access to all programs.</p>
                    <Button to="/membership" variant="primary">View Memberships</Button>
                </div>
            </section>
        </div>
    );
};

export default ProgramDetails;
