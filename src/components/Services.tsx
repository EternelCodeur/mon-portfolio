
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Smartphone, Shield, Palette, Server, Zap } from 'lucide-react';
import QuoteForm from './QuoteForm';
import ProjectChatbot from './ProjectChatbot';
import WhiteGrid from './WhiteGrid';

const Services = () => {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);

  const services = [
    {
      icon: Code2,
      title: "Développement Web",
      description: "Applications web modernes avec React, Vue.js, Angular",
      features: ["SPA & PWA", "Interfaces Web Intuitives", "API RESTful", "Base de données", "Notifications Push", "Optimisation SEO"],
      price: "À partir de 600 000 FCFA"
    },
    {
      icon: Smartphone,
      title: "Applications Mobile",
      description: "Apps natives et cross-platform pour iOS et Android",
      features: ["React Native", "App Store", "Notifications Push"],
      price: "À partir de 600 000 FCFA"
    },
    {
      icon: Shield,
      title: "Cybersécurité",
      description: "Audit sécurité et tests de pénétration",
      features: ["Pentest", "Audit RGPD", "Sécurisation", "Formation équipes"],
      price: "À partir de 1 000 000 FCFA"
    },
    {
      icon: Palette,
      title: "Design UI/UX",
      description: "Interfaces utilisateur modernes et intuitives",
      features: ["Wireframing", "Prototypage", "Design System", "Tests utilisateurs"],
      price: "À partir de 300 000 FCFA"
    },
    {
      icon: Server,
      title: "DevOps & Cloud",
      description: "Infrastructure cloud et automatisation",
      features: ["AWS/Azure", "Docker", "CI/CD", "Monitoring"],
      price: "À partir de 500 000 FCFA"
    },
    {
      icon: Zap,
      title: "Consulting IT",
      description: "Conseil stratégique et accompagnement technique",
      features: ["Architecture", "Choix technologiques", "Formation", "Support"],
      price: "À partir de 200 000 FCFA"
    }
  ];

  const handleQuoteRequest = (service: any) => {
    setSelectedService(service);
    setShowQuoteForm(true);
  };

  const handleStartProject = () => {
    setShowChatbot(true);
  };

  return (
    <>
      <section id="services" className="min-h-screen py-20 px-4 bg-black relative">
        <WhiteGrid />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              MES SERVICES
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto mb-8"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Des solutions sur mesure pour transformer votre vision en réalité digitale
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gray-900 bg-opacity-80 backdrop-blur-sm border border-gray-700 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 h-full flex flex-col">
                  <div className="mb-6">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <service.icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-400 mb-4 text-sm">{service.description}</p>
                  </div>

                  <div className="flex-grow">
                    <ul className="space-y-2 text-sm mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <div className="text-lg font-bold text-blue-400 mb-4">{service.price}</div>
                    <div className="space-y-3">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleQuoteRequest(service)}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all"
                      >
                        Demander un devis
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Section CTA globale */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 text-white border border-gray-700">
              <h3 className="text-2xl font-bold mb-4">Prêt à transformer votre idée en réalité ?</h3>
              <p className="text-lg mb-6 opacity-90">
                Discutons de votre projet et trouvons ensemble la solution parfaite
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleStartProject}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-500 transition-all"
              >
                Commencer maintenant
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modals */}
      <AnimatePresence>
        {showQuoteForm && selectedService && (
          <QuoteForm
            service={selectedService}
            isOpen={showQuoteForm}
            onClose={() => {
              setShowQuoteForm(false);
              setSelectedService(null);
            }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showChatbot && (
          <ProjectChatbot
            isOpen={showChatbot}
            onClose={() => setShowChatbot(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Services;
