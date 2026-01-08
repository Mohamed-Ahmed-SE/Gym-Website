import React from 'react';
import SectionTitle from '../../../components/ui/SectionTitle';
import Image from '../../../components/common/Image/Image';

const HomeGallery = () => {
    // Using placeholder images for demo
    const images = [
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1574680096141-1c57c502aa8f?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517963879466-cd11fa97f41a?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1623874514711-0f321325f318?q=80&w=600&auto=format&fit=crop",
    ];

    return (
        <section className="py-2 bg-black">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 h-[300px] md:h-[200px]">
                {images.map((img, idx) => (
                    <div key={idx} className="relative group overflow-hidden h-full w-full">
                        <Image
                            src={img}
                            alt="Gallery"
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                ))}
            </div>
            <div className="bg-primary text-white text-center py-2 text-sm font-bold uppercase tracking-widest">
                Follow us @IronGymOfficial
            </div>
        </section>
    );
};

export default HomeGallery;
