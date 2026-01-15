
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Play, X, Maximize2 } from 'lucide-react';
import WhiteGrid from './WhiteGrid';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [isVideoFullscreen, setIsVideoFullscreen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Chat Training",
      category: "Application Web & mobile", 
      description: "Application de Chat pour un Client",
      longDescription: "Chat Training est une application web interne de messagerie instantanée développée pour améliorer la communication et la collaboration au sein d’une entreprise. Elle permet aux employés d’échanger en temps réel via des messages privés ou de groupe, de partager des fichiers, et de recevoir des notifications instantanées grâce à Firebase Messaging. L’objectif principal du projet est de centraliser les échanges internes dans un environnement sécurisé, fluide et ergonomique. L’interface utilisateur, développée avec React, offre une expérience moderne et responsive, tandis que le backend en Laravel assure la gestion des utilisateurs, la sécurité des messages, et l’intégration avec la base de données MySQL. Le tout est soutenu par une architecture robuste facilitant l’évolutivité et la maintenance du système. Cette solution permet de remplacer les outils externes de chat par une plateforme personnalisée adaptée aux besoins spécifiques de l’entreprise, garantissant confidentialité, productivité et intégration complète avec les services internes.",
      tech: ["PHP", "Laravel", "React", "TypeScript", "MySQL", "Firebase Messaging"],
      image: "chat-training.png",
      status: "Production"
    },
    {
      id: 2,
      title: "Archi Pointe",
      category: "Application Web Multi Tenant",
      description: "Système de gestion de pointage",
      longDescription: "Cette application de gestion de pointage a été conçue pour automatiser et simplifier le suivi de la présence des employés au sein de l’entreprise. Elle permet d’enregistrer les heures d’arrivée et de départ, de calculer automatiquement le temps de travail journalier, hebdomadaire ou mensuel, et de générer des rapports détaillés pour le service des ressources humaines. Grâce à une interface intuitive développée avec React, les utilisateurs peuvent consulter leurs historiques de pointage en temps réel, tandis que le backend, propulsé par Laravel et MySQL, assure la fiabilité et la sécurité des données. L’application intègre également un système d’authentification sécurisé, des rôles utilisateurs (administrateurs, employés, superviseurs), ainsi qu’un tableau de bord dynamique pour le suivi global de l’assiduité. Cette solution contribue à réduire les erreurs manuelles, à améliorer la productivité et à offrir une visibilité claire sur la gestion du temps de travail au sein de l’entreprise.",
      tech: ["PHP", "Laravel", "React", "TypeScript", "MySQL"],
      image: "archi-pointe.png",
      status: "Production"
    },
    {
      id: 3,
      title: "Archi Drive",
      category: "Application Web Multi Tenant",
      description: "Système interne de partage et de gestion de documents",
      longDescription: "Archi Drive est une application web interne conçue pour centraliser, gérer et partager les documents au sein d’une entreprise. Développée en architecture multitenant, elle permet à plusieurs entités d’utiliser la plateforme tout en garantissant la sécurité et l’isolation des données. L’application propose le téléchargement et la prévisualisation des fichiers, la gestion des versions, le partage sécurisé, et un système de rôles pour contrôler les autorisations. Son interface intuitive en React, combinée à un backend Laravel/MySQL, assure une expérience fluide et fiable. Archi Drive intègre également les notifications instantanées via Firebase et une API pour générer automatiquement des aperçus ou étiquettes visuelles, offrant une solution sécurisée et évolutive pour la gestion documentaire interne.",
      tech: ["PHP", "Laravel", "React", "TypeScript", "MySQL","Firebase","AWS CLOUD","postgresql","Docker"],
      image: "archi-drive.png",
      status: "Développement"
    },
    {
      id: 4,
      title: "Archi Docx",
      category: "Application Web Multi Tenant",
      description: "Système d'Archivage Electronique et Gestion Electronique de Document ",
      longDescription: "Archi Docx est une application web de Gestion Electronique de Documents (GED) et d’archivage électronique, conçue pour centraliser et sécuriser les documents en entreprise. Développée en architecture multitenant, elle permet le partage interne et externe, le versioning des fichiers, et offre un système de rôles pour contrôler les accès. L’interface React est moderne et responsive, le backend Laravel avec MySQL garantit fiabilité et performance, et une API Laravel permet la conversion de texte en image pour générer des aperçus ou badges visuels. Archi Docx facilite ainsi la collaboration et la gestion documentaire de manière sécurisée et évolutive.",
      tech: ["PHP", "Laravel", "React", "TypeScript", "MySQL","Firebase","AWS CLOUD","postgresql","Docker"],
      image: "archi-docx.png",
      status: "Développement"
    },
    {
      id: 5,
      title: "Inventaire",
      category: "Application Web",
      description: "Système de Gestion d'Inventaire ",
      longDescription: "Inventaire est dédiée à la gestion et au suivi des inventaires d’archives. Elle permet de centraliser les informations sur les documents et supports archivés, de suivre leur disponibilité, et de faciliter la recherche et l’organisation des archives au sein de l’entreprise. Une solution efficace pour optimiser la gestion des documents et garantir leur traçabilité.",
      tech: ["Node.js", "TypeScript", "React", "Supabase","PostgreSQL"],
      image: "inventaire.png",
      status: "Production"
    },
    {
      id: 6,
      title: "Archi Register",
      category: "Application Web",
      description: "Système de Suivi des Archives Physique",
      longDescription: "Archi Register est dédiée à la gestion et au suivi des archives physiques. Elle permet de centraliser les informations sur les archives physiques, de suivre leur disponibilité, et de faciliter la recherche et l’organisation des archives au sein de l’entreprise. Une solution efficace pour optimiser la gestion des documents et garantir leur traçabilité.",
      tech: ["PHP", "Laravel", "React", "TypeScript", "MySQL"],
      image: "archi-register.png",
      status: "Production"
    },
    {
      id: 7,
      title: "Okoumé Events",
      category: "Application Web",
      description: "Système de gestion des événements",
      longDescription: "Okoumé Events est dédiée à la gestion et au suivi des événements. Elle permet de centraliser les informations sur les événements, de suivre leur disponibilité, et de faciliter la recherche et l’organisation des événements au sein de l’entreprise. Une solution efficace pour optimiser la gestion des événements et garantir leur traçabilité.",
      tech: ["PHP", "Laravel", "React", "TypeScript", "MySQL"],
      image: "okoume-events.png",
      status: "Production"
    },
  ];

  const handleFullscreenToggle = () => {
    setIsVideoFullscreen(!isVideoFullscreen);
  };

  return (
    <section id="projects" className="min-h-screen py-0 px-4 relative bg-black">
      <WhiteGrid />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            MES CRÉATIONS
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
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
              <div className="bg-gray-900 bg-opacity-80 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden cursor-pointer" onClick={() => setSelectedProject(project.id)} data-modal-content>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    data-modal-content
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Production' ? 'bg-green-900 text-green-300 border border-green-700' :
                      project.status === 'Beta' ? 'bg-yellow-900 text-yellow-300 border border-yellow-700' :
                      'bg-blue-900 text-blue-300 border border-blue-700'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  {/* Overlay with play button */}
                  <motion.div
                    className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    data-modal-content
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project.id);
                      }}
                      className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-500 transition-colors"
                      data-modal-content
                    >
                      <Play size={24} />
                    </motion.button>
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-blue-400 text-md font-semibold uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-md font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-800 text-blue-400 text-xs rounded-full border border-blue-600"
                      >
                        {tech}
                      </span>
                    ))}
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
              data-modal-content
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-gray-900 bg-opacity-90 backdrop-blur-sm border border-gray-700 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
                data-modal-content
              >
                {(() => {
                  const project = projects.find(p => p.id === selectedProject);
                  if (!project) return null;
                  
                  return (
                    <>
                      <div className="flex justify-between items-center p-6 border-b border-gray-200" data-modal-content>
                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="text-gray-400 hover:text-white transition-colors"
                          data-modal-content
                        >
                          <X size={24} />
                        </button>
                      </div>
                      
                      <div className="p-6" data-modal-content>
                        <div className="grid md:grid-cols-2 gap-8">
                          <div className="space-y-6" data-modal-content>
                            <div>
                              <h4 className="text-md font-semibold text-white mb-3">Description complète</h4>
                              <p className="text-gray-300 text-sm leading-relaxed">{project.longDescription}</p>
                            </div>
                            
                            <div>
                              <h4 className="text-md font-semibold text-white mb-3">Technologies utilisées</h4>
                              <div className="flex flex-wrap gap-2 text-sm">
                                {project.tech.map((tech, index) => (
                                  <span
                                    key={index}
                                    className="px-3 py-1 bg-gray-800 text-blue-400 text-sm rounded-full border border-blue-600"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                          
                          <div className="space-y-4" data-modal-content>
                            <div className="relative">
                              <video
                                className="w-full h-64 rounded-lg object-cover"
                                controls
                                poster={project.image}
                                data-modal-content
                              >
                                <source src={project.image} type="video/mp4" />
                                Votre navigateur ne supporte pas la lecture vidéo.
                              </video>
                              <button
                                onClick={handleFullscreenToggle}
                                className="absolute top-2 right-2 bg-black/50 text-white p-2 rounded-lg hover:bg-black/70 transition-colors"
                                data-modal-content
                              >
                                <Maximize2 size={16} />
                              </button>
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

        {/* Fullscreen Video Modal */}
        <AnimatePresence>
          {isVideoFullscreen && selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-[60] flex items-center justify-center"
              onClick={handleFullscreenToggle}
              data-modal-content
            >
              {(() => {
                const project = projects.find(p => p.id === selectedProject);
                if (!project) return null;
                
                return (
                  <>
                    <button
                      onClick={handleFullscreenToggle}
                      className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
                      data-modal-content
                    >
                      <X size={32} />
                    </button>
                    <video
                      className="w-full h-full object-contain"
                      controls
                      autoPlay
                      poster={project.image}
                      onClick={(e) => e.stopPropagation()}
                      data-modal-content
                    >
                      <source src={project.image} type="video/mp4" />
                      Votre navigateur ne supporte pas la lecture vidéo.
                    </video>
                  </>
                );
              })()}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
