import React from 'react';
import resumePDF from '../assets/Bhumika.pdf';
import { motion } from 'framer-motion';
import { personalDetails, projects } from '../data';
import { Code, Award, Calendar, ExternalLink } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Code size={24} />, count: "11", label: "TOTAL PROJECTS", sub: "Innovative web solutions crafted" },
    { icon: <Award size={24} />, count: "7", label: "CERTIFICATES", sub: "Professional skills validated" },
    { icon: <Calendar size={24} />, count: "3", label: "YEARS OF EXPERIENCE", sub: "Continuous learning journey" },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About <span className="text-secondary">Me</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 font-medium tracking-widest text-sm flex items-center justify-center gap-2"
          >
            <span className="w-4 h-[1px] bg-secondary" />
            TRANSFORMING IDEAS INTO DIGITAL EXPERIENCES
            <span className="w-4 h-[1px] bg-secondary" />
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
              Hello, I'm <br />
              <span className="gradient-text">{personalDetails.name}</span>
            </h3>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-xl">
              {personalDetails.summary || "A dedicated developer focused on creating impactful digital experiences. I specialize in building responsive, high-performance web applications with a focus on clean code and user-centric design."}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={resumePDF} download="Bhumika_Jain_CV.pdf" className="btn-primary">Download CV</a>
              <a href="#projects" className="btn-outline flex items-center gap-2">
                View Projects <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-secondary/20 relative z-10 glass">
                <div className="w-full h-full bg-gradient-to-tr from-secondary/20 to-primary flex items-center justify-center">
                  <div className="text-6xl font-black text-white/10 select-none">BJ</div>
                </div>
              </div>
              {/* Glow effects around profile */}
              <div className="absolute inset-0 bg-secondary/30 rounded-full blur-[60px] -z-10 animate-pulse" />
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl group card-hover relative overflow-hidden"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-4xl font-black text-white tracking-tighter">
                  {stat.count}
                </div>
              </div>
              <h4 className="text-xs font-bold tracking-[0.2em] text-slate-500 mb-2 uppercase">{stat.label}</h4>
              <p className="text-slate-400 text-xs font-medium">{stat.sub}</p>
              
              {/* Hover highlight */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-[#00d2ff] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
};

export default About;
