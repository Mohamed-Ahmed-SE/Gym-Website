import React from 'react';

const Loading = ({ size = 'md', className = '' }) => {
    const sizeClasses = {
        sm: 'h-4 w-4',
        md: 'h-8 w-8',
        lg: 'h-12 w-12',
    };

    return (
        <div className={`flex items-center justify-center ${className}`}>
            <div
                className={`${sizeClasses[size]} border-4 border-primary border-t-transparent rounded-full animate-spin`}
            ></div>
        </div>
    );
};

export default Loading;
