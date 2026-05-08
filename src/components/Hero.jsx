import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { personalDetails } from '../data';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Decor */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-secondary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-accent/10 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-secondary uppercase bg-secondary/10 rounded-full">
            Available for new opportunities
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            I'm <span className="gradient-text">{personalDetails.name}</span>
          </h1>
          
          <div className="text-2xl md:text-3xl text-slate-400 font-medium mb-8 h-12">
            <Typewriter
              options={{
                strings: [
                  'Full Stack Developer',
                  'Java Developer',
                  'React Developer',
                  'Spring Boot Expert'
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </div>
          
          <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-10 leading-relaxed">
            {personalDetails.summary}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#projects" className="btn-primary flex items-center group w-full sm:w-auto justify-center">
              View My Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </a>
            <button className="btn-outline flex items-center w-full sm:w-auto justify-center">
              <Download className="mr-2" size={18} />
              Download Resume
            </button>
          </div>
        </motion.div>
        
        {/* Profile Avatar / Initial */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 relative"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-3xl rotate-12 glass flex items-center justify-center overflow-hidden border-2 border-secondary/30">
            <div className="-rotate-12 text-4xl md:text-5xl font-bold text-white tracking-widest">
              BJ
            </div>
          </div>
          {/* Decorative circle */}
          <div className="absolute inset-0 w-32 h-32 md:w-40 md:h-40 mx-auto rounded-3xl border-2 border-accent/20 animate-pulse -z-10" style={{ transform: 'rotate(-12deg) scale(1.1)' }} />
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-secondary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
