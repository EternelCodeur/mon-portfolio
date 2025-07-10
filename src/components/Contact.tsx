
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast.success("Message envoyé avec succès ! Je vous répondrai rapidement.");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "ronn.j@digital.com",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: "+33 6 XX XX XX XX",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: MapPin,
      title: "Localisation",
      value: "France, Remote Worldwide",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" }
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
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-cyan-400 mb-6">
            CONTACT
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-cyan-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Une idée révolutionnaire en tête ? Connectons-nous et créons l'impossible
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="bg-black/50 border border-gray-700 rounded-xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">
                <span className="text-red-400 mr-2">></span>
                Envoyez-moi un message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-green-400 text-sm font-semibold mb-2">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-900 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-green-400 text-sm font-semibold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-900 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-green-400 text-sm font-semibold mb-2">
                    Sujet
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-900 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors"
                    placeholder="Sujet de votre message"
                  />
                </div>

                <div>
                  <label className="block text-green-400 text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-gray-900 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                    placeholder="Décrivez votre projet ou votre demande..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-red-600 to-cyan-600 text-white py-4 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Envoyer le message</span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-black/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm hover:border-cyan-400 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{info.title}</h4>
                      <p className="text-gray-300">{info.value}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-black/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm"
            >
              <h4 className="text-lg font-semibold text-white mb-4">Me suivre</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center text-white hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-black/50 border border-green-500 rounded-xl p-6 backdrop-blur-sm"
            >
              <div className="flex items-center space-x-3">
                <motion.div
                  className="w-3 h-3 bg-green-400 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-green-400 font-semibold">Disponible pour nouveaux projets</span>
              </div>
              <p className="text-gray-300 mt-2 text-sm">
                Temps de réponse moyen : 2-4 heures
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center mt-20 pt-8 border-t border-gray-700"
        >
          <p className="text-gray-400 mb-4">
            © 2024 Ronn.J - L'Éternel Codeur. Tous droits réservés.
          </p>
          <motion.div
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-cyan-400"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            "Je ne code pas pour créer. Je code pour impacter."
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
