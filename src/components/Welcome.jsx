import React from 'react';
import { motion } from 'framer-motion';
import { Code2, User } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { personalDetails } from '../data';

const Welcome = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-primary relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center"
      >
        <div className="flex items-center justify-center gap-6 mb-12">
          <motion.a
            href="#skills"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="w-12 h-12 rounded-full glass flex items-center justify-center text-secondary shadow-lg shadow-secondary/20 cursor-pointer"
          >
            <Code2 size={24} />
          </motion.a>
          <motion.a
            href="#about"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.2, y: -5 }}
            transition={{ delay: 0.3, type: 'spring' }}
            className="w-14 h-14 rounded-full glass flex items-center justify-center text-secondary shadow-xl shadow-secondary/30 scale-110 cursor-pointer"
          >
            <User size={28} />
          </motion.a>
          <motion.a
            href={personalDetails.github}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ delay: 0.4, type: 'spring' }}
            className="w-12 h-12 rounded-full glass flex items-center justify-center text-secondary shadow-lg shadow-secondary/20 cursor-pointer"
          >
            <FaGithub size={24} />
          </motion.a>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-white">
          Welcome To My
        </h1>
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter gradient-text glow-text px-4 mb-12">
          Portfolio Website
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <a href="#hero" className="btn-primary px-8 py-4 text-lg">
            Explore Portfolio
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 text-secondary/60 font-medium tracking-widest text-sm"
        >
          www.bhumikajain.dev
        </motion.div>
      </motion.div>

      {/* Animated stars/particles in background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5
            }}
            animate={{ 
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{ 
              duration: 2 + Math.random() * 3, 
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Welcome;
