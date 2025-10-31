import React, {useState} from 'react';
import {motion} from 'framer-motion';
import {Menu, X} from 'lucide-react';
import navLogoImage from '../assets/images/navlogo.png';
import topFoldImage from '../assets/images/logo.png';

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col justify-between bg-white">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 animate-gradient opacity-10"></div>

      {/* Fixed Navbar with Glassmorphism */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-white/20 shadow-lg">
        <div className="flex justify-between items-center px-6 md:px-16 py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={navLogoImage} 
              alt="Bullo Logo"
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-10 text-gray-700 font-medium">
            <li>
              <a href="#home" className="hover:text-[#A855F7] transition-colors duration-300 relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#A855F7] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#service" className="hover:text-[#A855F7] transition-colors duration-300 relative group">
                Service
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#A855F7] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-[#A855F7] transition-colors duration-300 relative group">
                Blog
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#A855F7] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#A855F7] transition-colors duration-300 relative group">
                About us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#A855F7] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>

          {/* Get Started Button */}
          <div className="hidden md:block">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#A855F7] hover:bg-[#9333EA] text-white px-5 py-2 rounded-full transition-all duration-300 text-sm font-semibold shadow-lg hover:shadow-xl"
            >
              Get started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            whileTap={{ scale: 0.95 }}
            className="md:hidden text-gray-700 focus:outline-none bg-white/50 backdrop-blur-sm rounded-lg p-2 border border-white/20"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26}/> : <Menu size={26}/>}
          </motion.button>
        </div>

        {/* Mobile Menu Dropdown with Glassmorphism */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden backdrop-blur-md bg-white/80 border-t border-white/20 shadow-lg"
          >
            <ul className="flex flex-col items-center py-4 space-y-4 text-gray-700 font-medium">
              <li>
                <a 
                  href="#home" 
                  onClick={() => setIsOpen(false)}
                  className="hover:text-[#A855F7] transition-colors duration-300 py-2"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#service" 
                  onClick={() => setIsOpen(false)}
                  className="hover:text-[#A855F7] transition-colors duration-300 py-2"
                >
                  Service
                </a>
              </li>
              <li>
                <a 
                  href="#blog" 
                  onClick={() => setIsOpen(false)}
                  className="hover:text-[#A855F7] transition-colors duration-300 py-2"
                >
                  Blog
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={() => setIsOpen(false)}
                  className="hover:text-[#A855F7] transition-colors duration-300 py-2"
                >
                  About us
                </a>
              </li>
              <li>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#A855F7] hover:bg-[#9333EA] text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Get started
                </motion.button>
              </li>
            </ul>
          </motion.div>
        )}
      </nav>

      {/* Hero Content */}
      <motion.div
        initial={{opacity:0, y:40}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.8, ease:"easeOut"}}
        className="relative z-10 flex flex-col items-center text-center mt-32 px-6"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight">
          WHERE <br className="md:hidden"/> TRADERS TRADE
        </h1>
        <p className="text-gray-600 mt-4 max-w-xl">
          Currencies? Crypto? Stocks? It doesn't matter. You can trade whatever, whenever, wherever. You do you.
        </p>
        <motion.button
          whileHover={{scale:1.05}}
          whileTap={{scale:0.95}}
          className="mt-8 px-8 py-3 rounded-full bg-[#EC4899] text-white font-semibold hover:bg-[#DB2777] transition-all shadow-lg hover:shadow-xl"
        >
          Get started
        </motion.button>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        initial={{opacity:0, y:60}}
        animate={{opacity:1, y:0}}
        transition={{delay:0.4, duration:0.8, ease:"easeOut"}}
        className="relative z-10 flex justify-center mt-16 px-6 pb-16"
      >
        <img
          src={topFoldImage}
          alt="Trading graphics"
          className="w-full max-w-4xl object-contain"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;