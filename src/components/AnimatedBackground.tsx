import React, { HTMLAttributes } from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';
import WhiteGrid from './WhiteGrid';

interface AnimatedBackgroundProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const AnimatedBackground = ({ children, className = '', ...props }: AnimatedBackgroundProps) => {
  return (
    <div className={`relative min-h-screen bg-gray-900 ${className}`} {...props}>
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 opacity-80"></div>
      
      {/* White grid background */}
      <WhiteGrid />
      
      {/* Particle effects */}
      <ParticleBackground />
      
      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};

export default AnimatedBackground;
