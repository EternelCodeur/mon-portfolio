import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Contact from '../components/Contact';
import CustomCursor from '../components/CustomCursor';
import TerminalLoader from '../components/TerminalLoader';
import Navigation from '../components/Navigation';
import StatsSection from '../components/StatsSection';
import SkillsShowcase from '../components/SkillsShowcase';
import Footer from '../components/Footer';
import FloatingContactButton from '../components/FloatingContactButton';

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 text-gray-900 font-sans overflow-x-hidden">
      <CustomCursor />
      <Navigation />
      
      <AnimatePresence>
        {isLoading ? (
          <TerminalLoader onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div id="hero">
              <Hero />
            </div>
            <div id="about">
              <About />
            </div>
            <StatsSection />
            <SkillsShowcase />
            <div id="projects">
              <Projects />
            </div>
            <div id="services">
              <Services />
            </div>
            <div id="contact">
              <Contact />
            </div>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
      
      <FloatingContactButton />
    </div>
  );
};

export default Index;
