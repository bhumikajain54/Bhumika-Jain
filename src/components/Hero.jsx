import React from 'react';
import { motion } from 'framer-motion';
import { personalDetails } from '../data';
import { ArrowRight, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import heroGraphic from '../assets/hero-graphic.png';

const Hero = () => {
  const techStack = ['Java', 'Spring Boot', 'React', 'Javascript', 'MySQL', 'Tailwind'];

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-semibold tracking-widest text-secondary uppercase bg-secondary/10 rounded-full border border-secondary/20 backdrop-blur-md"
          >
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            Ready to innovate
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-black mb-4 leading-[1.1]">
            <span className="block text-white">Full Stack</span>
            <span className="gradient-text glow-text">Java Developer</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-slate-300 font-medium mb-6">
            Network & <span className="text-secondary">Telecom |</span>
          </h2>

          <p className="max-w-lg text-lg text-slate-400 mb-10 leading-relaxed">
            {personalDetails.summary || "Creating innovative, functional, and user-friendly websites for digital solutions."}
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            {techStack.map((tech, index) => (
              <span key={index} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-slate-300 hover:border-secondary/50 transition-colors">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-6 mb-12">
            <a href="#projects" className="btn-primary flex items-center group">
              Projects
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </a>
            <a href="#contact" className="btn-outline flex items-center">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-6">
            <motion.a 
              href={personalDetails.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              className="text-slate-500 hover:text-secondary transition-colors"
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a 
              href={personalDetails.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              className="text-slate-500 hover:text-secondary transition-colors"
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a 
              href={`mailto:${personalDetails.email}`}
              whileHover={{ y: -5, scale: 1.1 }}
              className="text-slate-500 hover:text-secondary transition-colors"
            >
              <Mail size={24} />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 w-full h-auto">
            <img
              src={heroGraphic}
              alt="Developer Illustration"
              className="w-full h-auto drop-shadow-[0_0_50px_rgba(112,66,248,0.3)] animate-float"
            />
          </div>
          {/* Decorative glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-secondary/10 rounded-full blur-[100px] -z-10" />
        </motion.div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00d2ff]/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};

export default Hero;


