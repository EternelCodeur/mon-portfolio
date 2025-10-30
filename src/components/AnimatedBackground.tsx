import React, { HTMLAttributes } from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';

interface AnimatedBackgroundProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const AnimatedBackground = ({ children, className = '', ...props }: AnimatedBackgroundProps) => {
  return (
    <div className={`relative min-h-screen ${className}`} {...props}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-50"></div>
      <ParticleBackground />
      
      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};

export default AnimatedBackground;
