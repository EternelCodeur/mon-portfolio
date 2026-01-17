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
    <div className={`relative min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 ${className}`} {...props}>
      {/* Light gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-indigo-50 opacity-60"></div>
      
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
