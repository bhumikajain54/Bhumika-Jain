import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, User, ChevronRight, Sparkles, ArrowDown, Mail, Cpu, Terminal, Zap } from 'lucide-react';
import { FaGithub, FaLinkedin, FaJava, FaReact, FaServer, FaDatabase } from 'react-icons/fa';
import { personalDetails } from '../data';

const Welcome = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [activeTooltip, setActiveTooltip] = useState(null);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePos({ x, y });
  };

  const handleCodeClick = (e) => {
    const portfolioEl = document.getElementById('portfolio');
    if (portfolioEl) {
      portfolioEl.scrollIntoView({ behavior: 'smooth' });
    }

    // Trigger Tech Stack tab selection in Showcase section
    setTimeout(() => {
      const tabButtons = Array.from(document.querySelectorAll('#portfolio button'));
      const techStackBtn = tabButtons.find(btn => btn.textContent.toLowerCase().includes('tech stack'));
      if (techStackBtn) {
        techStackBtn.click();
      }
    }, 50);
  };

  const navItems = [
    { id: 'github', icon: <FaGithub size={20} />, label: 'GitHub Profile', href: personalDetails.github, external: true },
    { id: 'linkedin', icon: <FaLinkedin size={20} />, label: 'LinkedIn Profile', href: personalDetails.linkedin, external: true },
    { id: 'about', icon: <User size={22} />, label: 'About Bhumika', href: '#about', highlight: true },
    { id: 'skills', icon: <Code2 size={20} />, label: 'Tech Stack & Code', href: '#portfolio', onClick: handleCodeClick },
    { id: 'contact', icon: <Mail size={20} />, label: 'Contact Me', href: '#contact' },
  ];

  const floatingBadges = [
    {
      icon: <FaJava className="text-amber-400" size={18} />,
      text: "Java 21 Enterprise",
      pos: "top-[18%] left-[8%] lg:left-[12%]",
      delay: 0.6,
      floatY: [-8, 8, -8]
    },
    {
      icon: <Zap className="text-purple-400" size={18} />,
      text: "Spring Boot Microservices",
      pos: "top-[22%] right-[8%] lg:right-[12%]",
      delay: 0.8,
      floatY: [8, -8, 8]
    },
    {
      icon: <FaReact className="text-cyan-400 animate-spin-slow" size={18} />,
      text: "Modern React.js",
      pos: "bottom-[26%] left-[6%] lg:left-[10%]",
      delay: 1.0,
      floatY: [-6, 6, -6]
    },
    {
      icon: <FaDatabase className="text-blue-400" size={16} />,
      text: "MySQL & REST APIs",
      pos: "bottom-[24%] right-[6%] lg:right-[10%]",
      delay: 1.2,
      floatY: [6, -6, 6]
    }
  ];

  return (
    <div
      id="welcome"
      onMouseMove={handleMouseMove}
      className="h-screen w-full flex flex-col items-center justify-center bg-[#030014] relative overflow-hidden select-none"
    >
      {/* Dynamic Mouse Tracking Spotlight */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}% ${mousePos.y}%, rgba(112, 66, 248, 0.22), rgba(0, 210, 255, 0.08) 40%, transparent 80%)`
        }}
      />

      {/* Multi-Layer Ambient Background Spheres */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#7042f8]/25 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#00d2ff]/20 rounded-full blur-[140px]" />
        <div className="absolute top-[40%] right-[30%] w-[30%] h-[30%] bg-[#a855f7]/15 rounded-full blur-[160px]" />
      </div>

      {/* Tech Grid Pattern with Subtle Opacity */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.07] pointer-events-none" />

      {/* Rotating Background Orbital Rings */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <div className="w-[850px] h-[850px] border border-white/[0.03] rounded-full animate-spin-slow" />
        <div className="absolute w-[650px] h-[650px] border border-purple-500/[0.06] rounded-full animate-spin-slow [animation-direction:reverse]" />
        <div className="absolute w-[450px] h-[450px] border border-cyan-500/[0.04] rounded-full animate-spin-slow" />
      </div>

      {/* Floating Interactive Tech Badges (Desktop & Tablet) */}
      {floatingBadges.map((badge, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: badge.floatY
          }}
          transition={{
            opacity: { delay: badge.delay, duration: 0.6 },
            scale: { delay: badge.delay, duration: 0.6 },
            y: { duration: 4 + idx, repeat: Infinity, ease: "easeInOut" }
          }}
          className={`hidden md:flex absolute ${badge.pos} items-center gap-2 px-3.5 py-2 rounded-full bg-slate-900/70 backdrop-blur-xl border border-white/10 shadow-[0_8px_25px_rgba(0,0,0,0.4)] text-xs font-semibold text-slate-200 z-10 hover:border-secondary/50 transition-colors`}
        >
          {badge.icon}
          <span>{badge.text}</span>
        </motion.div>
      ))}

      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center"
      >
        {/* Floating Glass Dock Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative mb-8"
        >
          <div className="flex items-center gap-3 p-2 px-4 rounded-full bg-slate-900/75 backdrop-blur-2xl border border-white/15 shadow-[0_0_35px_rgba(112,66,248,0.25)]">
            {navItems.map((item) => (
              <div key={item.id} className="relative">
                <motion.a
                  href={item.href}
                  target={item.external ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  onClick={item.onClick}
                  onMouseEnter={() => setActiveTooltip(item.id)}
                  onMouseLeave={() => setActiveTooltip(null)}
                  whileHover={{ y: -4, scale: 1.12 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center justify-center rounded-full transition-all duration-300 ${item.highlight
                    ? 'w-13 h-13 bg-gradient-to-r from-secondary via-purple-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(112,66,248,0.6)] p-3'
                    : 'w-11 h-11 bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white hover:bg-white/[0.1] hover:border-secondary/40'
                    }`}
                >
                  {item.icon}
                </motion.a>

                {/* Animated Tooltip */}
                <AnimatePresence>
                  {activeTooltip === item.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.85 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 5, scale: 0.9 }}
                      transition={{ duration: 0.15 }}
                      className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-slate-900 text-white text-[11px] font-medium tracking-wide rounded-md border border-white/15 shadow-xl whitespace-nowrap pointer-events-none z-30"
                    >
                      {item.label}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45 border-r border-b border-white/15" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Status Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-indigo-500/10 border border-purple-400/30 text-cyan-300 shadow-[0_0_20px_rgba(168,85,247,0.2)] backdrop-blur-md mb-6 hover:border-cyan-400/50 transition-colors"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          <Sparkles size={13} className="text-secondary animate-spin-slow" />
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase bg-gradient-to-r from-white via-slate-200 to-cyan-200 bg-clip-text text-transparent">
            Full Stack Software Architect
          </span>
        </motion.div>

        {/* Main Hero Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="space-y-3 mb-6"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-none filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]">
            FULL STACK
          </h1>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none bg-gradient-to-r from-[#a855f7] via-[#7042f8] to-[#00d2ff] bg-clip-text text-transparent filter drop-shadow-[0_0_45px_rgba(112,66,248,0.75)] whitespace-nowrap">
            JAVA DEVELOPER
          </h1>
        </motion.div>

        {/* Sub-heading with Decorative Accent Lines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="flex flex-col items-center gap-3 max-w-2xl mx-auto mb-8"
        >
          <div className="flex items-center gap-4 w-full justify-center">
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-secondary/60" />
            <p className="text-slate-300 text-xs sm:text-sm md:text-base font-bold tracking-[0.2em] uppercase">
              Building Scalable Enterprise Solutions & Microservices
            </p>
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-secondary/60" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-0.5 text-xs text-slate-400 font-medium">
            <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-purple-300">Spring Boot</span>
            <span className="text-slate-600">•</span>
            <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-cyan-300">React.js</span>
            <span className="text-slate-600">•</span>
            <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-blue-300">Microservices</span>
            <span className="text-slate-600">•</span>
            <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-emerald-300">REST APIs</span>
          </div>
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-8"
        >
          <a
            href="#hero"
            className="group relative inline-flex items-center gap-3 px-9 py-4 bg-gradient-to-r from-[#7042f8] via-[#8b5cf6] to-[#00d2ff] text-white font-extrabold tracking-widest uppercase rounded-full shadow-[0_0_35px_rgba(112,66,248,0.55)] hover:shadow-[0_0_55px_rgba(0,212,255,0.75)] transition-all duration-300 transform hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10 text-sm">Start Exploring</span>
            <ChevronRight className="relative z-10 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </a>

        </motion.div>
      </motion.div>

      {/* Decorative Star Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(35)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full"
            style={{
              top: `${Math.floor((i * 137.5) % 100)}%`,
              left: `${Math.floor((i * 269.3) % 100)}%`,
            }}
            animate={{
              opacity: [0.15, 0.85, 0.15],
              scale: [1, 1.8, 1]
            }}
            transition={{
              duration: 2.5 + (i % 5),
              repeat: Infinity,
              delay: (i % 7) * 0.5
            }}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-400 text-[10px] font-semibold tracking-[0.25em] uppercase pointer-events-none z-20"
      >
        <span>Scroll Down</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-slate-500/40 flex items-start justify-center p-1 backdrop-blur-sm"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 bg-gradient-to-b from-secondary to-cyan-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Welcome;

