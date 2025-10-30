
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, Mail, Linkedin, X, MessageSquare } from 'lucide-react';

const FloatingContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    {
      icon: MessageSquare,
      label: 'WhatsApp',
      color: 'bg-green-500 hover:bg-green-600',
      action: () => window.open('https://wa.me/24174639507?text=Bonjour, je souhaite discuter d\'un projet', '_blank')
    },
    {
      icon: MessageCircle,
      label: 'SMS',
      color: 'bg-blue-500 hover:bg-blue-600',
      action: () => window.open('sms:+24174639507?body=Bonjour, je souhaite discuter d\'un projet')
    },
    {
      icon: Phone,
      label: 'Appel',
      color: 'bg-emerald-500 hover:bg-emerald-600',
      action: () => window.open('tel:+24174639507')
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      color: 'bg-blue-600 hover:bg-blue-700',
      action: () => window.open('https://linkedin.com/in/ronn-joxy-gnossigui-nguia-14b509336', '_blank')
    },
    {
      icon: Mail,
      label: 'Email',
      color: 'bg-purple-500 hover:bg-purple-600',
      action: () => window.open('mailto:eternelcodeur@gmail.com?subject=Demande de contact&body=Bonjour, je souhaite discuter d\'un projet')
    }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Contact Options */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute bottom-16 right-0 space-y-3"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "backOut" }}
          >
            {contactOptions.map((option, index) => (
              <motion.button
                key={option.label}
                onClick={option.action}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-white shadow-lg backdrop-blur-sm ${option.color} transition-all duration-300 min-w-[140px] group`}
                initial={{ opacity: 0, x: 50, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 50, scale: 0.8 }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.3,
                  ease: "backOut"
                }}
                whileHover={{ scale: 1.05, x: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <option.icon className="w-5 h-5 group-hover:animate-pulse" />
                <span className="font-medium">{option.label}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={toggleMenu}
        className={`relative w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-white transition-all duration-300 ${
          isOpen 
            ? 'bg-red-500 hover:bg-red-600 rotate-180' 
            : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          rotate: isOpen ? 180 : 0,
          boxShadow: isOpen 
            ? "0 0 30px rgba(239, 68, 68, 0.5)" 
            : "0 0 30px rgba(59, 130, 246, 0.5)"
        }}
        transition={{ duration: 0.3 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 180 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="message"
              initial={{ opacity: 0, rotate: 180 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -180 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse Animation */}
        {!isOpen && (
          <>
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.8, 0, 0.8]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.6, 0, 0.6]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
          </>
        )}
      </motion.button>

      {/* Tooltip */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            className="absolute bottom-16 right-2 bg-black/80 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap pointer-events-none"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ delay: 2, duration: 0.3 }}
          >
            Contactez-moi !
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingContactButton;
