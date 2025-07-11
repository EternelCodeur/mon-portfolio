
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Coffee, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white border-t border-slate-700"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding Section */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ronn.J
            </h3>
            <p className="text-slate-300 leading-relaxed">
              L'ÉTERNEL CODEUR - Créateur d'expériences digitales révolutionnaires. 
              Spécialisé en développement Full Stack et solutions innovantes.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <span>Fait avec</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>et beaucoup de</span>
              <Coffee className="w-4 h-4 text-amber-400" />
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-blue-400">Navigation</h4>
            <div className="space-y-2">
              {['Accueil', 'À propos', 'Projets', 'Services', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace('à propos', 'about').replace('accueil', 'hero')}`}
                  className="block text-slate-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-2 transform"
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-purple-400">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>contact@ronnj.dev</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Phone className="w-4 h-4 text-green-400" />
                <span>+33 XX XX XX XX XX</span>
              </div>
              <div className="flex gap-4 mt-4">
                <motion.a
                  href="https://github.com"
                  className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-5 h-5 text-slate-300" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-5 h-5 text-blue-400" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-slate-700 py-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <Code className="w-4 h-4" />
              <span>© {currentYear} Ronn.J - L'ÉTERNEL CODEUR. Tous droits réservés.</span>
            </div>
            <div className="text-slate-400 text-sm">
              <span>Version 2.0 - Propulsé par la passion du code</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
    </motion.footer>
  );
};

export default Footer;
