import { motion } from 'framer-motion';
import { forwardRef } from 'react';

const BrutalButton = forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  disabled = false, 
  onClick, 
  className = '',
  ...props 
}, ref) => {
  const baseStyles = 'font-bold border-4 border-black transition-all duration-150 ease-out active:translate-x-1 active:translate-y-1 focus:outline-none focus:ring-4 focus:ring-yellow-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:transform-none';
  
  const variants = {
    primary: 'bg-yellow-400 text-black shadow-[8px_8px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] active:shadow-[2px_2px_0px_0px_#000]',
    secondary: 'bg-pink-400 text-black shadow-[8px_8px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] active:shadow-[2px_2px_0px_0px_#000]',
    success: 'bg-green-400 text-black shadow-[8px_8px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] active:shadow-[2px_2px_0px_0px_#000]',
    danger: 'bg-red-400 text-white shadow-[8px_8px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] active:shadow-[2px_2px_0px_0px_#000]',
    outline: 'bg-white text-black shadow-[8px_8px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] active:shadow-[2px_2px_0px_0px_#000]'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <motion.button
      ref={ref}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      {...props}
    >
      {children}
    </motion.button>
  );
});

BrutalButton.displayName = 'BrutalButton';

export default BrutalButton;