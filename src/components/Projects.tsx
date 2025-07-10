
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Play, X } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "CyberShield Pro",
      category: "Cybersécurité",
      description: "Suite complète de tests de pénétration et d'audit sécurité",
      longDescription: "Application avancée de cybersécurité offrant des outils de pentesting automatisés, analyse de vulnérabilités, et monitoring en temps réel. Interface développée avec React et Python backend.",
      tech: ["React", "Python", "FastAPI", "PostgreSQL", "Docker"],
      image: "/placeholder.svg",
      github: "#",
      demo: "#",
      status: "Production"
    },
    {
      id: 2,
      title: "NeuroDesign AI",
      category: "Intelligence Artificielle",
      description: "Générateur de designs assisté par IA pour interfaces modernes",
      longDescription: "Plateforme révolutionnaire utilisant des modèles de deep learning pour générer automatiquement des interfaces utilisateur optimisées selon les besoins métier.",
      tech: ["Next.js", "TensorFlow.js", "OpenAI API", "Prisma", "Tailwind"],
      image: "/placeholder.svg",
      github: "#",
      demo: "#",
      status: "Beta"
    },
    {
      id: 3,
      title: "Quantum Dashboard",
      category: "Data Visualization",
      description: "Dashboard analytique temps réel avec visualisations 3D",
      longDescription: "Interface de visualisation de données complexes avec rendu 3D, analyses prédictives et intégration multi-sources. Performances optimisées pour le Big Data.",
      tech: ["Vue.js", "Three.js", "D3.js", "Node.js", "MongoDB"],
      image: "/placeholder.svg",
      github: "#",
      demo: "#",
      status: "Production"
    },
    {
      id: 4,
      title: "BlockChain Explorer",
      category: "Blockchain",
      description: "Explorateur de transactions et analyseur de smart contracts",
      longDescription: "Outil complet d'analyse blockchain permettant l'exploration de transactions, audit de smart contracts et visualisation des flux financiers décentralisés.",
      tech: ["React", "Web3.js", "Solidity", "GraphQL", "TypeScript"],
      image: "/placeholder.svg",
      github: "#",
      demo: "#",
      status: "Développement"
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
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 mb-6">
            MES CRÉATIONS
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez mes projets les plus innovants, alliant technologie de pointe et design futuriste
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="bg-black/50 border border-gray-700 rounded-xl overflow-hidden backdrop-blur-sm hover:border-cyan-400 transition-all duration-500 transform hover:scale-105">
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-900 to-black overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-red-500/20"></div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Production' ? 'bg-green-500/20 text-green-400 border border-green-500' :
                      project.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500' :
                      'bg-blue-500/20 text-blue-400 border border-blue-500'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  {/* Overlay with play button */}
                  <motion.div
                    className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setSelectedProject(project.id)}
                      className="bg-red-600 text-white p-4 rounded-full hover:bg-red-500 transition-colors"
                    >
                      <Play size={24} />
                    </motion.button>
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-800 text-green-400 text-xs rounded-full border border-green-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </motion.a>
                    
                    <motion.a
                      href={project.demo}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-cyan-500 hover:to-blue-500 transition-all"
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-black border border-cyan-400 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find(p => p.id === selectedProject);
                  if (!project) return null;
                  
                  return (
                    <>
                      <div className="flex justify-between items-center p-6 border-b border-gray-700">
                        <h3 className="text-2xl font-bold text-cyan-400">{project.title}</h3>
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <X size={24} />
                        </button>
                      </div>
                      
                      <div className="p-6">
                        <div className="grid md:grid-cols-2 gap-8">
                          <div className="space-y-6">
                            <div>
                              <h4 className="text-lg font-semibold text-white mb-3">Description complète</h4>
                              <p className="text-gray-300 leading-relaxed">{project.longDescription}</p>
                            </div>
                            
                            <div>
                              <h4 className="text-lg font-semibold text-white mb-3">Technologies utilisées</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, index) => (
                                  <span
                                    key={index}
                                    className="px-3 py-1 bg-gray-800 text-green-400 text-sm rounded-full border border-green-500/30"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <div className="h-64 bg-gradient-to-br from-gray-900 to-black rounded-lg flex items-center justify-center border border-gray-700">
                              <span className="text-gray-500">Aperçu du projet</span>
                            </div>
                            
                            <div className="flex space-x-4">
                              <motion.a
                                href={project.github}
                                whileHover={{ scale: 1.05 }}
                                className="flex-1 bg-gray-800 text-white py-3 px-4 rounded-lg text-center hover:bg-gray-700 transition-colors flex items-center justify-center space-x-2"
                              >
                                <Github size={20} />
                                <span>Voir le code</span>
                              </motion.a>
                              
                              <motion.a
                                href={project.demo}
                                whileHover={{ scale: 1.05 }}
                                className="flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 px-4 rounded-lg text-center hover:from-cyan-500 hover:to-blue-500 transition-all flex items-center justify-center space-x-2"
                              >
                                <ExternalLink size={20} />
                                <span>Démo live</span>
                              </motion.a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
