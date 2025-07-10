
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TerminalLoaderProps {
  onComplete: () => void;
}

const TerminalLoader = ({ onComplete }: TerminalLoaderProps) => {
  const [currentLine, setCurrentLine] = useState(0);
  
  const bootSequence = [
    "INITIALIZING SYSTEM...",
    "LOADING NEURAL NETWORKS...",
    "CONNECTING TO MATRIX...",
    "DECRYPTING FIREWALL...",
    "ACCESSING RONN.J DATABASE...",
    "COMPILING PORTFOLIO.EXE...",
    "SYSTEM READY. WELCOME TO THE MATRIX.",
    ""
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLine(prev => {
        if (prev >= bootSequence.length - 1) {
          clearInterval(timer);
          setTimeout(onComplete, 1000);
          return prev;
        }
        return prev + 1;
      });
    }, 400);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center">
        <motion.div
          className="text-6xl font-bold text-red-500 mb-8 glitch"
          animate={{
            textShadow: [
              '0 0 5px #ef4444',
              '0 0 10px #ef4444, 0 0 20px #ef4444',
              '0 0 5px #ef4444'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          RONN.J
        </motion.div>
        
        <div className="text-left space-y-2 min-h-[200px]">
          {bootSequence.slice(0, currentLine + 1).map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-green-400 text-sm"
            >
              <span className="text-cyan-400">$</span> {line}
              {index === currentLine && (
                <motion.span
                  className="inline-block w-2 h-4 bg-green-400 ml-1"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TerminalLoader;
