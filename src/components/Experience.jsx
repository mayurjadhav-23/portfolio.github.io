import { experience } from "../data/experience";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="experience" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{ backgroundSize: "200% 200%" }}
          >
            Professional Journey
          </motion.h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            My evolution in the world of DevOps and cloud engineering
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Continuous Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-400 to-purple-400 transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {experience.map(({ role, company, period, highlights }, i) => (
              <motion.div
                key={role}
                className="relative flex flex-col md:flex-row items-start"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Timeline Dot */}
                <motion.div 
                  className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full border-4 border-black z-20 flex items-center justify-center"
                  style={{
                    background: hoveredIndex === i 
                      ? "linear-gradient(45deg, #22d3ee, #3b82f6)" 
                      : "linear-gradient(45deg, #06b6d4, #1d4ed8)"
                  }}
                  animate={{ 
                    scale: hoveredIndex === i ? 1.3 : 1,
                    boxShadow: hoveredIndex === i 
                      ? "0 0 30px rgba(34, 211, 238, 0.8)" 
                      : "0 0 15px rgba(34, 211, 238, 0.4)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </motion.div>

                {/* Content Card */}
                <motion.div
                  className={`group relative ml-16 md:ml-0 ${
                    i % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                  } md:w-5/12`}
                  whileHover={{ 
                    y: -8,
                    scale: 1.02
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative p-8 rounded-2xl bg-gray-900/60 backdrop-blur-sm border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-500">
                    {/* Glow effect */}
                    <motion.div 
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1 }}
                    />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="mb-6">
                        <motion.h3 
                          className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2"
                          animate={{ 
                            textShadow: hoveredIndex === i 
                              ? "0 0 10px rgba(34, 211, 238, 0.5)" 
                              : "none"
                          }}
                        >
                          {role}
                        </motion.h3>
                        <p className="text-lg font-semibold text-gray-300 mb-2">{company}</p>
                        <motion.span 
                          className="inline-block text-sm text-gray-400 font-mono bg-gray-800/50 px-3 py-1 rounded-full border border-gray-700/50"
                          whileHover={{ 
                            backgroundColor: "rgba(34, 211, 238, 0.1)",
                            borderColor: "rgba(34, 211, 238, 0.3)",
                            color: "#22d3ee"
                          }}
                        >
                          {period}
                        </motion.span>
                      </div>
                      
                      {/* Highlights */}
                      <div className="space-y-4">
                        {highlights.map((highlight, idx) => (
                          <motion.div
                            key={highlight}
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: (i * 0.2) + (idx * 0.1), duration: 0.4 }}
                            viewport={{ once: true }}
                          >
                            <motion.div 
                              className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mt-2 flex-shrink-0"
                              animate={{ 
                                scale: [1, 1.2, 1],
                                boxShadow: [
                                  "0 0 5px rgba(34, 211, 238, 0.3)",
                                  "0 0 15px rgba(34, 211, 238, 0.6)",
                                  "0 0 5px rgba(34, 211, 238, 0.3)"
                                ]
                              }}
                              transition={{ 
                                duration: 2, 
                                repeat: Infinity,
                                delay: idx * 0.3
                              }}
                            />
                            <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                              {highlight}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Floating particles */}
                    {hoveredIndex === i && (
                      <>
                        {[...Array(3)].map((_, particleIdx) => (
                          <motion.div
                            key={particleIdx}
                            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                            style={{
                              top: `${20 + particleIdx * 30}%`,
                              right: `${10 + particleIdx * 15}%`,
                            }}
                            animate={{ 
                              y: [-10, -30, -10],
                              opacity: [0, 1, 0],
                              scale: [0.5, 1, 0.5]
                            }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity,
                              delay: particleIdx * 0.3
                            }}
                          />
                        ))}
                      </>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
