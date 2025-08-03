import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import SkillsGrid from './components/SkillsGrid'
import ProjectsGrid from './components/ProjectsGrid'
import Experience from './components/Experience'
import Contact from './components/Contact'
import { useParallax } from './hooks/useParallax'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const parallaxOffset = useParallax(0.3);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Custom cursor setup (only for desktop)
    if (!isMobile) {
      const cursor = document.createElement('div');
      cursor.className = 'custom-cursor';
      document.body.appendChild(cursor);

      const moveCursor = (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      };

      const addHover = () => cursor.classList.add('hover');
      const removeHover = () => cursor.classList.remove('hover');

      document.addEventListener('mousemove', moveCursor);
      
      // Add hover effects to interactive elements
      const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', addHover);
        el.addEventListener('mouseleave', removeHover);
      });

      return () => {
        document.removeEventListener('mousemove', moveCursor);
        interactiveElements.forEach(el => {
          el.removeEventListener('mouseenter', addHover);
          el.removeEventListener('mouseleave', removeHover);
        });
        if (cursor.parentNode) {
          cursor.parentNode.removeChild(cursor);
        }
      };
    }
  }, [isMobile]);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          {/* Animated geometric background with parallax */}
          <div className="fixed inset-0 -z-10" style={{ transform: `translateY(${parallaxOffset}px)` }}>
            {/* Pure black base */}
            <div className="absolute inset-0 bg-black"></div>
            
            {/* Animated geometric shapes */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Large floating squares */}
              <div 
                className="absolute w-64 h-64 border border-cyan-500/20 rotate-45 animate-spin"
                style={{
                  top: '10%',
                  left: '10%',
                  animationDuration: '20s',
                  animationDirection: 'reverse'
                }}
              ></div>
              
              <div 
                className="absolute w-48 h-48 border border-blue-500/20 rotate-45 animate-spin"
                style={{
                  top: '60%',
                  right: '15%',
                  animationDuration: '25s'
                }}
              ></div>
              
              <div 
                className="absolute w-32 h-32 border border-purple-500/20 rotate-45 animate-spin"
                style={{
                  bottom: '20%',
                  left: '20%',
                  animationDuration: '15s',
                  animationDirection: 'reverse'
                }}
              ></div>
              
              {/* Floating circles */}
              <div 
                className="absolute w-96 h-96 border border-cyan-400/10 rounded-full animate-pulse"
                style={{
                  top: '5%',
                  right: '5%',
                  animationDuration: '4s'
                }}
              ></div>
              
              <div 
                className="absolute w-80 h-80 border border-blue-400/10 rounded-full animate-pulse"
                style={{
                  bottom: '10%',
                  right: '30%',
                  animationDuration: '6s'
                }}
              ></div>
              
              {/* Moving lines */}
              <div className="absolute inset-0">
                <div 
                  className="absolute h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent animate-pulse"
                  style={{
                    top: '25%',
                    left: '0%',
                    right: '0%',
                    animationDuration: '3s'
                  }}
                ></div>
                
                <div 
                  className="absolute h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent animate-pulse"
                  style={{
                    top: '75%',
                    left: '0%',
                    right: '0%',
                    animationDuration: '4s',
                    animationDelay: '1s'
                  }}
                ></div>
                
                <div 
                  className="absolute w-px bg-gradient-to-b from-transparent via-purple-500/30 to-transparent animate-pulse"
                  style={{
                    left: '20%',
                    top: '0%',
                    bottom: '0%',
                    animationDuration: '5s',
                    animationDelay: '2s'
                  }}
                ></div>
                
                <div 
                  className="absolute w-px bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent animate-pulse"
                  style={{
                    right: '25%',
                    top: '0%',
                    bottom: '0%',
                    animationDuration: '3.5s'
                  }}
                ></div>
              </div>
              
              {/* Floating dots */}
              {[...Array(isMobile ? 5 : 10)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-cyan-400/50 rounded-full animate-pulse"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 2}s`
                  }}
                ></div>
              ))}
              
              {/* Grid overlay */}
              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(34, 211, 238, 0.2) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(34, 211, 238, 0.2) 1px, transparent 1px)
                  `,
                  backgroundSize: '50px 50px'
                }}
              ></div>

              {/* Sparkle effects for desktop only */}
              {!isMobile && [...Array(3)].map((_, i) => (
                <div
                  key={`sparkle-${i}`}
                  className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-sparkle"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 4}s`,
                    animationDuration: `${3 + Math.random() * 2}s`
                  }}
                ></div>
              ))}
            </div>
          </div>

          <Navbar />
          <Hero />
          <About />
          <SkillsGrid />
          <ProjectsGrid />
          <Experience />
          <Contact />
        </>
      )}
    </div>
  )
}

export default App
