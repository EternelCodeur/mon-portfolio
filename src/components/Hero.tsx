
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
            <div className="glitch text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 text-readable" data-glitch="RONN.J">
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
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-readable">
            <TypingEffect 
              text="Développeur Full Stack & Spécialiste IT" 
              speed={80}
            />
          </h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
            className="text-base md:text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed text-readable text-responsive"
          >
            Je crée des expériences numériques exceptionnelles alliant <span className="text-cyan-400 font-semibold">technologie de pointe</span>, 
            <span className="text-pink-400 font-semibold"> design innovant</span> et 
            <span className="text-yellow-400 font-semibold"> performance optimale</span>
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
            { icon: Terminal, label: "DevOps", color: "text-white", bg: "from-cyan-500 to-blue-500" },
            { icon: Code, label: "Full Stack", color: "text-white", bg: "from-purple-500 to-pink-500" },
            { icon: Zap, label: "Performance", color: "text-white", bg: "from-yellow-500 to-orange-500" }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              className={`relative w-32 md:w-40 flex flex-col items-center p-4 md:p-6 bg-gray-900 bg-opacity-80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700 hover:shadow-2xl transition-all duration-300 card-shadow ${item.color} group`}
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
                <item.icon size={40} className="text-white group-hover:text-gray-300 transition-colors" />
              </motion.div>
              <span className="font-semibold text-white group-hover:text-gray-300 transition-colors text-readable text-sm md:text-base">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.8 }}
        >
          <motion.button 
            className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 relative overflow-hidden group card-shadow"
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
