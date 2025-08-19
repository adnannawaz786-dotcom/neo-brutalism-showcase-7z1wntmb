import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { motion } from 'framer-motion'
import HomePage from './pages/HomePage.jsx'
import ComponentsPage from './pages/ComponentsPage.jsx'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <nav className="bg-yellow-400 border-8 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <motion.h1 
                className="text-3xl font-black text-black transform -rotate-2"
                whileHover={{ rotate: 2, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                NEO BRUTAL
              </motion.h1>
              
              <div className="flex gap-4">
                <Link 
                  to="/" 
                  className="bg-black text-white px-6 py-3 font-bold text-lg border-4 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 transform rotate-1 hover:rotate-0"
                >
                  HOME
                </Link>
                <Link 
                  to="/components" 
                  className="bg-red-500 text-white px-6 py-3 font-bold text-lg border-4 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 transform -rotate-1 hover:rotate-0"
                >
                  COMPONENTS
                </Link>
              </div>
            </div>
          </div>
        </nav>
        
        <main className="relative">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/components" element={<ComponentsPage />} />
          </Routes>
        </main>

        <footer className="bg-yellow-400 border-t-8 border-black mt-20">
          <div className="max-w-6xl mx-auto px-6 py-8">
            <div className="text-center">
              <motion.p 
                className="text-2xl font-black text-black transform rotate-1"
                whileHover={{ rotate: -1, scale: 1.02 }}
              >
                BRUTALLY BEAUTIFUL DESIGN
              </motion.p>
              <p className="text-black font-bold mt-2 transform -rotate-1">
                Made with ❤️ and lots of borders
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App