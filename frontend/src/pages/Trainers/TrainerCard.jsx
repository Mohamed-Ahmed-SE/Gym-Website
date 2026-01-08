import React from 'react';
import Card from '../../components/ui/Card';
import { Icons } from '../../components/ui/Icons';
import Image from '../../components/common/Image/Image';

const TrainerCard = ({ trainer }) => {
    return (
        <Card className="p-0 overflow-hidden border-none group bg-transparent">
            <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg mb-6">
                <Image
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />

                {/* Social Overlay */}
                <div className="absolute bottom-6 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex justify-center gap-4 bg-surface/90 backdrop-blur-sm py-3 px-6 rounded-full mx-auto w-max">
                        <a href="#" className="text-white hover:text-primary"><Icons.Social.Instagram size={20} /></a>
                        <a href="#" className="text-white hover:text-primary"><Icons.Social.Twitter size={20} /></a>
                        <a href="#" className="text-white hover:text-primary"><Icons.Social.Facebook size={20} /></a>
                    </div>
                </div>
            </div>

            <div className="text-center">
                <h3 className="text-3xl font-display text-white uppercase italic mb-1">{trainer.name}</h3>
                <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">{trainer.role}</p>
                <p className="text-gray-400 mb-6 max-w-sm mx-auto">{trainer.bio}</p>

                <div className="flex flex-wrap justify-center gap-2">
                    {trainer.specialties.map((spec, index) => (
                        <span key={index} className="px-3 py-1 bg-surface border border-white/10 text-xs font-bold text-gray-300 uppercase tracking-wider rounded-full">
                            {spec}
                        </span>
                    ))}
                </div>
            </div>
        </Card>
    );
};

export default TrainerCard;
