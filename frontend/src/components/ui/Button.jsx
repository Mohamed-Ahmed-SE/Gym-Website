import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../common/Loading/Loading';

const Button = ({
    children,
    to,
    variant = 'primary',
    className = '',
    loading = false,
    disabled = false,
    onClick,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-sm font-bold uppercase tracking-widest transition-all duration-300 transform skew-x-[-10deg] disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-primary text-white hover:bg-primary/90 hover:skew-x-[-15deg] shadow-lg shadow-primary/25",
        secondary: "bg-surface text-white border border-white/10 hover:bg-white/5 hover:border-primary/50",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white"
    };

    const content = (
        <span className="inline-block transform skew-x-[10deg]">
            {loading ? <Loading size="sm" /> : children}
        </span>
    );

    if (to && !onClick) {
        return (
            <Link
                to={to}
                className={`${baseStyles} ${variants[variant]} ${className}`}
                {...props}
            >
                {content}
            </Link>
        );
    }

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            onClick={onClick}
            disabled={disabled || loading}
            {...props}
        >
            {content}
        </button>
    );
};

export default Button;
