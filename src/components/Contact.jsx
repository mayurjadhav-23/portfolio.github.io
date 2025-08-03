import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Open to exciting DevOps roles, side-projects, and tech chats! 
            Let's build something amazing together.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            { icon: FaEnvelope, href: "mailto:mayurjadhav0232@gmail.com", label: "Email", color: "from-red-500 to-pink-500" },
            { icon: FaGithub, href: "https://github.com/mayurjadhav-23", label: "GitHub", color: "from-gray-600 to-gray-800" },
            { icon: FaLinkedin, href: "https://linkedin.com/in/mayurjadhav023/", label: "LinkedIn", color: "from-blue-600 to-blue-800" }
          ].map(({ icon: Icon, href, label, color }, idx) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? "_blank" : undefined}
              rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
              className={`group relative p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:bg-gray-800/70`}
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (idx * 0.1), duration: 0.5 }}
              viewport={{ once: true }}
              aria-label={label}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${color} flex items-center justify-center text-white text-xl transition-transform duration-300`}>
                <Icon />
              </div>
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-medium text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {label}
              </span>
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(34, 211, 238, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-lg transition-all duration-300 overflow-hidden"
            onClick={() => window.location = 'mailto:mayurjadhav0232@gmail.com'}
          >
            <span className="relative z-10 flex items-center gap-2">
              Say Hello 
              <motion.span
                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 }}
              >
                👋
              </motion.span>
            </span>
          </motion.button>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="mt-16 pt-8 border-t border-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm">
            © 2024 Mayur Jadhav. Built with React, Tailwind CSS, and lots of ☕
          </p>
        </motion.div>
      </div>
    </section>
  );
}
