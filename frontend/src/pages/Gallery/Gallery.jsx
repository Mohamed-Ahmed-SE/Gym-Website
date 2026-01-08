import React, { useState } from 'react';
import Modal from '../../components/common/Modal/Modal';
import SectionTitle from '../../components/ui/SectionTitle';
import Image from '../../components/common/Image/Image';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [activeFilter, setActiveFilter] = useState('all');

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const categories = ['all', 'gym', 'classes', 'events', 'trainers'];

    const images = [
        {
            id: 1,
            src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop',
            category: 'gym',
            title: 'Main Training Floor',
        },
        {
            id: 2,
            src: 'https://images.unsplash.com/photo-1601422407692-ec4ee6bf4deb?q=80&w=1287&auto=format&fit=crop',
            category: 'classes',
            title: 'HIIT Class in Session',
        },
        {
            id: 3,
            src: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=1287&auto=format&fit=crop',
            category: 'classes',
            title: 'Yoga Flow Session',
        },
        {
            id: 4,
            src: 'https://images.unsplash.com/photo-1517963879466-cd11fa97f41a?q=80&w=1455&auto=format&fit=crop',
            category: 'gym',
            title: 'CrossFit Area',
        },
        {
            id: 5,
            src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1470&auto=format&fit=crop',
            category: 'trainers',
            title: 'Personal Training',
        },
        {
            id: 6,
            src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1470&auto=format&fit=crop',
            category: 'events',
            title: 'Community Event',
        },
        {
            id: 7,
            src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop',
            category: 'gym',
            title: 'Weight Training Area',
        },
        {
            id: 8,
            src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop',
            category: 'classes',
            title: 'Group Fitness',
        },
        {
            id: 9,
            src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1470&auto=format&fit=crop',
            category: 'trainers',
            title: 'Expert Coaching',
        },
    ];

    const filteredImages =
        activeFilter === 'all'
            ? images
            : images.filter((img) => img.category === activeFilter);

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <div className="bg-secondary py-20 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2940&auto=format&fit=crop"
                        alt="Gallery Background"
                        className="w-full h-full object-cover grayscale"
                    />
                </div>
                <div className="container-padding relative z-10 text-center">
                    <h1 className="text-6xl md:text-8xl font-display uppercase italic text-white mb-4">
                        Our <span className="text-primary">Gallery</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
                        Take a look inside our world-class facilities and vibrant community.
                    </p>
                </div>
            </div>

            {/* Filter Section */}
            <section className="section-padding bg-background">
                <div className="container-padding">
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveFilter(category)}
                                className={`px-6 py-2 font-bold uppercase tracking-wider transition-all ${
                                    activeFilter === category
                                        ? 'bg-primary text-white'
                                        : 'bg-surface text-gray-400 hover:text-white border border-white/10'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Image Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredImages.map((image) => (
                            <div
                                key={image.id}
                                className="relative group cursor-pointer overflow-hidden rounded-lg"
                                onClick={() => setSelectedImage(image)}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.title}
                                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <p className="text-white font-bold text-lg">{image.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal */}
            <Modal
                isOpen={!!selectedImage}
                onClose={() => setSelectedImage(null)}
                size="xl"
            >
                {selectedImage && (
                    <div>
                        <Image
                            src={selectedImage.src}
                            alt={selectedImage.title}
                            className="w-full h-auto rounded-lg mb-4"
                        />
                        <h3 className="text-2xl font-display uppercase text-white">
                            {selectedImage.title}
                        </h3>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default Gallery;
