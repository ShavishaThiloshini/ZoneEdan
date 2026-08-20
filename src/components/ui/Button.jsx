import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-sans font-medium transition-colors duration-200 rounded-md";
  
  const variants = {
    primary: "bg-deep-teal text-white hover:bg-ocean-teal",
    secondary: "bg-ocean-teal text-white hover:bg-deep-teal",
    outline: "border-2 border-deep-teal text-deep-teal hover:bg-aqua-mist",
    ghost: "text-deep-teal hover:bg-aqua-mist/50",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-8 py-3 text-lg",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
