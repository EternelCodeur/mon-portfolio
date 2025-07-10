
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Shield, Palette, Database } from 'lucide-react';

const About = () => {
  const skills = [
    { 
      icon: Brain, 
      title: "Intelligence Artificielle", 
      desc: "Machine Learning & Deep Learning",
      color: "from-red-500 to-pink-500"
    },
    { 
      icon: Shield, 
      title: "Cybersécurité", 
      desc: "Pentesting & Ethical Hacking",
      color: "from-cyan-500 to-blue-500"
    },
    { 
      icon: Palette, 
      title: "Design UX/UI", 
      desc: "Interfaces immersives & intuitives",
      color: "from-green-500 to-emerald-500"
    },
    { 
      icon: Database, 
      title: "Architecture", 
      desc: "Systèmes scalables & performants",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section className="min-h-screen py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-cyan-400 mb-6">
            QUI SUIS-JE ?
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-cyan-400 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <div className="border border-green-400 p-6 rounded-lg bg-black/50 backdrop-blur-sm">
              <h3 className="text-2xl text-cyan-400 mb-4 font-semibold">
                ./profile.exe --info
              </h3>
              <div className="space-y-3 text-green-300">
                <p className="flex items-center">
                  <span className="text-red-400 mr-2">></span>
                  Nom: Ronn.J - L'Éternel Codeur
                </p>
                <p className="flex items-center">
                  <span className="text-red-400 mr-2">></span>
                  Mission: Révolutionner le digital
                </p>
                <p className="flex items-center">
                  <span className="text-red-400 mr-2">></span>
                  Status: En ligne 24/7
                </p>
                <p className="flex items-center">
                  <span className="text-red-400 mr-2">></span>
                  Mode: Innovation continue
                </p>
              </div>
            </div>

            <motion.div
              className="text-lg text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <p className="mb-4">
                Passionné par la technologie depuis plus de 8 ans, je navigue entre
                développement, design et sécurité informatique avec une approche
                <span className="text-cyan-400"> futuriste </span>
                et <span className="text-red-400">innovante</span>.
              </p>
              <p>
                Mon objectif ? Créer des expériences digitales qui marquent les esprits
                et transforment la façon dont nous interagissons avec la technologie.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="w-80 h-80 mx-auto relative">
              {/* Hologram Effect */}
              <motion.div
                className="absolute inset-0 border-2 border-cyan-400 rounded-full"
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity },
                }}
              />
              <motion.div
                className="absolute inset-4 border border-red-500 rounded-full"
                animate={{
                  rotate: -360,
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  opacity: { duration: 3, repeat: Infinity },
                }}
              />
              
              {/* Center Avatar */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-red-500 to-cyan-400 rounded-full flex items-center justify-center text-4xl font-bold text-black">
                  R.J
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 10 }}
                className="bg-black/50 border border-gray-700 rounded-lg p-6 text-center backdrop-blur-sm hover:border-cyan-400 transition-all duration-300"
              >
                <motion.div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${skill.color} flex items-center justify-center`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="text-white" size={32} />
                </motion.div>
                <h4 className="text-xl font-semibold text-cyan-400 mb-2">
                  {skill.title}
                </h4>
                <p className="text-gray-400 text-sm">
                  {skill.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
