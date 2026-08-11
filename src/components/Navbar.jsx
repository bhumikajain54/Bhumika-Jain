import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Sparkles, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const isClickingRef = useRef(false);
  const clickTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const welcomeHeight = window.innerHeight * 0.1;
      setIsVisible(window.scrollY > welcomeHeight);
      setScrolled(window.scrollY > 20);

      // Do not override active section during smooth scrolling triggered by nav click
      if (isClickingRef.current) return;

      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      // Force 'contact' active if scrolled near page bottom
      if (window.scrollY + windowHeight >= fullHeight - 80) {
        setActiveSection('contact');
        return;
      }

      // Check section offset positions from bottom to top
      const contactEl = document.getElementById('contact');
      const portfolioEl = document.getElementById('portfolio');
      const experienceEl = document.getElementById('experience');
      const aboutEl = document.getElementById('about');

      const scrollCheck = window.scrollY + windowHeight * 0.4;

      if (contactEl && scrollCheck >= contactEl.offsetTop - 50) {
        setActiveSection('contact');
      } else if (portfolioEl && scrollCheck >= portfolioEl.offsetTop - 50) {
        setActiveSection('portfolio');
      } else if (experienceEl && scrollCheck >= experienceEl.offsetTop - 50) {
        setActiveSection('experience');
      } else if (aboutEl && scrollCheck >= aboutEl.offsetTop - 50) {
        setActiveSection('about');
      } else {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setActiveSection(id);
    if (isOpen) setIsOpen(false);

    // Lock scroll spy for 1000ms while smooth scrolling to target section
    isClickingRef.current = true;
    if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    clickTimeoutRef.current = setTimeout(() => {
      isClickingRef.current = false;
    }, 1000);
  };

  const navLinks = [
    { name: 'Home', href: '#', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 25,
            mass: 1
          }}
          className={`fixed w-full z-50 transition-all duration-500 select-none ${
            scrolled
              ? 'bg-slate-900/85 backdrop-blur-2xl py-3.5 border-b border-white/15 shadow-[0_10px_35px_rgba(0,0,0,0.5)]'
              : 'bg-transparent py-6'
          }`}
        >
          {/* Top Subtle Neon Glow Bar */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#7042f8] via-[#8b5cf6] to-[#00d2ff] opacity-80" />

          <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center relative z-10">
            {/* Logo Badge */}
            <motion.a
              href="#"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(112,66,248,0.35)] group-hover:scale-105 transition-all">
                <span className="text-xl font-black bg-gradient-to-r from-[#a855f7] via-[#7042f8] to-[#00d2ff] bg-clip-text text-transparent">
                  BJ
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-white tracking-wide group-hover:text-cyan-300 transition-colors">
                  Bhumika Jain
                </span>
                <span className="text-[9px] font-black tracking-[0.2em] text-cyan-300 uppercase flex items-center gap-1">
                  <Code2 size={10} className="text-purple-400" /> Java Full Stack
                </span>
              </div>
            </motion.a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center p-1 bg-slate-800/60 backdrop-blur-md rounded-2xl border border-white/10 shadow-inner space-x-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => handleNavClick(link.id)}
                    className={`px-5 py-2 rounded-xl text-xs font-bold tracking-widest uppercase transition-all duration-300 relative ${
                      isActive
                        ? 'text-white bg-gradient-to-r from-purple-500/25 to-cyan-500/25 border border-cyan-400/40 shadow-[0_0_15px_rgba(0,210,255,0.25)]'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className={isActive ? 'text-cyan-300' : ''}>{link.name}</span>
                  </a>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-10 h-10 rounded-xl bg-slate-800/80 border border-white/15 flex items-center justify-center text-white hover:text-cyan-300 transition-colors shadow-md"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-slate-900/95 backdrop-blur-2xl border-b border-white/15 shadow-2xl"
              >
                <div className="flex flex-col p-6 space-y-3">
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.id;
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={() => handleNavClick(link.id)}
                        className={`p-3.5 rounded-xl text-sm font-bold tracking-wider uppercase transition-all flex items-center justify-between ${
                          isActive
                            ? 'bg-gradient-to-r from-[#7042f8]/20 to-[#00d2ff]/20 text-cyan-300 border border-cyan-400/30'
                            : 'text-slate-300 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <span>{link.name}</span>
                        {isActive && <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />}
                      </a>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;

