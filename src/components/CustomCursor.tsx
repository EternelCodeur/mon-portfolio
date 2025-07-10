
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    let trailId = 0;

    const updateMousePosition = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setMousePosition(newPosition);
      
      // Add to trail for red smoke effect
      setTrail(prev => {
        const newTrail = [...prev, { ...newPosition, id: trailId++ }];
        return newTrail.slice(-20); // Keep more positions for better smoke effect
      });
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
      {/* Main cursor */}
      <motion.div
        className="fixed w-6 h-6 border-2 border-red-500 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
        animate={{
          scale: isClicking ? 2 : 1,
          borderColor: isClicking ? '#ef4444' : '#dc2626',
        }}
        transition={{ type: 'spring', stiffness: 800, damping: 20 }}
      />
      
      {/* Center dot */}
      <motion.div
        className="fixed w-2 h-2 bg-red-600 rounded-full pointer-events-none z-50"
        style={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
        }}
        animate={{
          boxShadow: isClicking 
            ? '0 0 20px #ef4444, 0 0 40px #ef4444, 0 0 60px #ef4444'
            : '0 0 10px #ef4444, 0 0 20px #ef4444',
        }}
        transition={{ type: 'spring', stiffness: 800, damping: 20 }}
      />
      
      {/* Red smoke trail */}
      {trail.map((pos, index) => (
        <motion.div
          key={pos.id}
          className="fixed pointer-events-none z-40 rounded-full blur-sm"
          style={{
            left: pos.x - 8,
            top: pos.y - 8,
          }}
          initial={{
            width: 16,
            height: 16,
            opacity: 0.8,
            scale: 1,
            backgroundColor: '#ef4444',
          }}
          animate={{
            width: 32,
            height: 32,
            opacity: 0,
            scale: 2,
            backgroundColor: '#dc2626',
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut"
          }}
        />
      ))}

      {/* Pulsing rings */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed w-12 h-12 border border-red-400 rounded-full pointer-events-none z-40 opacity-30"
          style={{
            left: mousePosition.x - 24,
            top: mousePosition.y - 24,
          }}
          animate={{
            scale: [1, 2, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut"
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
