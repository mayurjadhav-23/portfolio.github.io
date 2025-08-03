import { skillsData } from "../data/skills";
import { motion } from "framer-motion";

export default function SkillsGrid() {
  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{ backgroundSize: "200% 200%" }}
          >
            Skills & Technologies
          </motion.h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Tools and technologies I work with to build modern infrastructure
          </p>
        </motion.div>
        
        {/* Skills grid - 4x3 layout with horizontal cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillsData.map(({ name, logo, color }, idx) => (
            <motion.div 
              key={name}
              className="group relative p-6 rounded-2xl bg-gray-900/60 backdrop-blur-sm border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-500 hover:bg-gray-800/40"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)"
              }}
            >
              {/* Horizontal layout: Logo left, Name right */}
              <div className="flex items-center gap-4">
                <motion.div
                  className="w-12 h-12 flex items-center justify-center flex-shrink-0"
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <img 
                    src={logo} 
                    alt={name} 
                    className="w-10 h-10 transition-all duration-300" 
                    loading="lazy"
                  />
                </motion.div>
                
                <div className="flex-1">
                  <span className={`font-bold text-lg ${color} group-hover:text-white transition-colors duration-300`}>
                    {name}
                  </span>
                </div>
              </div>
              
              {/* Colorful hover glow effect */}
              <motion.div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${
                    color.includes('blue') ? 'rgba(59, 130, 246, 0.1)' :
                    color.includes('red') ? 'rgba(239, 68, 68, 0.1)' :
                    color.includes('green') ? 'rgba(34, 197, 94, 0.1)' :
                    color.includes('yellow') ? 'rgba(234, 179, 8, 0.1)' :
                    color.includes('purple') ? 'rgba(147, 51, 234, 0.1)' :
                    color.includes('orange') ? 'rgba(249, 115, 22, 0.1)' :
                    'rgba(34, 211, 238, 0.1)'
                  }, transparent)`
                }}
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1 }}
              />
              
              {/* Border glow on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl border opacity-0 group-hover:opacity-100 transition-all duration-500"
                style={{
                  borderColor: color.includes('blue') ? 'rgba(59, 130, 246, 0.3)' :
                    color.includes('red') ? 'rgba(239, 68, 68, 0.3)' :
                    color.includes('green') ? 'rgba(34, 197, 94, 0.3)' :
                    color.includes('yellow') ? 'rgba(234, 179, 8, 0.3)' :
                    color.includes('purple') ? 'rgba(147, 51, 234, 0.3)' :
                    color.includes('orange') ? 'rgba(249, 115, 22, 0.3)' :
                    'rgba(34, 211, 238, 0.3)'
                }}
                whileHover={{
                  boxShadow: `0 0 20px ${
                    color.includes('blue') ? 'rgba(59, 130, 246, 0.2)' :
                    color.includes('red') ? 'rgba(239, 68, 68, 0.2)' :
                    color.includes('green') ? 'rgba(34, 197, 94, 0.2)' :
                    color.includes('yellow') ? 'rgba(234, 179, 8, 0.2)' :
                    color.includes('purple') ? 'rgba(147, 51, 234, 0.2)' :
                    color.includes('orange') ? 'rgba(249, 115, 22, 0.2)' :
                    'rgba(34, 211, 238, 0.2)'
                  }`
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Tech categories with more colors */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "Cloud Infrastructure", color: "border-blue-500/50 text-blue-400 hover:bg-blue-500/10" },
              { name: "Container Orchestration", color: "border-purple-500/50 text-purple-400 hover:bg-purple-500/10" },
              { name: "CI/CD Automation", color: "border-green-500/50 text-green-400 hover:bg-green-500/10" },
              { name: "Infrastructure as Code", color: "border-orange-500/50 text-orange-400 hover:bg-orange-500/10" }
            ].map(({ name, color }, idx) => (
              <motion.span
                key={name}
                className={`px-4 py-2 rounded-full text-sm font-medium bg-gray-900/40 border transition-all duration-300 ${color}`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + (idx * 0.1), duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                }}
              >
                {name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
