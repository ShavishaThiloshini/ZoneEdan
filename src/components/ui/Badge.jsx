import React from 'react';

const Badge = ({ 
  children, 
  variant = 'default',
  className = '' 
}) => {
  const baseStyles = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-sans font-medium";
  
  const variants = {
    default: "bg-aqua-mist text-deep-teal",
    success: "bg-fresh-teal/20 text-deep-forest",
    warning: "bg-warm-sand text-deep-forest",
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
