
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users, Coffee, Award } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const StatsSection = () => {
  const stats = [
    {
      icon: Code,
      value: 150,
      suffix: '+',
      label: 'Projets Réalisés',
      description: 'Applications développées avec succès'
    },
    {
      icon: Users,
      value: 50,
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
      value: 5,
      suffix: '',
      label: 'Années d\'Expérience',
      description: 'Dans le développement web'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-blue-500 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border-4 border-purple-500 rounded-square rotate-45"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-500 rounded-full opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-black mb-4">
            Quelques Chiffres Impressionnants
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <stat.icon size={32} className="text-white" />
              </div>
              
              <div className="mb-2">
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  duration={2.5}
                />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {stat.label}
              </h3>
              
              <p className="text-gray-600 text-sm">
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
