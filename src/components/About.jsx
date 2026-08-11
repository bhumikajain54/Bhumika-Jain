import React, { useState } from 'react';
import resumePDF from '../assets/Bhumika.pdf';
import profileImg from '../assets/profile.jpg';
import { motion } from 'framer-motion';
import { personalDetails, projects, certifications, experience } from '../data';
import { Code, Award, Calendar, ExternalLink, Sparkles, Download } from 'lucide-react';

const About = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePos({ x, y });
  };

  // Calculate years of experience dynamically from experience data
  const years = experience.map(exp => {
    const match = exp.period.match(/\b(20\d{2})\b/g);
    return match ? match.map(Number) : [];
  }).flat();
  const startYear = years.length > 0 ? Math.min(...years) : 2024;
  const currentYear = new Date().getFullYear();
  const yearsOfExp = currentYear - startYear;

  const stats = [
    {
      icon: <Code size={24} />,
      count: projects.length.toString(),
      label: "TOTAL PROJECTS",
      sub: "Robust full-stack applications"
    },
    {
      icon: <Award size={24} />,
      count: certifications.length.toString(),
      label: "CERTIFICATES",
      sub: "Enterprise technologies validated"
    },
    {
      icon: <Calendar size={24} />,
      count: yearsOfExp.toString() + "+",
      label: "YEARS OF EXPERIENCE",
      sub: "Spring ecosystem mastery"
    },
  ];

  return (
    <section
      id="about"
      onMouseMove={handleMouseMove}
      className="section-padding relative overflow-hidden bg-[#030014] select-none py-24"
    >
      {/* Dynamic Mouse Spotlight */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}% ${mousePos.y}%, rgba(112, 66, 248, 0.18), rgba(0, 210, 255, 0.07) 40%, transparent 80%)`
        }}
      />

      {/* Multi-Layer Ambient Background Spheres */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] bg-[#7042f8]/20 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] bg-[#00d2ff]/15 rounded-full blur-[140px]" />
        <div className="absolute top-[35%] right-[20%] w-[30%] h-[30%] bg-[#a855f7]/15 rounded-full blur-[160px]" />
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
              top: `${Math.floor((i * 157.1) % 100)}%`,
              left: `${Math.floor((i * 293.4) % 100)}%`,
            }}
            animate={{
              opacity: [0.15, 0.8, 0.15],
              scale: [1, 1.6, 1]
            }}
            transition={{
              duration: 3 + (i % 4),
              repeat: Infinity,
              delay: (i % 5) * 0.5
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-indigo-500/10 border border-purple-400/30 text-cyan-300 shadow-[0_0_20px_rgba(168,85,247,0.2)] backdrop-blur-md mb-4"
          >
            <Sparkles size={13} className="text-secondary animate-spin-slow" />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase bg-gradient-to-r from-white via-slate-200 to-cyan-200 bg-clip-text text-transparent">
              Architecting Scalable Enterprise Java Solutions
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tight text-white leading-tight filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
          >
            About{' '}
            <span className="bg-gradient-to-r from-[#a855f7] via-[#7042f8] to-[#00d2ff] bg-clip-text text-transparent filter drop-shadow-[0_0_40px_rgba(112,66,248,0.75)]">
              Me
            </span>
          </motion.h2>
        </div>

        {/* Content & Profile Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-start"
          >
            <h3 className="text-3xl md:text-5xl font-black mb-6 text-white leading-tight tracking-tight">
              Hello, I'm <br />
              <span className="bg-gradient-to-r from-[#a855f7] via-[#7042f8] to-[#00d2ff] bg-clip-text text-transparent filter drop-shadow-[0_0_35px_rgba(112,66,248,0.65)]">
                {personalDetails.name}
              </span>
            </h3>
            <p className="text-base md:text-lg text-slate-300/90 mb-10 leading-relaxed max-w-xl font-normal">
              {personalDetails.summary || "A dedicated developer focused on creating impactful digital experiences. I specialize in building responsive, high-performance web applications with a focus on clean code and user-centric design."}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={resumePDF}
                download="Bhumika_Jain_CV.pdf"
                className="group relative inline-flex items-center gap-3 px-8 py-3.5 bg-gradient-to-r from-[#7042f8] via-[#8b5cf6] to-[#00d2ff] text-white font-extrabold tracking-widest uppercase rounded-full shadow-[0_0_35px_rgba(112,66,248,0.55)] hover:shadow-[0_0_55px_rgba(0,212,255,0.75)] transition-all duration-300 transform hover:scale-105 overflow-hidden text-sm"
              >
                <Download size={16} className="relative z-10" />
                <span className="relative z-10">Download CV</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </a>

              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/[0.04] border border-white/15 text-slate-200 text-sm font-bold tracking-wider uppercase hover:bg-white/[0.1] hover:border-cyan-400/50 hover:text-white transition-all duration-300 backdrop-blur-xl"
              >
                <span>View Projects</span>
                <ExternalLink size={16} className="text-cyan-400" />
              </a>
            </div>
          </motion.div>

          {/* Right Column Profile Picture Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative group">
              {/* Orbital Glow Rings */}
              <div className="absolute -inset-6 bg-gradient-to-r from-[#7042f8]/40 via-[#a855f7]/40 to-[#00d2ff]/40 rounded-full blur-3xl opacity-40 group-hover:opacity-75 transition-opacity duration-700 animate-pulse pointer-events-none" />

              {/* Rotating Gradient Border Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#a855f7] via-[#7042f8] to-[#00d2ff] rounded-full animate-spin-slow opacity-80 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Profile Image Glass Container */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-white/20 relative z-10 bg-slate-900/80 backdrop-blur-xl shadow-[0_0_60px_rgba(112,66,248,0.4)]">
                <div className="w-full h-full flex items-center justify-center p-1 bg-slate-900/50 backdrop-blur-md">
                  <img
                    src={profileImg}
                    alt="Bhumika Jain"
                    className="w-full h-full rounded-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-105 contrast-105"
                  />
                </div>
              </div>

              {/* Floating Decorative Badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -right-3 px-3.5 py-2 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/15 shadow-2xl flex items-center gap-2 text-cyan-300 z-20 text-xs font-semibold"
              >
                <Award size={18} className="text-secondary" />
                <span>Certified</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-3 -left-3 px-3.5 py-2 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/15 shadow-2xl flex items-center gap-2 text-purple-300 z-20 text-xs font-semibold"
              >
                <Code size={18} className="text-cyan-400" />
                <span>Full Stack Java</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-slate-900/60 backdrop-blur-2xl p-8 rounded-3xl border border-white/15 group hover:border-cyan-400/50 hover:bg-slate-900/80 shadow-[0_10px_35px_rgba(0,0,0,0.4)] hover:shadow-[0_0_45px_rgba(112,66,248,0.35)] transition-all duration-500 relative overflow-hidden transform hover:-translate-y-1.5"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/30 flex items-center justify-center text-cyan-300 group-hover:scale-110 transition-transform shadow-inner">
                  {stat.icon}
                </div>
                <div className="text-5xl font-black bg-gradient-to-r from-white via-slate-100 to-cyan-200 bg-clip-text text-transparent filter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                  {stat.count}
                </div>
              </div>
              <h4 className="text-xs font-bold tracking-[0.2em] text-slate-400 mb-2 uppercase">{stat.label}</h4>
              <p className="text-slate-300 text-xs font-medium">{stat.sub}</p>

              {/* Hover Bottom Highlight Line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

