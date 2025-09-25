import { projects } from "../data/projects";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiStar, FiClock, FiCode } from "react-icons/fi";

export default function ProjectsGrid() {
  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A showcase of DevOps projects demonstrating infrastructure automation, CI/CD pipelines, and cloud-native solutions
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 p-8 flex flex-col justify-between transition-all duration-300 hover:bg-gray-800/70"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors flex-1 pr-4">
                    {project.title}
                  </h3>
                  
                  {/* Status Badge */}
                  {project.status ? (
                    <span className={`px-2 py-1 text-xs rounded-full flex items-center ${
                      project.status === 'In Development' 
                        ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' 
                        : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    }`}>
                      {project.status === 'In Development' && <FiClock className="w-3 h-3 mr-1" />}
                      {project.status}
                    </span>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                      <FiCode className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.desc}
                </p>

                {/* Highlights */}
                {project.highlights && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2 flex items-center">
                      <FiStar className="w-4 h-4 mr-1" />
                      Key Features
                    </h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      {project.highlights.slice(0, 3).map((highlight, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-1 h-1 bg-cyan-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => (
                    <span 
                      key={t} 
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-700/50 text-cyan-300 border border-gray-600/50 hover:border-cyan-500/50 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.link && project.link !== '#' ? (
                    <a
                      href={project.link}
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 text-sm font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiGithub className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  ) : (
                    <div className="inline-flex items-center px-4 py-2 bg-gray-700 text-gray-400 rounded-lg text-sm font-medium cursor-not-allowed">
                      <FiCode className="w-4 h-4 mr-2" />
                      Coming Soon
                    </div>
                  )}
                  
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="inline-flex items-center px-4 py-2 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 text-sm font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-4">
            Want to see more projects or collaborate on something exciting?
          </p>
          <motion.a
            href="https://github.com/mayurjadhav-23"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-700 text-white rounded-lg hover:from-gray-700 hover:to-gray-600 transition-all duration-300 border border-gray-600 hover:border-gray-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiGithub className="w-5 h-5" />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
