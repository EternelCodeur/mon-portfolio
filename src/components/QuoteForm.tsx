
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Send, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

interface QuoteFormProps {
  service: {
    title: string;
    description: string;
    price: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

const QuoteForm: React.FC<QuoteFormProps> = ({ service, isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectDescription: '',
    budget: '',
    timeline: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici on pourrait intégrer avec un service d'email
    console.log('Demande de devis pour:', service.title, formData);
    alert('Votre demande de devis a été envoyée ! Nous vous recontacterons rapidement.');
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      style={{ cursor: 'auto' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        style={{ cursor: 'auto' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <div>
            <h3 className="text-2xl font-bold text-black">Demander un devis</h3>
            <p className="text-blue-600 font-semibold">{service.title}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-black transition-colors p-2"
            style={{ cursor: 'pointer' }}
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
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
                required
                placeholder="Votre nom complet"
                style={{ cursor: 'text' }}
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
                required
                placeholder="votre@email.com"
                style={{ cursor: 'text' }}
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
                placeholder="+33 6 12 34 56 78"
                style={{ cursor: 'text' }}
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
                style={{ cursor: 'text' }}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <MessageSquare size={16} className="inline mr-2" />
              Description du projet *
            </label>
            <Textarea
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Décrivez votre projet en détail..."
              style={{ cursor: 'text' }}
            />
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ cursor: 'pointer' }}
              >
                <option value="">Sélectionnez votre budget</option>
                <option value="1000-5000">1 000€ - 5 000€</option>
                <option value="5000-10000">5 000€ - 10 000€</option>
                <option value="10000-25000">10 000€ - 25 000€</option>
                <option value="25000+">25 000€+</option>
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ cursor: 'pointer' }}
              >
                <option value="">Sélectionnez un délai</option>
                <option value="urgent">Urgent (1-2 semaines)</option>
                <option value="1month">1 mois</option>
                <option value="2-3months">2-3 mois</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">Service sélectionné:</h4>
            <p className="text-blue-600 font-medium">{service.title}</p>
            <p className="text-gray-600 text-sm">{service.description}</p>
            <p className="text-green-600 font-semibold mt-2">{service.price}</p>
          </div>

          <div className="flex space-x-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
              style={{ cursor: 'pointer' }}
            >
              Annuler
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500"
              style={{ cursor: 'pointer' }}
            >
              <Send size={16} className="mr-2" />
              Envoyer la demande
            </Button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default QuoteForm;
