import { motion } from 'framer-motion';
import { ArrowRight, Zap, Code, Palette, Layers, Star, Github, ExternalLink } from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Bold Typography",
      description: "Aggressive, chunky fonts that demand attention and make statements"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "High Contrast",
      description: "Sharp color combinations that create visual tension and energy"
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Heavy Shadows",
      description: "Deep drop shadows and 3D effects that add depth and dimension"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Raw Elements",
      description: "Unpolished, intentionally rough edges that embrace imperfection"
    }
  ];

  const examples = [
    {
      title: "BRUTALIST CARD",
      description: "Raw concrete meets digital design",
      color: "bg-yellow-400",
      shadow: "shadow-[8px_8px_0px_0px_#000000]"
    },
    {
      title: "HARSH BEAUTY",
      description: "Unapologetic design philosophy",
      color: "bg-pink-500",
      shadow: "shadow-[8px_8px_0px_0px_#1a1a1a]"
    },
    {
      title: "BOLD STATEMENT",
      description: "Function over form aesthetics",
      color: "bg-green-400",
      shadow: "shadow-[8px_8px_0px_0px_#333333]"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      {/* Hero Section */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-red-500 via-purple-600 to-blue-600 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <motion.h1 
            className="text-6xl md:text-9xl font-black text-white mb-6 leading-none tracking-tighter transform rotate-[-2deg]"
            style={{ 
              textShadow: '8px 8px 0px #000000, 16px 16px 0px rgba(0,0,0,0.3)',
              fontFamily: 'Impact, Arial Black, sans-serif'
            }}
            initial={{ scale: 0.5, rotate: -10 }}
            animate={{ scale: 1, rotate: -2 }}
            transition={{ 
              type: "spring", 
              stiffness: 100,
              damping: 10,
              duration: 0.8 
            }}
          >
            NEO
            <br />
            BRUTALISM
          </motion.h1>
          
          <motion.div 
            className="bg-yellow-400 text-black p-8 border-8 border-black shadow-[16px_16px_0px_0px_#000000] transform rotate-1 mb-8"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p className="text-2xl md:text-4xl font-bold uppercase tracking-wide">
              UNCOMPROMISING DIGITAL AESTHETICS
            </p>
          </motion.div>

          <motion.button
            className="bg-pink-500 text-white px-12 py-6 text-2xl font-black border-4 border-black shadow-[8px_8px_0px_0px_#000000] hover:shadow-[4px_4px_0px_0px_#000000] transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200 uppercase tracking-wider flex items-center gap-4 mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            EXPLORE NOW
            <ArrowRight className="w-8 h-8" />
          </motion.button>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="py-20 px-4 bg-black text-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-5xl md:text-7xl font-black text-center mb-16 text-yellow-400 transform rotate-[-1deg]"
            style={{ 
              textShadow: '4px 4px 0px #000000',
              fontFamily: 'Impact, Arial Black, sans-serif'
            }}
            variants={itemVariants}
          >
            CORE PRINCIPLES
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white text-black p-8 border-4 border-black shadow-[8px_8px_0px_0px_#666666] hover:shadow-[4px_4px_0px_0px_#666666] transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
                variants={itemVariants}
                whileHover={{ rotate: Math.random() * 4 - 2 }}
              >
                <div className="text-red-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-lg font-bold leading-tight">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Examples Section */}
      <motion.section 
        className="py-20 px-4 bg-gray-200"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-5xl md:text-7xl font-black text-center mb-16 text-black transform rotate-1"
            style={{ 
              textShadow: '4px 4px 0px #ffffff',
              fontFamily: 'Impact, Arial Black, sans-serif'
            }}
            variants={itemVariants}
          >
            DESIGN EXAMPLES
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {examples.map((example, index) => (
              <motion.div
                key={index}
                className={`${example.color} text-black p-12 border-8 border-black ${example.shadow} transform hover:scale-105 transition-all duration-300`}
                variants={itemVariants}
                whileHover={{ 
                  rotate: [0, -2, 2, 0],
                  transition: { duration: 0.3 }
                }}
              >
                <h3 className="text-3xl font-black mb-6 uppercase tracking-wider">
                  {example.title}
                </h3>
                <p className="text-xl font-bold mb-8 leading-tight">
                  {example.description}
                </p>
                <div className="flex items-center gap-2">
                  <Star className="w-6 h-6 fill-current" />
                  <Star className="w-6 h-6 fill-current" />
                  <Star className="w-6 h-6 fill-current" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="py-20 px-4 bg-gradient-to-r from-purple-600 via-red-500 to-yellow-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-5xl md:text-7xl font-black text-white mb-8 transform rotate-[-1deg]"
            style={{ 
              textShadow: '8px 8px 0px #000000',
              fontFamily: 'Impact, Arial Black, sans-serif'
            }}
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            JOIN THE REVOLUTION
          </motion.h2>
          
          <motion.p 
            className="text-2xl md:text-3xl font-bold text-black mb-12 bg-yellow-400 p-6 border-4 border-black shadow-[8px_8px_0px_0px_#000000] transform rotate-1"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            EMBRACE THE CHAOS. REJECT THE ORDINARY.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button
              className="bg-black text-white px-10 py-6 text-xl font-black border-4 border-white shadow-[8px_8px_0px_0px_#ffffff] hover:shadow-[4px_4px_0px_0px_#ffffff] transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200 uppercase tracking-wider flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-6 h-6" />
              VIEW SOURCE
            </motion.button>
            
            <motion.button
              className="bg-white text-black px-10 py-6 text-xl font-black border-4 border-black shadow-[8px_8px_0px_0px_#000000] hover:shadow-[4px_4px_0px_0px_#000000] transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200 uppercase tracking-wider flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-6 h-6" />
              LIVE DEMO
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.p 
            className="text-2xl font-black uppercase tracking-wider mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            NEO BRUTALISM SHOWCASE
          </motion.p>
          <motion.p 
            className="text-lg font-bold opacity-80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            BUILT WITH REACT + VITE + TAILWIND CSS + FRAMER MOTION
          </motion.p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;