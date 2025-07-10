import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Shield, Palette, Server } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: Brain, title: "Intelligence Artificielle", desc: "Machine Learning, Deep Learning, NLP" },
    { icon: Shield, title: "Cybersécurité", desc: "Tests de pénétration, Audit sécurité" },
    { icon: Palette, title: "Design UI/UX", desc: "Interfaces modernes, Expérience utilisateur" },
    { icon: Server, title: "Architecture", desc: "Microservices, Cloud, DevOps" }
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
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
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Passionné par l'innovation technologique, je transforme vos idées en solutions digitales performantes. 
            Mon approche allie expertise technique et vision créative pour créer des expériences utilisateur exceptionnelles.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="w-80 h-80 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse opacity-20"></div>
              <div className="absolute inset-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-spin-slow opacity-30"></div>
              <div className="absolute inset-8 bg-white rounded-full flex items-center justify-center shadow-2xl">
                <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  R.J
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-black mb-4">Mon Parcours</h3>
              <p className="text-gray-700 leading-relaxed">
                Plus de 8 ans d'expérience dans le développement full-stack et la cybersécurité. 
                J'ai accompagné des startups et grandes entreprises dans leur transformation digitale, 
                en créant des solutions robustes et sécurisées.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-black mb-4">Ma Philosophy</h3>
              <p className="text-gray-700 leading-relaxed">
                "Je ne code pas pour créer. Je code pour impacter." Chaque ligne de code a un but, 
                chaque interface raconte une histoire, chaque solution résout un vrai problème.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow group"
            >
              <div className="mb-4">
                <skill.icon size={48} className="text-blue-600 group-hover:text-purple-600 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">{skill.title}</h3>
              <p className="text-gray-600">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
