import React from 'react';

const Card = ({ children, className = '', hover = true, ...props }) => {
    return (
        <div
            className={`
        bg-surface border border-white/5 p-6 
        ${hover ? 'hover:border-primary/50 hover:bg-surface/80 hover:-translate-y-1' : ''} 
        transition-all duration-300 
        ${className}
      `}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;
