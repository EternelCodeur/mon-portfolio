
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';

interface QuoteFormProps {
  service: any;
  isOpen: boolean;
  onClose: () => void;
}

const QuoteForm: React.FC<QuoteFormProps> = ({ service, isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    budget: '',
    timeline: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Devis demandé pour:', service.title, formData);
    // Ici vous pourriez envoyer les données à votre backend
    alert('Votre demande de devis a été envoyée ! Nous vous recontacterons sous 24h.');
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
      data-modal-content
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        data-modal-content
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200" data-modal-content>
          <div className="flex items-center space-x-3" data-modal-content>
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <service.icon size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-black">Demande de devis</h3>
              <p className="text-sm text-gray-600">{service.title}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-black transition-colors p-2"
            data-modal-content
          >
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6" data-modal-content>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <User size={16} className="inline mr-2" />
                Nom complet *
              </label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Votre nom"
                required
                data-modal-content
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Mail size={16} className="inline mr-2" />
                Email *
              </label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="votre@email.com"
                required
                data-modal-content
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Phone size={16} className="inline mr-2" />
                Téléphone
              </label>
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="06 12 34 56 78"
                data-modal-content
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Entreprise
              </label>
              <Input
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Nom de votre entreprise"
                data-modal-content
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Budget estimé
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                data-modal-content
              >
                <option value="">Sélectionner un budget</option>
                <option value="Moins de 300 000 FCFA">Moins de 300 000 FCFA</option>
                <option value="300 000 FCFA - 500 000 FCFA">300 000 FCFA - 500 000 FCFA</option>
                <option value="500 000 FCFA - 1 000 000 FCFA">500 000 FCFA - 1 000 000 FCFA</option>
                <option value="1 000 000 FCFA - 2 000 000 FCFA">1 000 000 FCFA - 2 000 000 FCFA</option>
                <option value="2 000 000 FCFA - 5 000 000 FCFA">2 000 000 FCFA - 5 000 000 FCFA</option>
                <option value="5 000 000 FCFA - 10 000 000 FCFA">5 000 000 FCFA - 10 000 000 FCFA</option>
                <option value="À discuter">À discuter</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Délai souhaité
              </label>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                data-modal-content
              >
                <option value="">Sélectionner un délai</option>
                <option value="Moins d'1 mois">Moins d'1 mois</option>
                <option value="1 à 3 mois">1 à 3 mois</option>
                <option value="3 à 6 mois">3 à 6 mois</option>
                <option value="Plus de 6 mois">Plus de 6 mois</option>
                <option value="Flexible">Flexible</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <MessageSquare size={16} className="inline mr-2" />
              Description de votre projet *
            </label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Décrivez votre projet, vos besoins spécifiques, vos objectifs..."
              rows={4}
              required
              className="resize-none"
              data-modal-content
            />
          </div>

          {/* Submit Button */}
          <div className="flex space-x-4">
            <Button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-200 text-gray-800 hover:bg-gray-300"
              data-modal-content
            >
              Annuler
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500"
              data-modal-content
            >
              <Send size={16} className="mr-2" />
              Envoyer ma demande
            </Button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default QuoteForm;
