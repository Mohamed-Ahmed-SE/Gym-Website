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
    const baseStyles = "inline-flex items-center justify-center gap-2 px-5 py-3 text-[11px] font-bold uppercase tracking-widest transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2";

    const variants = {
        primary: "bg-primary text-secondary hover:bg-primary/90",
        secondary: "bg-surface text-white border border-white/10 hover:bg-white/5 hover:border-primary/50",
        outline: "border border-primary text-primary hover:bg-primary hover:text-secondary"
    };

    const content = (
        <span className="inline-flex items-center gap-2">
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
