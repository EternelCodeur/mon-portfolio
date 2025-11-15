import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;
    const { name, email, subject, message } = formData;
    const missing = [name, email, subject, message].some((v) => !String(v || '').trim());
    const emailOk = /^(?=.*@).+\..+$/i.test(email);
    if (missing || !emailOk) {
      setStatus('error');
      return;
    }
    setStatus('loading');
    try {
      const apiBase = (import.meta.env?.VITE_API_BASE_URL as string | undefined)
        ?? (typeof window !== 'undefined' && window.location?.port === '8080' ? 'http://localhost:3001' : '');
      const res = await fetch(`${apiBase}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!res.ok) {
        try {
          const data = await res.json();
          throw new Error(data?.error || 'send-failed');
        } catch (_) {
          throw new Error('send-failed');
        }
      }
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (_) {
      setStatus('error');
    } finally {
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "eternelcodeur@gmail.com", href: "mailto:eternelcodeur@gmail.com" },
    { icon: Phone, label: "Téléphone", value: "+241 74 63 95 07", href: "tel:+24174639507" },
    { icon: MapPin, label: "Localisation", value: "Libreville, Gabon", href: "#" }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/EternelCodeur", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ronn-joxy-gnossigui-nguia-14b509336/", label: "LinkedIn" },
  ];

  return (
    <section id="contact" className="min-h-screen py-10 bg-gray-50 overflow-x-hidden overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-black mb-6">
            CONTACTEZ-MOI
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Prêt à donner vie à votre projet ? Discutons de vos besoins et créons quelque chose d'exceptionnel ensemble.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 overflow-x-clip w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8 min-w-0 overflow-x-clip w-full"
          >
            <div className="bg-white w-full max-w-full p-6 md:p-8 rounded-xl shadow-lg border border-gray-200 overflow-hidden box-border">
              <h3 className="text-xl font-bold text-black mb-6">Informations de contact</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    className="flex items-center space-x-4 p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <info.icon size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{info.label}</p>
                      <p className="text-gray-600 break-words">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="bg-white w-full max-w-full p-6 md:p-8 rounded-xl shadow-lg border border-gray-200 box-border">
              <h3 className="text-xl font-bold text-black mb-6">Suivez-moi</h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform"
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="min-w-0 overflow-x-clip w-full"
          >
            <div className="bg-white w-full max-w-full p-6 md:p-8 rounded-xl shadow-lg border border-gray-200 overflow-hidden box-border">
              <h3 className="text-xl font-bold text-black mb-6">Envoyez-moi un message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Sujet
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    required
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all flex items-center justify-center space-x-2 font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
                  disabled={status === 'loading'}
                >
                  <Send size={20} />
                  <span>
                    {status === 'loading' ? 'Envoi en cours…' : status === 'success' ? 'Message envoyé !' : status === 'error' ? 'Échec de l\'envoi' : 'Envoyer le message'}
                  </span>
                </motion.button>
               </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
