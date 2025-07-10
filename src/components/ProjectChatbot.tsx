
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, User, Lightbulb, Code, Smartphone, Shield } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';

interface ProjectChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
  suggestions?: string[];
}

const ProjectChatbot: React.FC<ProjectChatbotProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Bonjour ! Je suis votre assistant projet. Je peux vous aider à définir vos besoins et vous orienter vers les meilleures solutions. Quel type de projet avez-vous en tête ?",
      isBot: true,
      timestamp: new Date(),
      suggestions: [
        "Site web e-commerce",
        "Application mobile",
        "Audit sécurité",
        "Design UI/UX"
      ]
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): { text: string; suggestions?: string[] } => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('site') || message.includes('web')) {
      return {
        text: "Parfait ! Pour un site web, j'ai besoin de quelques détails. S'agit-il d'un site vitrine, e-commerce, ou d'une application web complexe ? Quel est votre secteur d'activité ?",
        suggestions: ["Site vitrine", "E-commerce", "Application web", "Blog/Portfolio"]
      };
    } else if (message.includes('mobile') || message.includes('app')) {
      return {
        text: "Excellent choix ! Pour votre application mobile, voulez-vous cibler iOS, Android, ou les deux ? Avez-vous déjà une idée des fonctionnalités principales ?",
        suggestions: ["iOS seulement", "Android seulement", "Cross-platform", "Je ne sais pas"]
      };
    } else if (message.includes('sécurité') || message.includes('audit')) {
      return {
        text: "La cybersécurité est cruciale ! Quel type d'audit vous intéresse ? Test de pénétration, audit RGPD, ou sécurisation d'infrastructure ?",
        suggestions: ["Pentest", "Audit RGPD", "Sécurisation", "Formation équipe"]
      };
    } else if (message.includes('design') || message.includes('ui') || message.includes('ux')) {
      return {
        text: "Le design est essentiel ! Avez-vous besoin d'une refonte complète de votre identité visuelle ou plutôt d'optimiser l'expérience utilisateur d'un produit existant ?",
        suggestions: ["Nouvelle identité", "Refonte UX", "Design system", "Prototypage"]
      };
    } else if (message.includes('budget') || message.includes('prix') || message.includes('coût')) {
      return {
        text: "Je comprends l'importance du budget. Nos tarifs varient selon la complexité. Pour vous donner une estimation précise, pouvez-vous me parler de l'envergure de votre projet ?",
        suggestions: ["Projet simple", "Projet moyen", "Projet complexe", "Demander un devis"]
      };
    } else if (message.includes('délai') || message.includes('temps') || message.includes('rapidement')) {
      return {
        text: "Concernant les délais, cela dépend de la complexité. Un site vitrine prend 2-4 semaines, une app mobile 2-4 mois. Quel est votre délai idéal ?",
        suggestions: ["Urgent (1 mois)", "Standard (2-3 mois)", "Flexible", "Voir planning"]
      };
    } else {
      return {
        text: "Merci pour ces informations ! Basé sur notre discussion, je peux vous recommander de demander un devis personnalisé. Souhaitez-vous que je vous aide à choisir le service le plus adapté ?",
        suggestions: ["Demander un devis", "Voir nos services", "Autre question", "Prendre RDV"]
      };
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simuler un délai de réponse
    setTimeout(() => {
      const botResponse = getBotResponse(inputMessage);
      const botMessage: Message = {
        id: Date.now() + 1,
        text: botResponse.text,
        isBot: true,
        timestamp: new Date(),
        suggestions: botResponse.suggestions
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputMessage(suggestion);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
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
        className="bg-white rounded-xl max-w-2xl w-full h-[600px] flex flex-col"
        style={{ cursor: 'auto' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <Bot size={20} className="text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-black">Assistant Projet</h3>
              <p className="text-sm text-green-600">En ligne</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-black transition-colors p-2"
            style={{ cursor: 'pointer' }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
              <div className={`max-w-[70%] ${message.isBot ? 'bg-gray-100' : 'bg-blue-600 text-white'} rounded-lg p-3`}>
                <div className="flex items-start space-x-2">
                  {message.isBot && (
                    <Bot size={16} className="text-blue-600 mt-1 flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <p className="text-sm">{message.text}</p>
                    {message.suggestions && (
                      <div className="mt-3 space-y-1">
                        {message.suggestions.map((suggestion, index) => (
                          <button
                            key={index}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="block w-full text-left text-xs bg-white text-blue-600 px-2 py-1 rounded hover:bg-blue-50 transition-colors"
                            style={{ cursor: 'pointer' }}
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  {!message.isBot && (
                    <User size={16} className="text-white mt-1 flex-shrink-0" />
                  )}
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-100 rounded-lg p-3 flex items-center space-x-2">
                <Bot size={16} className="text-blue-600" />
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="border-t border-gray-200 p-4">
          <div className="flex space-x-2">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Tapez votre message..."
              className="flex-1"
              style={{ cursor: 'text' }}
            />
            <Button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim()}
              className="bg-blue-600 hover:bg-blue-500"
              style={{ cursor: 'pointer' }}
            >
              <Send size={16} />
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectChatbot;
