import React from 'react';
import { motion } from 'framer-motion';

const BrutalCard = ({ 
  title, 
  description, 
  children, 
  className = '', 
  variant = 'default',
  onClick,
  disabled = false 
}) => {
  const variants = {
    default: 'bg-white border-4 border-black shadow-[8px_8px_0px_0px_#000]',
    primary: 'bg-yellow-400 border-4 border-black shadow-[8px_8px_0px_0px_#000]',
    secondary: 'bg-pink-400 border-4 border-black shadow-[8px_8px_0px_0px_#000]',
    accent: 'bg-cyan-400 border-4 border-black shadow-[8px_8px_0px_0px_#000]',
    dark: 'bg-black text-white border-4 border-white shadow-[8px_8px_0px_0px_#fff]'
  };

  const hoverVariants = {
    default: 'hover:shadow-[12px_12px_0px_0px_#000] hover:-translate-x-1 hover:-translate-y-1',
    primary: 'hover:shadow-[12px_12px_0px_0px_#000] hover:-translate-x-1 hover:-translate-y-1',
    secondary: 'hover:shadow-[12px_12px_0px_0px_#000] hover:-translate-x-1 hover:-translate-y-1',
    accent: 'hover:shadow-[12px_12px_0px_0px_#000] hover:-translate-x-1 hover:-translate-y-1',
    dark: 'hover:shadow-[12px_12px_0px_0px_#fff] hover:-translate-x-1 hover:-translate-y-1'
  };

  const baseClasses = `
    p-6 
    font-bold 
    transition-all 
    duration-200 
    transform 
    ${variants[variant]} 
    ${onClick && !disabled ? `cursor-pointer ${hoverVariants[variant]}` : ''} 
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    ${className}
  `;

  const cardContent = (
    <>
      {title && (
        <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-lg font-bold mb-4 leading-tight">
          {description}
        </p>
      )}
      {children}
    </>
  );

  if (onClick) {
    return (
      <motion.button
        className={baseClasses}
        onClick={disabled ? undefined : onClick}
        whileHover={disabled ? {} : { 
          x: -4, 
          y: -4,
          transition: { duration: 0.1 }
        }}
        whileTap={disabled ? {} : { 
          x: 2, 
          y: 2,
          transition: { duration: 0.1 }
        }}
        disabled={disabled}
        type="button"
      >
        {cardContent}
      </motion.button>
    );
  }

  return (
    <motion.div
      className={baseClasses}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {cardContent}
    </motion.div>
  );
};

export default BrutalCard;