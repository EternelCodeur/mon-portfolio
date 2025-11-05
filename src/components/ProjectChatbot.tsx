
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
      timestamp: new Date()
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

    const botId = Date.now() + 1;
    try {
      // Ajouter un message bot placeholder qui sera rempli au fil du stream
      setMessages(prev => [...prev, { id: botId, text: '', isBot: true, timestamp: new Date() }]);

      const apiBase = import.meta.env?.VITE_API_BASE_URL ?? '';
      const res = await fetch(`${apiBase}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [
            ...messages.map(m => ({ role: m.isBot ? 'assistant' : 'user', content: m.text })),
            { role: 'user', content: userMessage.text }
          ],
          stream: true
        })
      });

      if (!res.ok || !res.body) {
        throw new Error('no-stream');
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let done = false;
      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        if (value) {
          const chunkText = decoder.decode(value, { stream: true });
          if (chunkText) {
            setMessages(prev => prev.map(m => (m.id === botId ? { ...m, text: m.text + chunkText } : m)));
          }
        }
      }
    } catch (err) {
      // Fallback: afficher une erreur simple sans réponses prédéfinies
      const errorText = "Désolé, le service IA est momentanément indisponible. Réessaie plus tard.";
      setMessages(prev => prev.map(m => (m.id === botId ? { ...m, text: errorText } : m)));
    } finally {
      setIsTyping(false);
    }
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
      onClick={onClose}
      data-modal-content
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-white rounded-xl max-w-2xl w-full h-[600px] flex flex-col"
        onClick={(e) => e.stopPropagation()}
        data-modal-content
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200" data-modal-content>
          <div className="flex items-center space-x-3" data-modal-content>
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
            data-modal-content
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4" data-modal-content>
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
              <div className={`max-w-[80%] ${message.isBot ? 'bg-gray-100' : 'bg-blue-600 text-white'} rounded-lg p-3`}>
                <div className="flex items-start space-x-2">
                  {message.isBot && (
                    <Bot size={16} className="text-blue-600 mt-1 flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <p className="text-sm">{message.text}</p>
                    
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
        <div className="border-t border-gray-200 p-4" data-modal-content>
          <div className="flex space-x-2">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Tapez votre message..."
              className="flex-1"
              data-modal-content
            />
            <Button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim()}
              className="bg-blue-600 hover:bg-blue-500"
              data-modal-content
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
