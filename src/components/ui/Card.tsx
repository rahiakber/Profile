import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-surface-dark p-8 rounded-xl shadow-2xl transition duration-300 hover:shadow-glow/20 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
