import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { useScrollProgress } from "../hooks/useParallax";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollProgress = useScrollProgress();

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800/50 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-400 to-blue-400"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      <nav className="fixed w-full z-40 bg-gray-900/80 backdrop-blur-md border-b border-gray-800/50 mt-1">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.span 
            className="font-bold text-2xl tracking-tight bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{ backgroundSize: "200% 200%" }}
          >
            Mayur Jadhav
          </motion.span>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 font-medium">
            {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map(section => (
              <li key={section}>
                <Link 
                  to={section === "Home" ? "hero" : section.toLowerCase()} 
                  smooth 
                  duration={600} 
                  className="cursor-pointer text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group py-2"
                >
                  {section}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
}
