import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Zap, Shield, Layers, Palette, Grid3X3, Box } from 'lucide-react';

const ComponentsPage = () => {
  const components = [
    {
      id: 1,
      name: 'Brutal Button',
      category: 'Interactive',
      description: 'Bold, high-contrast buttons with aggressive shadows and sharp edges',
      icon: <Box className="w-6 h-6" />,
      color: 'bg-yellow-400',
      shadowColor: 'shadow-[8px_8px_0px_0px_#000000]',
      borderColor: 'border-black'
    },
    {
      id: 2,
      name: 'Harsh Card',
      category: 'Layout',
      description: 'Uncompromising card design with brutal borders and stark contrasts',
      icon: <Layers className="w-6 h-6" />,
      color: 'bg-pink-400',
      shadowColor: 'shadow-[6px_6px_0px_0px_#000000]',
      borderColor: 'border-black'
    },
    {
      id: 3,
      name: 'Raw Input',
      category: 'Forms',
      description: 'Unpolished input fields that demand attention with bold styling',
      icon: <Code className="w-6 h-6" />,
      color: 'bg-green-400',
      shadowColor: 'shadow-[4px_4px_0px_0px_#000000]',
      borderColor: 'border-black'
    },
    {
      id: 4,
      name: 'Aggressive Modal',
      category: 'Overlay',
      description: 'In-your-face modals with maximum visual impact and presence',
      icon: <Shield className="w-6 h-6" />,
      color: 'bg-red-400',
      shadowColor: 'shadow-[10px_10px_0px_0px_#000000]',
      borderColor: 'border-black'
    },
    {
      id: 5,
      name: 'Bold Navigation',
      category: 'Navigation',
      description: 'Unapologetic navigation with chunky elements and stark divisions',
      icon: <Grid3X3 className="w-6 h-6" />,
      color: 'bg-blue-400',
      shadowColor: 'shadow-[5px_5px_0px_0px_#000000]',
      borderColor: 'border-black'
    },
    {
      id: 6,
      name: 'Stark Typography',
      category: 'Content',
      description: 'Typography that screams with heavy weights and dramatic spacing',
      icon: <Palette className="w-6 h-6" />,
      color: 'bg-purple-400',
      shadowColor: 'shadow-[7px_7px_0px_0px_#000000]',
      borderColor: 'border-black'
    }
  ];

  const categories = ['All', 'Interactive', 'Layout', 'Forms', 'Overlay', 'Navigation', 'Content'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredComponents = selectedCategory === 'All' 
    ? components 
    : components.filter(comp => comp.category === selectedCategory);

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
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-black text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none">
              BRUTAL
              <br />
              COMPONENTS
            </h1>
            <p className="text-xl md:text-2xl font-bold max-w-2xl">
              RAW. UNCOMPROMISING. FUNCTIONAL.
              <br />
              Components that don't apologize for existing.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-yellow-400 border-b-4 border-black py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 font-black text-lg border-4 border-black transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-black text-white shadow-[4px_4px_0px_0px_#000000]'
                    : 'bg-white text-black shadow-[2px_2px_0px_0px_#000000] hover:shadow-[4px_4px_0px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px]'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Components Grid */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredComponents.map((component) => (
              <motion.div
                key={component.id}
                variants={itemVariants}
                className={`${component.color} border-4 ${component.borderColor} ${component.shadowColor} p-8 hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-200 cursor-pointer group`}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 bg-black text-white border-2 border-black`}>
                    {component.icon}
                  </div>
                  <div className="bg-black text-white px-3 py-1 text-sm font-black">
                    {component.category}
                  </div>
                </div>
                
                <h3 className="text-2xl font-black mb-4 text-black">
                  {component.name}
                </h3>
                
                <p className="text-black font-bold mb-6 leading-tight">
                  {component.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <button className="bg-black text-white px-6 py-3 font-black border-2 border-black hover:bg-white hover:text-black transition-all duration-200 flex items-center gap-2">
                    VIEW CODE
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-black" />
                    <span className="font-black text-black">LIVE</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Usage Stats */}
      <div className="bg-black text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-black text-yellow-400 mb-2">24</div>
              <div className="text-lg font-black">COMPONENTS</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-black text-pink-400 mb-2">6</div>
              <div className="text-lg font-black">CATEGORIES</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-black text-green-400 mb-2">100%</div>
              <div className="text-lg font-black">BRUTAL</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-black text-red-400 mb-2">0</div>
              <div className="text-lg font-black">APOLOGIES</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-yellow-400 border-t-4 border-black py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-black">
            READY TO BUILD?
          </h2>
          <p className="text-xl font-bold mb-8 text-black">
            Copy the code. Break the rules. Build something BRUTAL.
          </p>
          <motion.button
            className="bg-black text-white px-12 py-6 text-xl font-black border-4 border-black shadow-[8px_8px_0px_0px_#000000] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            GET STARTED NOW
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ComponentsPage;