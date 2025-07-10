
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed w-6 h-6 border-2 border-cyan-400 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
        animate={{
          scale: isClicking ? 2 : 1,
          borderColor: isClicking ? '#ef4444' : '#22d3ee',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />
      
      <motion.div
        className="fixed w-1 h-1 bg-red-500 rounded-full pointer-events-none z-50"
        style={{
          left: mousePosition.x - 2,
          top: mousePosition.y - 2,
        }}
        animate={{
          boxShadow: isClicking 
            ? '0 0 20px #ef4444, 0 0 40px #ef4444, 0 0 60px #ef4444'
            : '0 0 10px #ef4444, 0 0 20px #ef4444',
        }}
      />
      
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed w-8 h-8 border border-green-400 rounded-full pointer-events-none z-40 opacity-30"
          style={{
            left: mousePosition.x - 16,
            top: mousePosition.y - 16,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
