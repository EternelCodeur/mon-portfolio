
import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Zap } from 'lucide-react';
import TypingEffect from './TypingEffect';
import AnimatedBackground from './AnimatedBackground';

const Hero = () => {
  return (
    <AnimatedBackground className="flex items-center justify-center px-4">
      <div className="text-center max-w-6xl mx-auto">

        {/* Animated title with typing effect */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-8 mt-8 md:mt-0"
        >
          <div className="glitch-wrapper">
            <div className="glitch text-7xl md:text-8xl font-bold text-gray-900 mb-4" data-glitch="RONN.J">
              <TypingEffect text="RONN.J" speed={150} />
            </div>
          </div>
        </motion.div>

        {/* Subtitle and description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-3xl font-bold text-gray-800 mb-6">
            <TypingEffect 
              text="Développeur Full Stack & Spécialiste IT" 
              speed={80}
            />
          </h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
            className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Je crée des expériences numériques exceptionnelles alliant <span className="text-blue-600 font-semibold">technologie de pointe</span>, 
            <span className="text-indigo-600 font-semibold"> design innovant</span> et 
            <span className="text-slate-700 font-semibold"> performance optimale</span>
          </motion.p>
        </motion.div>

        {/* Tech icons with enhanced animations */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="flex flex-wrap justify-center gap-8 mb-12"
        >
          {[
            { icon: Terminal, label: "DevOps", color: "text-gray-700", bg: "from-gray-100 to-gray-300" },
            { icon: Code, label: "Full Stack", color: "text-gray-700", bg: "from-gray-100 to-gray-300" },
            { icon: Zap, label: "Performance", color: "text-gray-700", bg: "from-gray-100 to-gray-300" }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              className={`relative w-40 flex flex-col items-center p-6 bg-white bg-opacity-90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 ${item.color} group`}
              whileHover={{ 
                scale: 1.1, 
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.3 + index * 0.2 }}
            >
              {/* Animated background glow */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${item.bg} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}
              />
              
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <item.icon size={48} className="text-gray-700 group-hover:text-gray-900 transition-colors" />
              </motion.div>
              <span className="font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.8 }}
        >
          <motion.button 
            className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Animated background effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <span className="relative z-10">Découvrir Mon Univers</span>
          </motion.button>
        </motion.div>
      </div>
    </AnimatedBackground>
  );
};

export default Hero;
