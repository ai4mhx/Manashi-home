import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyle = "inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors";

    const variants = {
        primary: "border-transparent text-white bg-primary hover:bg-slate-800 shadow-md hover:shadow-lg hover:shadow-primary/30 focus:ring-primary",
        secondary: "border-gray-300 text-gray-700 bg-white hover:bg-gray-50 shadow-sm hover:shadow focus:ring-accent",
        outline: "border-primary text-primary bg-transparent hover:bg-slate-50 focus:ring-primary",
        accent: "border-transparent text-white bg-accent hover:bg-sky-600 shadow-md hover:shadow-lg hover:shadow-accent/30 focus:ring-accent",
    };

    return (
        <button
            className={`${baseStyle} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
