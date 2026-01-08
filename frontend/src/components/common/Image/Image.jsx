import React, { useState } from 'react';

const Image = ({ src, alt, className = '', fallbackSrc, ...props }) => {
    const [imgSrc, setImgSrc] = useState(src);
    const [hasError, setHasError] = useState(false);

    const handleError = () => {
        if (!hasError) {
            setHasError(true);
            if (fallbackSrc) {
                setImgSrc(fallbackSrc);
            } else {
                // Default fallback image
                setImgSrc('https://via.placeholder.com/600x400/1E293B/E11D48?text=Image+Not+Available');
            }
        }
    };

    return (
        <img
            src={imgSrc}
            alt={alt}
            className={className}
            onError={handleError}
            loading="lazy"
            {...props}
        />
    );
};

export default Image;
