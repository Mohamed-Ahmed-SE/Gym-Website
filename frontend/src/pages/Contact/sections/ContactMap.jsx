import React from 'react';
import { Icons } from '../../../components/ui/Icons'; // Import Icons just in case for overlays, though focusing on image

const ContactMap = () => {
    return (
        <div className="h-[500px] w-full relative bg-surface">
            {/* Visual placeholder for map */}
            <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2948&auto=format&fit=crop"
                alt="Map Location"
                className="w-full h-full object-cover grayscale opacity-50 contrast-125"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative">
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full animate-ping"></span>
                    <div className="bg-background border-2 border-primary p-2 rounded-full shadow-2xl relative z-10">
                        <div className="w-4 h-4 bg-primary rounded-full"></div>
                    </div>
                    <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-surface border border-white/10 px-4 py-2 whitespace-nowrap rounded-sm shadow-xl">
                        <p className="text-white font-bold uppercase text-xs tracking-wider">IronGym HQ</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMap;
