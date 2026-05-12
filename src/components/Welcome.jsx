import React from 'react';
import { motion } from 'framer-motion';
import { Code2, User, ChevronRight, Sparkles } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { personalDetails } from '../data';

const Welcome = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#030014] relative overflow-hidden">
      {/* Immersive Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/20 rounded-full blur-[120px]" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="z-10 text-center px-6"
      >
        {/* Floating Icon Group */}
        <div className="flex items-center justify-center gap-4 mb-10">
          {[
            { icon: <FaGithub size={20} />, href: personalDetails.github, delay: 0.2 },
            { icon: <User size={24} />, href: "#about", delay: 0.3, large: true },
            { icon: <Code2 size={20} />, href: "#skills", delay: 0.4 }
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target={item.href.startsWith('http') ? "_blank" : "_self"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.1 }}
              transition={{ delay: item.delay, type: 'spring', stiffness: 300 }}
              className={`flex items-center justify-center rounded-full bg-white/[0.03] backdrop-blur-xl border-none shadow-2xl text-secondary hover:text-white transition-all ${item.large ? 'w-16 h-16 scale-110' : 'w-12 h-12'}`}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-white/5 mb-4">
            <Sparkles size={12} className="text-secondary" />
            <span className="text-[10px] font-black tracking-[0.3em] text-secondary uppercase">Welcome to the future</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white leading-none">
            FULL STACK <br />
            <span className="gradient-text glow-text">JAVA DEVELOPER</span>
          </h1>
          
          <p className="text-slate-500 text-sm md:text-lg font-medium tracking-[0.2em] uppercase max-w-lg mx-auto pt-4">
            Building Scalable Enterprise Solutions
          </p>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16"
        >
          <a
            href="#hero"
            className="group relative inline-flex items-center gap-3 px-10 py-4 bg-secondary text-white font-black tracking-widest uppercase rounded-full hover:shadow-[0_0_40px_rgba(112,66,248,0.4)] transition-all overflow-hidden"
          >
            <span className="relative z-10">Start Exploring</span>
            <ChevronRight className="relative z-10 group-hover:translate-x-2 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </a>
        </motion.div>

      </motion.div>

      {/* Decorative Stars Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[1px] h-[1px] bg-white rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: Math.random() * 0.3
            }}
            animate={{
              opacity: [0.1, 0.6, 0.1],
              scale: [1, 2, 1]
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 10
            }}
          />
        ))}
      </div>

      {/* Animated Orbitals */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border border-white/[0.02] rounded-full animate-spin-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/[0.01] rounded-full animate-spin-slow [animation-direction:reverse]" />
      </div>
    </div>
  );
};

export default Welcome;
