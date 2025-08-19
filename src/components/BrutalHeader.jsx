import React from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const BrutalHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const menuItems = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'WORK', href: '#work' },
    { name: 'CONTACT', href: '#contact' }
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-black border-b-8 border-yellow-400 shadow-[8px_8px_0px_0px_rgba(255,255,0,1)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-3xl font-black text-white bg-yellow-400 px-4 py-2 border-4 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transform rotate-1 hover:rotate-0 transition-transform duration-200"
          >
            BRUTAL
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-white font-black text-lg px-6 py-3 bg-red-500 border-4 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:bg-blue-500 hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] transition-all duration-200 transform hover:-translate-y-1"
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleMenu}
            className="md:hidden text-white bg-red-500 p-3 border-4 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:bg-blue-500 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            height: isMenuOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="md:hidden overflow-hidden"
        >
          <nav className="py-4 space-y-3">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, x: -50 }}
                animate={{
                  opacity: isMenuOpen ? 1 : 0,
                  x: isMenuOpen ? 0 : -50
                }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setIsMenuOpen(false)}
                className="block text-white font-black text-xl px-6 py-4 bg-green-500 border-4 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:bg-purple-500 hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] transition-all duration-200 transform hover:-translate-x-1"
              >
                {item.name}
              </motion.a>
            ))}
          </nav>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-2 h-2 bg-yellow-400 transform rotate-45"></div>
      <div className="absolute top-2 right-1/3 w-3 h-3 bg-red-500 rounded-full"></div>
      <div className="absolute bottom-1 left-1/2 w-4 h-1 bg-blue-500"></div>
    </motion.header>
  )
}

export default BrutalHeader