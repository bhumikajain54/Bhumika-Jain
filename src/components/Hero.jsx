import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalDetails } from '../data';
import { ArrowRight, Sparkles, Code2, Zap, Terminal } from 'lucide-react';
import { FaJava, FaReact, FaDatabase } from 'react-icons/fa';
import heroGraphic from '../assets/hero-graphic.png';

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePos({ x, y });
  };

  const techStack = [
    { name: 'Java', icon: <FaJava className="text-amber-400" size={16} /> },
    { name: 'Spring Boot', icon: <Zap className="text-purple-400" size={16} /> },
    { name: 'Angular', icon: <Code2 className="text-red-400" size={16} /> },
    { name: 'React', icon: <FaReact className="text-cyan-400 animate-spin-slow" size={16} /> },
    { name: 'Javascript', icon: <Terminal className="text-yellow-400" size={16} /> },
    { name: 'MySQL', icon: <FaDatabase className="text-blue-400" size={15} /> },
  ];

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="min-h-screen flex items-center relative overflow-hidden pt-24 pb-16 bg-[#030014] select-none"
    >
      {/* Dynamic Mouse Spotlight */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(750px circle at ${mousePos.x}% ${mousePos.y}%, rgba(112, 66, 248, 0.2), rgba(0, 210, 255, 0.08) 40%, transparent 80%)`
        }}
      />

      {/* Multi-Layer Ambient Background Spheres */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] right-[-5%] w-[45%] h-[45%] bg-[#7042f8]/25 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-[5%] left-[-5%] w-[45%] h-[45%] bg-[#00d2ff]/20 rounded-full blur-[140px]" />
        <div className="absolute top-[40%] left-[35%] w-[30%] h-[30%] bg-[#a855f7]/15 rounded-full blur-[160px]" />
      </div>

      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.06] pointer-events-none" />

      {/* Decorative Star Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full"
            style={{
              top: `${Math.floor((i * 147.3) % 100)}%`,
              left: `${Math.floor((i * 281.7) % 100)}%`,
            }}
            animate={{
              opacity: [0.15, 0.8, 0.15],
              scale: [1, 1.6, 1]
            }}
            transition={{
              duration: 3 + (i % 4),
              repeat: Infinity,
              delay: (i % 5) * 0.6
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center z-10 w-full">
        {/* Left Column Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start"
        >
          {/* Status Badge Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-indigo-500/10 border border-purple-400/30 text-cyan-300 shadow-[0_0_20px_rgba(168,85,247,0.2)] backdrop-blur-md mb-6"
          >
            <Sparkles size={13} className="text-secondary animate-spin-slow" />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase bg-gradient-to-r from-white via-slate-200 to-cyan-200 bg-clip-text text-transparent">
              Enterprise Backend & Architecture
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-5xl md:text-7xl font-black mb-4 leading-[1.1] tracking-tight filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
          >
            <span className="block text-white">Full Stack</span>
            <span className="bg-gradient-to-r from-[#a855f7] via-[#7042f8] to-[#00d2ff] bg-clip-text text-transparent filter drop-shadow-[0_0_40px_rgba(112,66,248,0.7)]">
              Java Developer
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-2xl text-slate-300 font-bold tracking-wide mb-6 leading-relaxed"
          >
            Enterprise Solutions &{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Backend Architecture |
            </span>
          </motion.h2>

          {/* Summary Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-lg text-base md:text-lg text-slate-300/90 mb-8 leading-relaxed font-normal"
          >
            {personalDetails.summary || "Creating innovative, functional, and user-friendly websites for digital solutions."}
          </motion.p>

          {/* Tech Stack Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-2.5 mb-10"
          >
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/60 backdrop-blur-xl border border-white/10 text-xs md:text-sm font-semibold text-slate-200 hover:border-cyan-400/50 hover:text-white shadow-lg hover:shadow-[0_0_20px_rgba(0,210,255,0.25)] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                {tech.icon}
                <span>{tech.name}</span>
              </span>
            ))}
          </motion.div>

          {/* Call to Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex items-center gap-6"
          >
            <a
              href="#portfolio"
              className="group relative inline-flex items-center gap-3 px-9 py-4 bg-gradient-to-r from-[#7042f8] via-[#8b5cf6] to-[#00d2ff] text-white font-extrabold tracking-widest uppercase rounded-full shadow-[0_0_35px_rgba(112,66,248,0.55)] hover:shadow-[0_0_55px_rgba(0,212,255,0.75)] transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 text-sm">Projects</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column Graphic Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative hidden lg:block"
        >
          {/* Orbital Glow Ring Behind Image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] rounded-full border border-purple-500/20 animate-spin-slow pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-gradient-to-r from-[#7042f8]/20 via-[#a855f7]/15 to-[#00d2ff]/20 rounded-full blur-[120px] -z-10 pointer-events-none" />

          {/* Graphic Container with Glass Styling */}
          <div className="relative z-10 p-3 rounded-3xl bg-slate-900/50 backdrop-blur-2xl border border-white/15 shadow-[0_0_60px_rgba(112,66,248,0.35)] hover:border-cyan-400/40 transition-colors duration-500 group">
            <img
              src={heroGraphic}
              alt="Developer Illustration"
              className="w-full h-auto rounded-2xl drop-shadow-[0_0_50px_rgba(112,66,248,0.4)] animate-float"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;



