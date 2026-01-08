import React from 'react';
import { Icons } from '../../../components/ui/Icons';

const ContactDirect = () => {
    return (
        <section className="py-12 bg-background border-t border-white/5">
            <div className="container-padding text-center">
                <p className="text-gray-400 uppercase tracking-widest text-sm font-bold mb-6">Or chat with us directly</p>
                <div className="flex justify-center gap-6">
                    <button className="flex items-center gap-3 bg-[#25D366] text-white px-6 py-3 rounded-full hover:bg-[#128C7E] transition-colors font-bold">
                        <div className="w-5 h-5 bg-white rounded-full"></div> {/* Placeholder for WhatsApp icon if not available in lucide set immediately */}
                        WhatsApp
                    </button>
                    <button className="flex items-center gap-3 bg-[#0084FF] text-white px-6 py-3 rounded-full hover:bg-[#0078E7] transition-colors font-bold">
                        <div className="w-5 h-5 bg-white rounded-full"></div> {/* Messenger logo placeholder */}
                        Messenger
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ContactDirect;
