import React from 'react';

const Input = ({
    type = 'text',
    label,
    name,
    value,
    onChange,
    placeholder,
    error,
    required = false,
    className = '',
    ...props
}) => {
    return (
        <div className={`w-full ${className}`}>
            {label && (
                <label
                    htmlFor={name}
                    className="block text-sm font-bold uppercase tracking-wider text-gray-300 mb-2"
                >
                    {label}
                    {required && <span className="text-primary ml-1">*</span>}
                </label>
            )}
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`w-full bg-surface border ${
                    error ? 'border-primary' : 'border-white/10'
                } p-3 text-white focus:border-primary outline-none transition-colors rounded-sm placeholder:text-gray-500`}
                {...props}
            />
            {error && <p className="mt-1 text-sm text-primary">{error}</p>}
        </div>
    );
};

export default Input;
