
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users, Coffee, Award } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';
import WhiteGrid from './WhiteGrid';

const StatsSection = () => {
  const stats = [
    {
      icon: Code,
      value: 10,
      suffix: '+',
      label: 'Projets Réalisés',
      description: 'Applications développées avec succès'
    },
    {
      icon: Users,
      value: 5,
      suffix: '+',
      label: 'Clients Satisfaits',
      description: 'Entreprises qui nous font confiance'
    },
    {
      icon: Coffee,
      value: 1000,
      suffix: '+',
      label: 'Cafés Bus',
      description: 'Heures de code intensif'
    },
    {
      icon: Award,
      value: 3,
      suffix: '',
      label: 'Années d\'Expérience',
      description: 'Dans le développement web'
    }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <WhiteGrid />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Quelques Chiffres Impressionnants
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-gray-900 bg-opacity-80 backdrop-blur-sm border border-gray-700 rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-white to-gray-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <stat.icon size={32} className="text-black" />
              </div>
              
              <div className="mb-2">
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  duration={2.5}
                />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2">
                {stat.label}
              </h3>
              
              <p className="text-gray-400 text-sm">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
