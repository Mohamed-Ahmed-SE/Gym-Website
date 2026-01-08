import React from 'react';

const SectionTitle = ({ children, subtitle, align = 'center', className = '' }) => {
    const alignClasses = {
        left: 'text-left',
        center: 'text-center mx-auto',
        right: 'text-right ml-auto'
    };

    return (
        <div className={`mb-12 ${alignClasses[align]} ${className}`}>
            {subtitle && (
                <span className="block text-primary font-bold uppercase tracking-widest text-sm mb-2">
                    {subtitle}
                </span>
            )}
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-display uppercase italic">
                {children}
            </h2>
            <div className={`h-1 w-24 bg-primary mt-4 ${align === 'center' ? 'mx-auto' : ''}`} />
        </div>
    );
};

export default SectionTitle;
