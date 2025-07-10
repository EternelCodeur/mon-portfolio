
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Shield, Zap, Database, Smartphone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Développement Full Stack",
      description: "Applications web modernes avec React, Node.js, et technologies de pointe",
      features: ["APIs RESTful", "Microservices", "Cloud Deployment", "Performance Optimization"],
      price: "À partir de 2500€",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Palette,
      title: "Design UX/UI",
      description: "Interfaces utilisateur immersives et expériences digitales mémorables",
      features: ["Prototypage", "Design System", "Animations", "Tests Utilisateur"],
      price: "À partir de 1500€",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Cybersécurité",
      description: "Audit sécurité, tests de pénétration et protection des systèmes",
      features: ["Pentesting", "Audit de Code", "OWASP Compliance", "Security Training"],
      price: "À partir de 3000€",
      gradient: "from-red-500 to-orange-500"
    },
    {
      icon: Database,
      title: "Architecture Système",
      description: "Conception d'architectures scalables et performantes",
      features: ["Microservices", "Load Balancing", "Database Design", "DevOps"],
      price: "À partir de 2000€",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Smartphone,
      title: "Applications Mobile",
      description: "Apps natives et cross-platform pour iOS et Android",
      features: ["React Native", "Flutter", "PWA", "App Store Deploy"],
      price: "À partir de 4000€",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Zap,
      title: "Consulting IT",
      description: "Stratégie technologique et transformation digitale",
      features: ["Tech Strategy", "Code Review", "Team Training", "Process Optimization"],
      price: "300€/jour",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section className="min-h-screen py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 mb-6">
            MES SERVICES
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Solutions technologiques sur mesure pour propulser votre business vers le futur
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  rotateX: 5 
                }}
                className="group relative"
              >
                <div className="bg-black/50 border border-gray-700 rounded-xl p-8 backdrop-blur-sm hover:border-cyan-400 transition-all duration-500 h-full relative overflow-hidden">
                  {/* Background Glow Effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />
                  
                  {/* Floating Icon */}
                  <motion.div
                    className={`w-20 h-20 mx-auto mb-6 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center relative z-10`}
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.1
                    }}
                    transition={{ 
                      rotate: { duration: 0.8 },
                      scale: { duration: 0.3 }
                    }}
                  >
                    <Icon className="text-white" size={32} />
                  </motion.div>

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors text-center">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-6 leading-relaxed text-center">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + featureIndex * 0.1 }}
                          className="flex items-center text-green-400 text-sm"
                        >
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></span>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>

                    {/* Price */}
                    <div className="text-center">
                      <div className={`text-2xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-4`}>
                        {service.price}
                      </div>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-full bg-gradient-to-r ${service.gradient} text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
                      >
                        Demander un devis
                      </motion.button>
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                    <motion.div
                      className={`absolute top-0 right-0 w-8 h-8 bg-gradient-to-br ${service.gradient} transform rotate-45 translate-x-4 -translate-y-4 group-hover:scale-150 transition-transform duration-500`}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-black/50 border border-cyan-400 rounded-xl p-8 backdrop-blur-sm max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Prêt à transformer votre vision en réalité ?
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              Discutons de votre projet et créons ensemble quelque chose d'extraordinaire
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-red-600 to-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Démarrer un projet
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
