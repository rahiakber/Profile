import React, { ButtonHTMLAttributes } from 'react';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
}

const Button: React.FC<CustomButtonProps> = ({
  className = '',
  variant = 'primary',
  children,
  ...props
}) => {
  let baseStyles = 'px-6 py-3 rounded-lg font-semibold transition duration-300 ease-in-out transform hover:scale-[1.02] shadow-lg';
  let variantStyles = '';

  switch (variant) {
    case 'primary':
      variantStyles = 'bg-gradient-to-r from-primary-accent to-secondary-accent hover:from-primary-accent/90 hover:to-secondary-accent/90 text-white shadow-glow';
      break;
    case 'secondary':
      variantStyles = 'bg-surface-dark border border-primary-accent text-text-light hover:bg-primary-accent/20';
      break;
    case 'ghost':
      variantStyles = 'bg-transparent border border-text-muted text-text-light hover:bg-primary-accent/10';
      break;
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
