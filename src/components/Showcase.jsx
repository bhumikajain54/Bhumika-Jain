import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, skills, certifications, achievements, education } from '../data';
import { ExternalLink, Layers, Code2, Award, CheckCircle, Smartphone, Globe, Shield, GraduationCap, ChevronDown, Server, Database, ShieldCheck, Wrench, Cloud, Cpu, Layout, Terminal, BookOpen, MapPin, Calendar, Sparkles, X, Users, Zap, TrendingUp } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Showcase = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePos({ x, y });
  };

  const tabs = [
    { id: 'projects', label: 'Projects', icon: <Layers size={18} /> },
    { id: 'certificates', label: 'Certificates', icon: <Award size={18} /> },
    { id: 'education', label: 'Education', icon: <GraduationCap size={18} /> },
    { id: 'skills', label: 'Tech Stack', icon: <Code2 size={18} /> },
  ];

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 6);
  const displayedCertificates = showAllCertificates ? certifications : certifications.slice(0, 6);

  return (
    <section
      id="portfolio"
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
        <div className="absolute top-[10%] left-[-5%] w-[45%] h-[45%] bg-[#7042f8]/20 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[45%] h-[45%] bg-[#00d2ff]/15 rounded-full blur-[140px]" />
        <div className="absolute top-[40%] right-[30%] w-[30%] h-[30%] bg-[#a855f7]/15 rounded-full blur-[160px]" />
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
              top: `${Math.floor((i * 173.3) % 100)}%`,
              left: `${Math.floor((i * 311.9) % 100)}%`,
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
              Enterprise Projects & Knowledge Base
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 leading-tight tracking-tight text-white filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
          >
            Portfolio{' '}
            <span className="bg-gradient-to-r from-[#a855f7] via-[#7042f8] to-[#00d2ff] bg-clip-text text-transparent filter drop-shadow-[0_0_40px_rgba(112,66,248,0.75)]">
              Showcase
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto text-slate-300/90 text-base sm:text-lg leading-relaxed font-normal"
          >
            Explore a curated collection of enterprise-grade projects, industry-standard certifications, and a deep-dive into my Java-centric tech stack.
          </motion.p>
        </div>

        {/* High-Tech Tab Switcher Dock */}
        <div className="flex justify-center mb-12 md:mb-16">
          <div className="grid grid-cols-2 md:flex p-1.5 bg-slate-900/80 backdrop-blur-2xl rounded-2xl border border-white/15 shadow-[0_0_35px_rgba(112,66,248,0.25)] w-full md:w-auto gap-1.5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center justify-center gap-2 px-3 md:px-7 py-3 md:py-3.5 rounded-xl text-xs md:text-sm font-bold tracking-widest uppercase transition-all duration-300 relative ${
                  activeTab === tab.id ? 'text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                <span className={activeTab === tab.id ? 'text-cyan-300' : 'text-slate-400'}>
                  {tab.icon}
                </span>
                <span>{tab.label}</span>
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-[#7042f8] via-[#8b5cf6] to-[#00d2ff] rounded-xl -z-10 shadow-[0_0_25px_rgba(112,66,248,0.6)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="min-h-[600px]">
          <AnimatePresence mode="wait">
            {activeTab === 'projects' && (
              <motion.div
                key="projects"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {displayedProjects.map((project, idx) => (
                    <motion.div
                      key={idx}
                      layout
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: idx * 0.08 }}
                      className="group rounded-[2.5rem] bg-slate-900/60 backdrop-blur-2xl border border-white/15 hover:border-cyan-400/50 hover:bg-slate-900/80 shadow-[0_10px_35px_rgba(0,0,0,0.4)] hover:shadow-[0_0_45px_rgba(112,66,248,0.35)] transition-all duration-500 overflow-hidden transform hover:-translate-y-1.5 flex flex-col justify-between"
                    >
                      <div>
                        <div className="aspect-video relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 opacity-70" />
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-85"
                          />
                          <div className="absolute top-5 left-5 z-20 flex flex-wrap gap-2">
                            {project.tech.slice(0, 2).map((t, i) => (
                              <span key={i} className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 bg-slate-900/80 text-cyan-300 rounded-full border border-cyan-400/40 backdrop-blur-md shadow-sm">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="p-8 relative z-20">
                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors leading-snug">{project.title}</h3>
                          <p className="text-sm text-slate-300/80 line-clamp-2 mb-6 leading-relaxed font-normal">
                            {project.features[0]}
                          </p>

                          <div className="flex items-center justify-between pt-6 border-t border-white/10">
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center text-xs font-bold text-slate-300 hover:text-cyan-300 transition-colors gap-1">
                              Live Demo <ExternalLink size={14} className="text-cyan-400" />
                            </a>
                            <button
                              onClick={() => setSelectedProject(project)}
                              className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-cyan-300 text-xs font-bold border border-purple-500/30 hover:bg-gradient-to-r hover:from-[#7042f8] hover:to-[#00d2ff] hover:text-white transition-all shadow-md"
                            >
                              Details →
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Hover Accent */}
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    </motion.div>
                  ))}
                </div>

                {/* See More Button */}
                {projects.length > 6 && (
                  <motion.div
                    layout
                    className="mt-12 flex justify-start"
                  >
                    <button
                      onClick={() => setShowAllProjects(!showAllProjects)}
                      className="group flex items-center gap-2 px-7 py-3.5 rounded-full bg-slate-900/80 border border-white/15 text-slate-300 hover:text-white hover:border-cyan-400/50 hover:bg-slate-900 transition-all duration-300 font-bold text-xs tracking-widest uppercase shadow-lg"
                    >
                      <span>{showAllProjects ? 'See Less' : 'See More'}</span>
                      <motion.div
                        animate={{ rotate: showAllProjects ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={18} className="text-cyan-400" />
                      </motion.div>
                    </button>
                  </motion.div>
                )}
              </motion.div>
            )}

            {activeTab === 'certificates' && (
              <motion.div
                key="certificates"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-16"
              >
                <div>
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/30 flex items-center justify-center text-cyan-300 shadow-[0_0_20px_rgba(112,66,248,0.2)]">
                      <Shield size={24} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-black text-white tracking-tight">Professional Certifications</h3>
                      <p className="text-slate-300/80 text-xs sm:text-sm">Verified credentials from accredited enterprise IT education institutes</p>
                    </div>
                  </div>

                  {/* Grid for All Certificates */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {displayedCertificates.map((cert, idx) => (
                      <motion.div
                        key={idx}
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        onClick={() => setSelectedCertificate(cert)}
                        className="group cursor-pointer p-4 sm:p-5 rounded-[2rem] bg-slate-900/60 backdrop-blur-2xl border border-white/15 hover:border-cyan-400/50 transition-all duration-500 overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.4)] hover:shadow-[0_0_45px_rgba(112,66,248,0.35)] relative flex flex-col justify-between transform hover:-translate-y-1.5"
                      >
                        <div>
                          <div className="aspect-[16/11] relative overflow-hidden rounded-2xl bg-white p-1.5 border border-white/10 shadow-md group-hover:shadow-cyan-400/20 transition-all mb-4 flex items-center justify-center">
                            <img
                              src={cert.image}
                              alt={cert.title}
                              className="w-full h-full object-contain rounded-xl transition-transform duration-500 group-hover:scale-105"
                            />

                            {/* Hover Action Overlay */}
                            <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center rounded-2xl">
                              <span className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#7042f8] to-[#00d2ff] text-white text-xs font-bold shadow-lg uppercase tracking-wider flex items-center gap-1.5">
                                Preview Credential →
                              </span>
                            </div>
                          </div>

                          <h4 className="text-base sm:text-lg font-bold text-white leading-snug group-hover:text-cyan-300 transition-colors mb-2 line-clamp-2">
                            {cert.title}
                          </h4>
                        </div>

                        {/* Verified Footer Tag */}
                        <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Shield size={12} className="text-cyan-400" />
                            <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                              ITVedant Verified
                            </span>
                          </div>
                          <span className="text-xs text-cyan-300 font-bold group-hover:translate-x-1 transition-transform">
                            →
                          </span>
                        </div>

                        {/* Bottom Hover Accent */}
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                      </motion.div>
                    ))}
                  </div>

                  {/* See More Certificates Button */}
                  {certifications.length > 6 && (
                    <motion.div
                      layout
                      className="mt-12 flex justify-start"
                    >
                      <button
                        onClick={() => setShowAllCertificates(!showAllCertificates)}
                        className="group flex items-center gap-2 px-7 py-3.5 rounded-full bg-slate-900/80 border border-white/15 text-slate-300 hover:text-white hover:border-cyan-400/50 hover:bg-slate-900 transition-all duration-300 font-bold text-xs tracking-widest uppercase shadow-lg"
                      >
                        <span>{showAllCertificates ? 'See Less' : 'See More'}</span>
                        <motion.div
                          animate={{ rotate: showAllCertificates ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown size={18} className="text-cyan-400" />
                        </motion.div>
                      </button>
                    </motion.div>
                  )}
                </div>

                {/* Achievements Section */}
                <div className="pt-8">
                  <div className="flex items-center justify-between flex-wrap gap-4 mb-10">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/30 flex items-center justify-center text-cyan-300 shadow-[0_0_20px_rgba(112,66,248,0.2)]">
                        <Award size={24} />
                      </div>
                      <div>
                        <h3 className="text-3xl font-black text-white tracking-tight">Key Achievements & Impact</h3>
                        <p className="text-slate-300/80 text-xs sm:text-sm">Measurable engineering milestones and performance metrics</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {achievements.map((ach, idx) => {
                      const getAchievementDetails = (text, i) => {
                        if (text.includes('30+')) {
                          return {
                            stat: '30+',
                            label: 'APIs Delivered',
                            category: 'API Engineering',
                            icon: <Code2 size={24} />,
                          };
                        }
                        if (text.includes('5,000+')) {
                          return {
                            stat: '5K+',
                            label: 'Platform Users',
                            category: 'User Scale & Reach',
                            icon: <Users size={24} />,
                          };
                        }
                        if (text.includes('50%')) {
                          return {
                            stat: '50%',
                            label: 'Effort Reduction',
                            category: 'Workflow Automation',
                            icon: <Sparkles size={24} />,
                          };
                        }
                        if (text.includes('25%')) {
                          return {
                            stat: '25%',
                            label: 'Speed Boost',
                            category: 'Query Optimization',
                            icon: <Zap size={24} />,
                          };
                        }
                        return {
                          stat: `0${i + 1}`,
                          label: 'Engineering Honor',
                          category: 'Milestone',
                          icon: <Award size={24} />,
                        };
                      };

                      const meta = getAchievementDetails(ach, idx);

                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.08 }}
                          className="p-6 sm:p-8 rounded-[2.5rem] bg-slate-900/60 backdrop-blur-2xl border border-white/15 hover:border-cyan-400/50 transition-all duration-500 relative overflow-hidden flex flex-col justify-between group shadow-[0_10px_35px_rgba(0,0,0,0.4)] hover:shadow-[0_0_45px_rgba(112,66,248,0.35)] transform hover:-translate-y-1.5"
                        >
                          <div className="relative z-10 space-y-6">
                            <div className="flex items-center justify-between gap-3">
                              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/30 flex items-center justify-center text-cyan-300 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-cyan-400 group-hover:text-white transition-all duration-500 shadow-inner">
                                {meta.icon}
                              </div>
                              <span className="text-[10px] font-black tracking-widest text-slate-300 uppercase px-3 py-1 bg-white/5 rounded-full border border-white/10">
                                {meta.category}
                              </span>
                            </div>

                            <div>
                              <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-white via-slate-100 to-cyan-200 bg-clip-text text-transparent filter drop-shadow-[0_0_20px_rgba(112,66,248,0.6)] tracking-tight mb-2">
                                {meta.stat}
                              </div>
                              <p className="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed group-hover:text-white transition-colors">
                                {ach}
                              </p>
                            </div>
                          </div>

                          <div className="relative z-10 pt-4 mt-4 border-t border-white/10">
                            <span className="text-[10px] font-bold tracking-widest text-cyan-300 uppercase flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                              {meta.label}
                            </span>
                          </div>

                          {/* Bottom Hover Accent */}
                          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'education' && (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="max-w-6xl mx-auto"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                  {education.map((edu, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="p-6 sm:p-8 rounded-[2.5rem] bg-slate-900/60 backdrop-blur-2xl border border-white/15 hover:border-cyan-400/50 transition-all duration-500 relative overflow-hidden flex flex-col justify-between group shadow-[0_10px_35px_rgba(0,0,0,0.4)] hover:shadow-[0_0_45px_rgba(112,66,248,0.35)] transform hover:-translate-y-1.5"
                    >
                      <div className="absolute -top-4 -right-4 opacity-5 group-hover:opacity-15 group-hover:scale-110 transition-all duration-500 text-cyan-400 pointer-events-none">
                        <GraduationCap size={140} />
                      </div>

                      <div className="relative z-10 space-y-6">
                        <div className="flex items-center justify-between gap-3">
                          <div className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-cyan-300 text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5">
                            <BookOpen size={12} />
                            <span>{edu.type || 'Degree'}</span>
                          </div>

                          <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-[11px] font-bold tracking-wider flex items-center gap-1.5">
                            <Calendar size={12} className="text-secondary" />
                            <span>{edu.period}</span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/30 flex items-center justify-center text-cyan-300 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-cyan-400 group-hover:text-white transition-all duration-500 shadow-inner mb-4">
                            <GraduationCap size={24} />
                          </div>

                          <h3 className="text-xl sm:text-2xl font-black text-white leading-snug group-hover:text-cyan-300 transition-colors">
                            {edu.degree}
                          </h3>

                          <p className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-bold text-sm tracking-wide flex items-center gap-1.5 pt-1">
                            {edu.institution}
                          </p>

                          {edu.location && (
                            <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                              <MapPin size={12} className="text-slate-400 shrink-0" />
                              <span>{edu.location}</span>
                            </div>
                          )}
                        </div>

                        {edu.highlights && edu.highlights.length > 0 && (
                          <div className="space-y-2.5 pt-4 border-t border-white/10">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                              Key Focus Areas
                            </span>
                            <div className="space-y-2">
                              {edu.highlights.map((item, hIdx) => (
                                <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                                  <span className="leading-relaxed">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Bottom Hover Accent */}
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'skills' && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="max-w-6xl mx-auto"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                  {skills.map((catGroup, idx) => {
                    const getCategoryIcon = (categoryName) => {
                      switch (categoryName) {
                        case 'Programming Languages':
                          return <Code2 size={20} className="text-cyan-300" />;
                        case 'Frontend Technologies':
                          return <Layout size={20} className="text-cyan-300" />;
                        case 'Backend Technologies':
                          return <Server size={20} className="text-cyan-300" />;
                        case 'Databases':
                          return <Database size={20} className="text-cyan-300" />;
                        case 'Security':
                          return <ShieldCheck size={20} className="text-cyan-300" />;
                        case 'Tools & Technologies':
                          return <Wrench size={20} className="text-cyan-300" />;
                        case 'Cloud & DevOps':
                          return <Cloud size={20} className="text-cyan-300" />;
                        case 'Development Concepts':
                          return <Cpu size={20} className="text-cyan-300" />;
                        default:
                          return <Code2 size={20} className="text-cyan-300" />;
                      }
                    };

                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                        className="p-6 sm:p-8 rounded-[2.5rem] bg-slate-900/60 backdrop-blur-2xl border border-white/15 hover:border-cyan-400/50 transition-all duration-500 relative overflow-hidden flex flex-col justify-between group shadow-[0_10px_35px_rgba(0,0,0,0.4)] hover:shadow-[0_0_45px_rgba(112,66,248,0.35)] transform hover:-translate-y-1.5"
                      >
                        <div className="relative z-10 space-y-6">
                          <div className="flex items-center justify-between gap-4 pb-4 border-b border-white/10">
                            <div className="flex items-center gap-3.5">
                              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/30 flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-inner">
                                {getCategoryIcon(catGroup.category)}
                              </div>
                              <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide group-hover:text-cyan-300 transition-colors">
                                {catGroup.category}
                              </h3>
                            </div>
                            <span className="text-[10px] font-black tracking-widest text-slate-300 uppercase px-3 py-1 bg-white/5 rounded-full border border-white/10">
                              {catGroup.items.length} {catGroup.items.length === 1 ? 'Skill' : 'Skills'}
                            </span>
                          </div>

                          <div className="flex flex-wrap gap-2.5 sm:gap-3">
                            {catGroup.items.map((skill, sIdx) => (
                              <div
                                key={sIdx}
                                className="px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl bg-slate-800/80 border border-white/10 hover:border-cyan-400/50 text-slate-200 hover:text-white text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 group/skill hover:scale-[1.03] shadow-sm cursor-default"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover/skill:scale-125 transition-all" />
                                <span>{skill}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Bottom Hover Accent */}
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-[#030014]/85 backdrop-blur-2xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-6xl max-h-[90vh] bg-slate-900/95 backdrop-blur-2xl rounded-[3rem] border border-white/15 shadow-[0_0_60px_rgba(112,66,248,0.4)] overflow-y-auto relative z-10 custom-scrollbar"
            >
              {/* Modal Header */}
              <div className="sticky top-0 p-8 flex justify-between items-center bg-slate-900/90 backdrop-blur-xl border-b border-white/10 z-20">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-full bg-white/5 text-slate-300 hover:text-white transition-colors"
                  >
                    ← Back
                  </button>
                  <div className="h-4 w-[1px] bg-white/10 mx-2" />
                  <span className="text-xs font-bold tracking-[0.3em] text-cyan-300 uppercase">Project Details</span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-red-500/20 hover:text-red-400 transition-all border border-white/10"
                >
                  ×
                </button>
              </div>

              <div className="p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-16">
                  {/* Left Side: Info */}
                  <div className="space-y-10">
                    <div>
                      <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">{selectedProject.title}</h2>
                      <p className="text-slate-300 text-lg leading-relaxed">{selectedProject.features[0]}</p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 space-y-2">
                        <div className="flex items-center gap-2 text-cyan-300">
                          <Code2 size={16} />
                          <span className="text-[10px] font-bold uppercase tracking-wider">Technologies</span>
                        </div>
                        <div className="text-2xl font-black text-white">{selectedProject.tech.length}</div>
                      </div>
                      <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 space-y-2">
                        <div className="flex items-center gap-2 text-purple-300">
                          <Smartphone size={16} />
                          <span className="text-[10px] font-bold uppercase tracking-wider">Features</span>
                        </div>
                        <div className="text-2xl font-black text-white">{selectedProject.features.length}</div>
                      </div>
                    </div>

                    {/* Tech Stack List */}
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center">
                        <Layers size={14} className="mr-2 text-cyan-400" /> Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map((t, i) => (
                          <span key={i} className="px-4 py-2 rounded-xl bg-slate-800/80 text-cyan-300 text-xs font-bold border border-white/10">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4 pt-6">
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 min-w-[160px] h-14 rounded-2xl bg-gradient-to-r from-[#7042f8] via-[#8b5cf6] to-[#00d2ff] text-white font-bold flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(112,66,248,0.5)] hover:shadow-[0_0_50px_rgba(0,212,255,0.7)] transition-all"
                      >
                        Live Demo <ExternalLink size={18} />
                      </a>
                      {selectedProject.github && (
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 min-w-[160px] h-14 rounded-2xl bg-white/5 text-white font-bold border border-white/15 flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
                        >
                          Source Code <FaGithub size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Side: Features & Image */}
                  <div className="space-y-12">
                    <div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-white/15 shadow-2xl relative group">
                      <img
                        src={selectedProject.image}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                        alt={selectedProject.title}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8 flex items-center">
                        <CheckCircle size={14} className="mr-2 text-purple-400" /> Key Features
                      </h4>
                      <div className="space-y-6">
                        {selectedProject.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-4 group">
                            <div className="mt-1 w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-150 transition-all shadow-[0_0_10px_rgba(0,210,255,0.5)] shrink-0" />
                            <p className="text-slate-300 text-sm leading-relaxed group-hover:text-white transition-colors">{feature}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Certificate Details Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCertificate(null)}
              className="absolute inset-0 bg-[#030014]/85 backdrop-blur-2xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              className="w-full max-w-5xl max-h-[92vh] bg-slate-900/95 backdrop-blur-2xl rounded-[2.5rem] border border-white/15 shadow-[0_0_60px_rgba(112,66,248,0.4)] overflow-y-auto relative z-10 custom-scrollbar"
            >
              {/* Modal Header */}
              <div className="sticky top-0 p-6 sm:p-8 flex justify-between items-center bg-slate-900/90 backdrop-blur-xl border-b border-white/10 z-20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center text-cyan-300 border border-purple-500/30 shadow-[0_0_20px_rgba(112,66,248,0.2)] shrink-0">
                    <Award size={24} />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-white leading-tight">{selectedCertificate.title}</h2>
                    <span className="text-[10px] font-black tracking-widest text-cyan-300 uppercase flex items-center gap-1.5 mt-1">
                      <Shield size={12} /> Skill India / ITVedant Accredited Certificate
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white transition-all border border-white/10 shrink-0"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8 md:p-10 space-y-8">
                <div className="p-3 sm:p-4 rounded-3xl bg-white p-2 border border-white/20 shadow-2xl flex items-center justify-center">
                  <img
                    src={selectedCertificate.image}
                    alt={selectedCertificate.title}
                    className="w-full max-h-[65vh] object-contain rounded-2xl"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 space-y-3">
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <CheckCircle size={18} className="text-cyan-400" />
                      Credential Verification
                    </h4>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      Officially issued credential validating engineering competency in <strong className="text-white">{selectedCertificate.title}</strong>. Facilitated by ITVedant Education Private Limited.
                    </p>
                  </div>

                  <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 flex flex-col justify-center items-center text-center space-y-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Verification Status</span>
                    <div className="px-5 py-2.5 rounded-2xl bg-emerald-500/10 text-emerald-400 font-black text-xs tracking-widest uppercase border border-emerald-500/30 shadow-[0_0_20px_rgba(52,211,153,0.15)] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      100% Fully Verified
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="sticky bottom-0 p-6 bg-slate-900/90 backdrop-blur-xl border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="px-6 py-3 rounded-2xl bg-white/5 text-white text-xs font-bold border border-white/10 hover:bg-white/10 transition-all uppercase tracking-widest"
                >
                  Close View
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Showcase;

