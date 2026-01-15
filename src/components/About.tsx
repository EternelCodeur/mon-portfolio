import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Palette, Server, Monitor, Brush, Wrench, HeadphonesIcon, Code } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

const About = () => {
  const skills = [
    { icon: HeadphonesIcon, title: "Consulting IT", desc: "Conseil et stratégie informatique sur mesure" },
    { icon: Brush, title: "Design Graphique", desc: "Conception de logos, chartes graphiques,affiches, flyers, cartes" },
    { icon: Palette, title: "Design UI/UX", desc: "Interfaces modernes, Expérience utilisateur" },
    { icon: Server, title: "Solutions Cloud", desc: "Migration Cloud, DevOps,hébergement et sauvegarde sécurisée" },
    { icon: Monitor, title: "Support Informatique", desc: "Assistance technique complète pour entreprises" },
    { icon: Wrench, title: "Maintenance & Réparation", desc: "Réparation et maintenance de matériel informatique" },
    { icon: Shield, title: "Audit de sécurité d'applications", desc: "Analyse et renforcement de la sécurité des applications web et mobiles" },
    { icon: Code, title: "Developpement d'API REST", desc: "Developpement et mise en place d'API REST FULL Robuste" },
  ];

  return (
    <AnimatedBackground id="about" className="py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-3">
            QUI SUIS-JE ?
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
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
              <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-400 rounded-full animate-pulse opacity-20"></div>
              <div className="absolute inset-4 bg-gradient-to-r from-white to-gray-400 rounded-full animate-spin-slow opacity-30"></div>
              <div className="absolute inset-0 bg-gray-800 rounded-full overflow-hidden shadow-2xl">
                <img 
                  src="assets/profile.jpg" 
                  alt="RONN.J Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="bg-gray-800 bg-opacity-80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">Mon Parcours</h3>
              <p className="text-gray-300 leading-relaxed">
                Plus de 3 ans d'expérience dans le développement full-stack et la sécurité informatique. 
                J'ai accompagné des startups et entreprises dans leur transformation digitale, 
                en créant des solutions robustes et sécurisées.
              </p>
            </div>

            <div className="bg-gray-800 bg-opacity-80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">Ma Philosophie</h3>
              <p className="text-gray-300 leading-relaxed">
                "Je ne code pas pour créer. Je code pour impacter." Chaque ligne de code a un but, 
                chaque interface raconte une histoire, chaque solution résout un vrai problème.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-800 bg-opacity-80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700 hover:shadow-xl transition-shadow group"
            >
              <div className="mb-4">
                <skill.icon size={48} className="text-white group-hover:text-gray-300 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{skill.title}</h3>
              <p className="text-gray-400">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedBackground>
  );
};

export default About;
