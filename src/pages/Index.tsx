
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Contact from '../components/Contact';
import CustomCursor from '../components/CustomCursor';
import TerminalLoader from '../components/TerminalLoader';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState('hero');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono overflow-x-hidden">
      <CustomCursor />
      
      <AnimatePresence>
        {isLoading ? (
          <TerminalLoader onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Hero />
            <About />
            <Projects />
            <Services />
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
