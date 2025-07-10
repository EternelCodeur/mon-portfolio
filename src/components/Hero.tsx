
import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Matrix Effect */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-400 text-xs font-mono"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </motion.div>
        ))}
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        {/* Glitch Effect Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative"
        >
          <h1 className="text-8xl md:text-9xl font-bold mb-4 relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-cyan-400 to-green-400">
              RONN.J
            </span>
            <motion.div
              className="absolute inset-0 text-red-500 opacity-20"
              animate={{
                x: [0, 2, -2, 0],
                y: [0, -1, 1, 0],
              }}
              transition={{
                duration: 0.3,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            >
              RONN.J
            </motion.div>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mb-8"
        >
          <div className="text-2xl md:text-3xl text-cyan-400 mb-4">
            <span className="border-r-2 border-green-400 animate-pulse">L'ÉTERNEL CODEUR</span>
          </div>
          <p className="text-lg text-green-300 max-w-2xl mx-auto leading-relaxed">
            Développeur Full Stack • Infographiste • Spécialiste IT
            <br />
            Je transforme les idées en expériences digitales révolutionnaires
          </p>
        </motion.div>

        {/* Animated Icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex justify-center space-x-8 mb-12"
        >
          {[
            { Icon: Terminal, color: 'text-red-500' },
            { Icon: Code, color: 'text-cyan-400' },
            { Icon: Zap, color: 'text-green-400' }
          ].map(({ Icon, color }, index) => (
            <motion.div
              key={index}
              className={`${color} text-4xl`}
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.3,
              }}
            >
              <Icon size={48} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-red-600 to-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold border border-cyan-400 hover:border-red-400 transition-all duration-300 shadow-lg hover:shadow-red-500/25"
        >
          ENTRER DANS LA MATRICE
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-16 bg-gradient-to-b from-green-400 to-transparent rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
