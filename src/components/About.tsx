
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Shield, Database } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: Code,
      title: "Développement Full Stack",
      description: "React.js, Node.js, TypeScript, API RESTful",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Palette,
      title: "Design & UI/UX",
      description: "Figma, Adobe Suite, Animations 3D",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Shield,
      title: "Cybersécurité",
      description: "Tests de pénétration, Audit sécurité",
      color: "from-red-500 to-orange-600"
    },
    {
      icon: Database,
      title: "Support IT",
      description: "Infrastructure, Bases de données, DevOps",
      color: "from-green-500 to-blue-600"
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
          <h2 className="text-5xl font-bold text-black mb-6">
            QUI SUIS-JE ?
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Passionné par l'innovation technologique, je transforme les idées en solutions digitales impactantes. 
            Mon expertise couvre le développement full-stack, la cybersécurité et le design d'interfaces immersives.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-black mb-6">Mon Parcours</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {'>'} Développeur Full Stack Senior
                </h4>
                <p className="text-gray-600">Création d'applications web performantes et scalables</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {'>'} Spécialiste Cybersécurité
                </h4>
                <p className="text-gray-600">Audit de sécurité et tests de pénétration</p>
              </div>
              <div className="border-l-4 border-green-500 pl-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {'>'} Designer UI/UX
                </h4>
                <p className="text-gray-600">Interfaces modernes et expériences utilisateur optimales</p>
              </div>
              <div className="border-l-4 border-red-500 pl-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {'>'} Support IT Expert
                </h4>
                <p className="text-gray-600">Infrastructure et maintenance des systèmes critiques</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="w-80 h-80 mx-auto relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-4 border-gradient-to-r from-blue-500 to-purple-600 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 border-2 border-dashed border-purple-400 rounded-full"
              />
              <div className="absolute inset-8 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-black mb-2">RONN.J</h4>
                  <p className="text-gray-700 font-mono">L'ÉTERNEL CODEUR</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{skill.title}</h3>
                <p className="text-gray-600 leading-relaxed">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
