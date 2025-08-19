// Animation variants for Framer Motion
export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const slideInLeft = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

export const slideInRight = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const bounceIn = {
  initial: { opacity: 0, scale: 0.3 },
  animate: { opacity: 1, scale: 1 },
  transition: { 
    duration: 0.8, 
    ease: "easeOut",
    type: "spring",
    bounce: 0.4
  }
};

// Neo-brutalism color palette
export const colors = {
  primary: {
    yellow: "#FFE135",
    pink: "#FF6B9D",
    blue: "#4ECDC4",
    green: "#45B7D1",
    orange: "#FFA726",
    purple: "#AB47BC"
  },
  neutral: {
    black: "#000000",
    white: "#FFFFFF",
    gray: "#6B7280",
    lightGray: "#F3F4F6",
    darkGray: "#374151"
  }
};

// Typography scales
export const typography = {
  sizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem"
  },
  weights: {
    thin: "100",
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900"
  }
};

// Spacing system
export const spacing = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  "2xl": "3rem",
  "3xl": "4rem",
  "4xl": "6rem",
  "5xl": "8rem"
};

// Shadow variations for neo-brutalism
export const shadows = {
  brutal: {
    sm: "3px 3px 0px #000000",
    md: "5px 5px 0px #000000",
    lg: "8px 8px 0px #000000",
    xl: "12px 12px 0px #000000"
  },
  colored: {
    yellow: "5px 5px 0px #FFE135",
    pink: "5px 5px 0px #FF6B9D",
    blue: "5px 5px 0px #4ECDC4",
    green: "5px 5px 0px #45B7D1"
  }
};

// Border styles
export const borders = {
  thick: "4px solid #000000",
  medium: "3px solid #000000",
  thin: "2px solid #000000",
  colored: {
    yellow: "3px solid #FFE135",
    pink: "3px solid #FF6B9D",
    blue: "3px solid #4ECDC4",
    green: "3px solid #45B7D1"
  }
};

// Component showcase data
export const showcaseItems = [
  {
    id: 1,
    title: "BRUTAL BUTTONS",
    description: "Bold, chunky buttons with thick borders and drop shadows",
    category: "Interactive",
    color: "yellow",
    featured: true
  },
  {
    id: 2,
    title: "HARSH TYPOGRAPHY",
    description: "In-your-face text with maximum impact and readability",
    category: "Typography",
    color: "pink",
    featured: false
  },
  {
    id: 3,
    title: "GEOMETRIC CARDS",
    description: "Sharp-edged cards with contrasting colors and shadows",
    category: "Layout",
    color: "blue",
    featured: true
  },
  {
    id: 4,
    title: "BOLD FORMS",
    description: "Input fields that demand attention with thick outlines",
    category: "Forms",
    color: "green",
    featured: false
  },
  {
    id: 5,
    title: "STARK NAVIGATION",
    description: "Navigation elements with maximum visual weight",
    category: "Navigation",
    color: "orange",
    featured: true
  },
  {
    id: 6,
    title: "AGGRESSIVE ALERTS",
    description: "Notifications that can't be ignored or missed",
    category: "Feedback",
    color: "purple",
    featured: false
  }
];

// Navigation items
export const navItems = [
  { name: "HOME", path: "/" },
  { name: "SHOWCASE", path: "/showcase" },
  { name: "COMPONENTS", path: "/components" },
  { name: "ABOUT", path: "/about" }
];

// Breakpoints for responsive design
export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px"
};

// Neo-brutalism design principles
export const designPrinciples = [
  {
    title: "MAXIMUM CONTRAST",
    description: "Use bold color combinations that create visual tension and demand attention",
    icon: "Zap"
  },
  {
    title: "THICK BORDERS",
    description: "Heavy outlines that separate elements and create strong visual boundaries",
    icon: "Square"
  },
  {
    title: "DROP SHADOWS",
    description: "Hard shadows that give elements weight and create depth without subtlety",
    icon: "Box"
  },
  {
    title: "BOLD TYPOGRAPHY",
    description: "Chunky, heavy fonts that prioritize readability and visual impact",
    icon: "Type"
  },
  {
    title: "GEOMETRIC SHAPES",
    description: "Sharp angles and clean lines that reject organic curves and softness",
    icon: "Triangle"
  },
  {
    title: "FUNCTIONAL FIRST",
    description: "Every design decision serves a clear purpose - form follows function",
    icon: "Target"
  }
];

// Button variants
export const buttonVariants = {
  primary: "bg-yellow-400 text-black border-4 border-black shadow-[5px_5px_0px_0px_#000] hover:shadow-[3px_3px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px]",
  secondary: "bg-pink-400 text-white border-4 border-black shadow-[5px_5px_0px_0px_#000] hover:shadow-[3px_3px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px]",
  accent: "bg-blue-400 text-black border-4 border-black shadow-[5px_5px_0px_0px_#000] hover:shadow-[3px_3px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px]",
  outline: "bg-white text-black border-4 border-black shadow-[5px_5px_0px_0px_#000] hover:shadow-[3px_3px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px]"
};

// Card variants
export const cardVariants = {
  default: "bg-white border-4 border-black shadow-[8px_8px_0px_0px_#000] p-6",
  yellow: "bg-yellow-400 border-4 border-black shadow-[8px_8px_0px_0px_#000] p-6",
  pink: "bg-pink-400 border-4 border-black shadow-[8px_8px_0px_0px_#000] p-6",
  blue: "bg-blue-400 border-4 border-black shadow-[8px_8px_0px_0px_#000] p-6",
  green: "bg-green-400 border-4 border-black shadow-[8px_8px_0px_0px_#000] p-6"
};

// Component categories
export const componentCategories = [
  "ALL",
  "BUTTONS",
  "CARDS",
  "FORMS",
  "NAVIGATION",
  "TYPOGRAPHY",
  "FEEDBACK"
];