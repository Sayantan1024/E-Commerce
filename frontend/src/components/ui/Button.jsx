import React from "react";

/**
 * Button component
 * props:
 *  - variant: 'primary' | 'secondary' (default 'primary')
 *  - size: 'sm' | 'md' | 'lg' (default 'md')
 *  - onClick: function
 *  - className: additional classes
 */
export default function Button({ variant = "primary", size = "md", children, onClick, className = "", ...rest }) {
  const base = "inline-flex items-center justify-center rounded focus:outline-none";
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-3 text-base",
  };
  const variants = {
    primary: "bg-green-600 text-white hover:bg-green-700",
    secondary: "border border-gray-300 text-gray-700 bg-white hover:bg-gray-50",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  const classes = `${base} ${sizes[size] || sizes.md} ${variants[variant] || variants.primary} ${className}`;

  return (
    <button type="button" className={classes} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
