import { motion } from "framer-motion";

export default function About() {
  const stats = [
    { number: "50+", label: "Hours of Learning" },
    { number: "15+", label: "Projects Built" }
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
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
            About Me
          </motion.h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Passionate about building scalable infrastructure and automating workflows
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left side - Main Content */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8 text-gray-300 leading-relaxed">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-lg"
              >
                <p className="mb-6">
                  I'm a passionate <span className="text-cyan-400 font-semibold">DevOps enthusiast</span> and 
                  <span className="text-blue-400 font-semibold"> fresh graduate</span> with a deep fascination 
                  for cloud technologies and infrastructure automation. My journey in tech has been driven by 
                  the desire to bridge the gap between development and operations.
                </p>
                
                <p className="mb-6">
                  During my academic journey, I've gained hands-on experience with <span className="text-purple-400 font-semibold">containerization</span>, 
                  <span className="text-green-400 font-semibold"> CI/CD pipelines</span>, and cloud platforms. 
                  I've built several projects showcasing my skills in Docker, Kubernetes, and AWS infrastructure.
                </p>

                <p>
                  I'm actively seeking opportunities to contribute to innovative teams, learn from experienced professionals, 
                  and apply my fresh perspective to solve real-world infrastructure challenges. Let's build the future together!
                </p>
              </motion.div>

              {/* Skills highlight */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4 mt-8"
              >
                {[
                  { icon: "🚀", title: "DevOps", desc: "CI/CD, Infrastructure as Code" },
                  { icon: "☁️", title: "Cloud", desc: "AWS, Azure, Multi-cloud" },
                  { icon: "🐳", title: "Containers", desc: "Docker, Kubernetes, Helm" },
                  { icon: "⚡", title: "Automation", desc: "Terraform, Ansible, Scripts" }
                ].map((item, idx) => (
                  <motion.div
                    key={item.title}
                    className="p-4 rounded-xl bg-gray-900/40 border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300"
                    whileHover={{ y: -5, scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + (idx * 0.1), duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Enhanced CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-6 mt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:shadow-lg transition-all duration-300"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 25px rgba(34, 211, 238, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Let's Connect
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.a>

                {/* Enhanced Resume Button */}
                <motion.a
                  href="https://docs.google.com/document/d/1OPjZCDsbU2m0-B4yTBRauIQTs-kOnrP6KZ7veCwRDNw/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(147, 51, 234, 0.6)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 flex items-center gap-3">
                    <motion.svg 
                      className="w-6 h-6" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </motion.svg>
                    Download Resume
                    <motion.span
                      className="text-sm bg-white/20 px-2 py-1 rounded-full"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      PDF
                    </motion.span>
                  </span>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Stats */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {stats.map(({ number, label }, idx) => (
                <motion.div
                  key={label}
                  className="group relative p-8 rounded-2xl bg-gray-900/40 backdrop-blur-sm border border-gray-700/30 hover:border-cyan-500/50 text-center transition-all duration-500"
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.4 + (idx * 0.2), duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -10,
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
                  }}
                >
                  <motion.h3 
                    className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-3"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.5 }}
                  >
                    {number}
                  </motion.h3>
                  <p className="text-gray-300 text-sm font-medium">{label}</p>
                  
                  {/* Glow effect */}
                  <motion.div 
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                  />
                </motion.div>
              ))}

              {/* Additional info card */}
              <motion.div
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/60 to-gray-800/40 border border-gray-700/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold text-cyan-400 mb-3">Currently Learning</h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Advanced Kubernetes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Cloud Security</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>GitOps with ArgoCD</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
