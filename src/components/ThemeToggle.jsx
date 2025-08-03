import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative p-3 rounded-full backdrop-blur-sm border transition-all duration-300 ${
        isDark 
          ? 'bg-gray-800/50 border-gray-700/30 hover:border-cyan-500/50' 
          : 'bg-white/50 border-gray-300/30 hover:border-blue-500/50'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        className="relative w-6 h-6"
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {/* Sun Icon */}
        <motion.svg
          className={`absolute inset-0 w-6 h-6 transition-colors duration-300 ${
            isDark ? 'text-gray-400' : 'text-yellow-500'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          initial={{ opacity: isDark ? 0 : 1, scale: isDark ? 0.5 : 1 }}
          animate={{ opacity: isDark ? 0 : 1, scale: isDark ? 0.5 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clipRule="evenodd"
          />
        </motion.svg>

        {/* Moon Icon */}
        <motion.svg
          className={`absolute inset-0 w-6 h-6 transition-colors duration-300 ${
            isDark ? 'text-blue-400' : 'text-gray-400'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          initial={{ opacity: isDark ? 1 : 0, scale: isDark ? 1 : 0.5 }}
          animate={{ opacity: isDark ? 1 : 0, scale: isDark ? 1 : 0.5 }}
          transition={{ duration: 0.3 }}
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </motion.svg>
      </motion.div>

      {/* Glow effect */}
      <motion.div
        className={`absolute inset-0 rounded-full transition-opacity duration-300 ${
          isDark 
            ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10' 
            : 'bg-gradient-to-r from-blue-500/10 to-purple-500/10'
        }`}
        initial={{ opacity: 0, scale: 0.8 }}
        whileHover={{ opacity: 1, scale: 1.2 }}
      />
    </motion.button>
  );
};

export default ThemeToggle;
