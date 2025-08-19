import { motion } from 'framer-motion';

const ColorBlock = ({ 
  color, 
  title, 
  subtitle, 
  size = 'medium',
  rotation = 0,
  delay = 0,
  onClick,
  className = ''
}) => {
  const sizeClasses = {
    small: 'w-24 h-24',
    medium: 'w-32 h-32',
    large: 'w-48 h-48',
    xl: 'w-64 h-64'
  };

  const textSizes = {
    small: 'text-xs',
    medium: 'text-sm',
    large: 'text-lg',
    xl: 'text-xl'
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: rotation - 10 }}
      animate={{ opacity: 1, scale: 1, rotate: rotation }}
      transition={{ 
        duration: 0.6, 
        delay: delay,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.05, 
        rotate: rotation + 2,
        boxShadow: "12px 12px 0px rgba(0,0,0,0.8)"
      }}
      whileTap={{ scale: 0.95 }}
      className={`
        ${sizeClasses[size]}
        ${color}
        border-4 border-black
        shadow-[8px_8px_0px_rgba(0,0,0,1)]
        cursor-pointer
        flex flex-col
        justify-center
        items-center
        p-4
        transition-all
        duration-200
        hover:translate-x-[-2px]
        hover:translate-y-[-2px]
        active:translate-x-[4px]
        active:translate-y-[4px]
        active:shadow-[4px_4px_0px_rgba(0,0,0,1)]
        ${className}
      `}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick?.();
        }
      }}
      aria-label={`Color block: ${title || 'Interactive element'}`}
    >
      {title && (
        <motion.h3 
          className={`font-black text-black text-center leading-tight mb-1 ${textSizes[size]}`}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: delay + 0.2 }}
        >
          {title}
        </motion.h3>
      )}
      
      {subtitle && (
        <motion.p 
          className={`font-bold text-black text-center leading-tight ${
            size === 'small' ? 'text-xs' : 
            size === 'medium' ? 'text-xs' : 
            'text-sm'
          }`}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: delay + 0.3 }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default ColorBlock;