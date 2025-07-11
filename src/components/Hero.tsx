
import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-white px-4">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-50"></div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-600 to-purple-600 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
              alt="RONN.J Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Glitch effect and title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-8"
        >
          <div className="glitch-wrapper">
            <div className="glitch" data-glitch="RONN.J">
              RONN.J
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
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Développeur Full Stack & Spécialiste IT
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Je crée des expériences numériques exceptionnelles alliant <span className="text-blue-600 font-semibold">technologie de pointe</span>, 
            <span className="text-purple-600 font-semibold"> design innovant</span> et 
            <span className="text-cyan-600 font-semibold"> performance optimale</span>
          </p>
        </motion.div>

        {/* Tech icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="flex flex-wrap justify-center gap-8 mb-12"
        >
          {[
            { icon: Terminal, label: "DevOps", color: "text-green-600" },
            { icon: Code, label: "Full Stack", color: "text-blue-600" },
            { icon: Zap, label: "Performance", color: "text-yellow-600" }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              className={`flex flex-col items-center p-6 bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 ${item.color}`}
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.3 + index * 0.2 }}
            >
              <item.icon size={48} className="mb-3" />
              <span className="font-semibold text-gray-800">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.8 }}
        >
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Découvrir Mon Univers
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
