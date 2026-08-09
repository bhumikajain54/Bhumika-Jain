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
  const tabs = [
    { id: 'projects', label: 'Projects', icon: <Layers size={18} /> },
    { id: 'certificates', label: 'Certificates', icon: <Award size={18} /> },
    { id: 'education', label: 'Education', icon: <GraduationCap size={18} /> },
    { id: 'skills', label: 'Tech Stack', icon: <Code2 size={18} /> },
  ];

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 6);
  const displayedCertificates = showAllCertificates ? certifications : certifications.slice(0, 6);

  return (
    <section id="portfolio" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-6 leading-tight"
          >
            Portfolio <span className="gradient-text glow-text">Showcase</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed"
          >
            Explore a curated collection of enterprise-grade projects, industry-standard certifications, and a deep-dive into my Java-centric tech stack.
          </motion.p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12 md:mb-16">
          <div className="grid grid-cols-2 md:flex p-1 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl w-full md:w-auto gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center justify-center gap-2 px-2 md:px-6 py-3 md:py-3 rounded-xl text-[10px] md:text-sm font-bold tracking-widest uppercase transition-all duration-500 relative ${
                  activeTab === tab.id ? 'text-white' : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {tab.icon}
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-secondary/20 border border-secondary/30 rounded-xl -z-10 shadow-[0_0_20px_rgba(112,66,248,0.2)]"
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
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="group rounded-[2.5rem] glass border border-white/5 hover:border-secondary/30 transition-all duration-500 overflow-hidden card-hover"
                    >
                      <div className="aspect-video relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent z-10 opacity-60" />
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-40 group-hover:opacity-60"
                        />
                        <div className="absolute top-6 left-6 z-20 flex gap-2">
                          {project.tech.slice(0, 2).map((t, i) => (
                            <span key={i} className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 bg-secondary/20 text-secondary rounded-full border border-secondary/30 backdrop-blur-md">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="p-8 relative">
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-secondary transition-colors">{project.title}</h3>
                        <p className="text-sm text-slate-400 line-clamp-2 mb-6 leading-relaxed">
                          {project.features[0]}
                        </p>

                        <div className="flex items-center justify-between pt-6 border-t border-white/5">
                          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center text-xs font-bold text-slate-500 hover:text-secondary transition-colors">
                            Live Demo <ExternalLink size={14} className="ml-1" />
                          </a>
                          <button
                            onClick={() => setSelectedProject(project)}
                            className="px-4 py-2 rounded-xl bg-white/5 text-white text-xs font-bold border border-white/10 hover:bg-secondary hover:border-secondary transition-all"
                          >
                            Details →
                          </button>
                        </div>
                      </div>
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
                      className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-secondary/20 hover:border-secondary/50 transition-all duration-300 font-bold text-sm tracking-widest uppercase"
                    >
                      {showAllProjects ? 'See Less' : 'See More'}
                      <motion.div
                        animate={{ rotate: showAllProjects ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={18} />
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
                    <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20 shadow-[0_0_20px_rgba(112,66,248,0.2)]">
                      <Shield size={24} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-black text-white tracking-tight">Professional Certifications</h3>
                      <p className="text-slate-400 text-xs sm:text-sm">Verified credentials from accredited enterprise IT education institutes</p>
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
                        className="group cursor-pointer p-4 sm:p-5 rounded-[2rem] glass border border-white/10 hover:border-secondary/40 transition-all duration-500 overflow-hidden shadow-xl relative card-hover flex flex-col justify-between"
                      >
                        {/* Certificate Image Frame - Clear White Background */}
                        <div>
                          <div className="aspect-[16/11] relative overflow-hidden rounded-2xl bg-white p-1.5 border border-white/10 shadow-md group-hover:shadow-secondary/20 transition-all mb-4 flex items-center justify-center">
                            <img
                              src={cert.image}
                              alt={cert.title}
                              className="w-full h-full object-contain rounded-xl transition-transform duration-500 group-hover:scale-105"
                            />

                            {/* Hover Action Overlay */}
                            <div className="absolute inset-0 bg-secondary/15 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center rounded-2xl">
                              <span className="px-4 py-2 rounded-xl bg-secondary text-white text-xs font-bold shadow-lg uppercase tracking-wider flex items-center gap-1.5">
                                Preview Credential →
                              </span>
                            </div>
                          </div>

                          {/* Certificate Title */}
                          <h4 className="text-base sm:text-lg font-bold text-white leading-snug group-hover:text-secondary transition-colors mb-2 line-clamp-2">
                            {cert.title}
                          </h4>
                        </div>

                        {/* Verified Footer Tag */}
                        <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Shield size={12} className="text-secondary" />
                            <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                              ITVedant Verified
                            </span>
                          </div>
                          <span className="text-xs text-secondary font-bold group-hover:translate-x-1 transition-transform">
                            →
                          </span>
                        </div>
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
                        className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-secondary/20 hover:border-secondary/50 transition-all duration-300 font-bold text-sm tracking-widest uppercase"
                      >
                        {showAllCertificates ? 'See Less' : 'See More'}
                        <motion.div
                          animate={{ rotate: showAllCertificates ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown size={18} />
                        </motion.div>
                      </button>
                    </motion.div>
                  )}
                </div>

                {/* Achievements Section */}
                <div className="pt-8">
                  <div className="flex items-center justify-between flex-wrap gap-4 mb-10">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20 shadow-[0_0_20px_rgba(112,66,248,0.2)]">
                        <Award size={24} />
                      </div>
                      <div>
                        <h3 className="text-3xl font-black text-white tracking-tight">Key Achievements & Impact</h3>
                        <p className="text-slate-400 text-xs sm:text-sm">Measurable engineering milestones and performance metrics</p>
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
                          className="p-6 sm:p-8 rounded-[2.5rem] glass border border-white/10 hover:border-secondary/40 transition-all duration-500 card-hover relative overflow-hidden flex flex-col justify-between group shadow-xl"
                        >
                          {/* Ambient Inner Lighting */}
                          <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                          <div className="relative z-10 space-y-6">
                            {/* Card Top Metadata Row */}
                            <div className="flex items-center justify-between gap-3">
                              <div className="w-12 h-12 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-500 shadow-inner">
                                {meta.icon}
                              </div>
                              <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase px-3 py-1 bg-white/5 rounded-full border border-white/10">
                                {meta.category}
                              </span>
                            </div>

                            {/* Stat Callout Number */}
                            <div>
                              <div className="text-4xl sm:text-5xl font-black gradient-text glow-text tracking-tight mb-2">
                                {meta.stat}
                              </div>
                              <p className="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed group-hover:text-white transition-colors">
                                {ach}
                              </p>
                            </div>
                          </div>

                          {/* Hover Bottom Accent Bar */}
                          <div className="relative z-10 pt-4 mt-4 border-t border-white/5">
                            <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                              {meta.label}
                            </span>
                          </div>

                          {/* Subtle Corner Glow Accent */}
                          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-secondary/10 rounded-full blur-[60px] group-hover:bg-secondary/20 transition-all pointer-events-none" />
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
                      className="p-6 sm:p-8 rounded-[2.5rem] glass border border-white/10 hover:border-secondary/40 transition-all duration-500 card-hover relative overflow-hidden flex flex-col justify-between group shadow-xl"
                    >
                      {/* Ambient Lighting Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                      {/* Top Decorative Background Icon */}
                      <div className="absolute -top-4 -right-4 opacity-5 group-hover:opacity-15 group-hover:scale-110 transition-all duration-500 text-secondary pointer-events-none">
                        <GraduationCap size={140} />
                      </div>

                      <div className="relative z-10 space-y-6">
                        {/* Header Meta: Category Pill & Period Badge */}
                        <div className="flex items-center justify-between gap-3">
                          <div className="px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5">
                            <BookOpen size={12} />
                            <span>{edu.type || 'Degree'}</span>
                          </div>

                          <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-[11px] font-bold tracking-wider flex items-center gap-1.5">
                            <Calendar size={12} className="text-secondary" />
                            <span>{edu.period}</span>
                          </div>
                        </div>

                        {/* Degree Title & Institution */}
                        <div className="space-y-2">
                          <div className="w-12 h-12 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-500 shadow-inner mb-4">
                            <GraduationCap size={24} />
                          </div>

                          <h3 className="text-xl sm:text-2xl font-black text-white leading-snug group-hover:text-secondary transition-colors">
                            {edu.degree}
                          </h3>

                          <p className="text-secondary font-bold text-sm tracking-wide flex items-center gap-1.5 pt-1">
                            {edu.institution}
                          </p>

                          {edu.location && (
                            <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                              <MapPin size={12} className="text-slate-400 shrink-0" />
                              <span>{edu.location}</span>
                            </div>
                          )}
                        </div>

                        {/* Key Academic Focus / Highlights */}
                        {edu.highlights && edu.highlights.length > 0 && (
                          <div className="space-y-2.5 pt-4 border-t border-white/5">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                              Key Focus Areas
                            </span>
                            <div className="space-y-2">
                              {edu.highlights.map((item, hIdx) => (
                                <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                                  <span className="leading-relaxed">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Subtle Ambient Bottom Accent */}
                      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-secondary/10 rounded-full blur-[60px] group-hover:bg-secondary/20 transition-all pointer-events-none" />
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
                          return <Code2 size={20} className="text-secondary" />;
                        case 'Frontend Technologies':
                          return <Layout size={20} className="text-secondary" />;
                        case 'Backend Technologies':
                          return <Server size={20} className="text-secondary" />;
                        case 'Databases':
                          return <Database size={20} className="text-secondary" />;
                        case 'Security':
                          return <ShieldCheck size={20} className="text-secondary" />;
                        case 'Tools & Technologies':
                          return <Wrench size={20} className="text-secondary" />;
                        case 'Cloud & DevOps':
                          return <Cloud size={20} className="text-secondary" />;
                        case 'Development Concepts':
                          return <Cpu size={20} className="text-secondary" />;
                        default:
                          return <Code2 size={20} className="text-secondary" />;
                      }
                    };

                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                        className="p-6 sm:p-8 rounded-[2.5rem] glass border border-white/10 hover:border-secondary/40 transition-all duration-500 card-hover relative overflow-hidden flex flex-col justify-between group shadow-xl"
                      >
                        {/* Ambient Lighting Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <div className="relative z-10 space-y-6">
                          {/* Category Header */}
                          <div className="flex items-center justify-between gap-4 pb-4 border-b border-white/5">
                            <div className="flex items-center gap-3.5">
                              <div className="w-11 h-11 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center group-hover:bg-secondary/20 group-hover:scale-110 transition-all duration-500 shadow-inner">
                                {getCategoryIcon(catGroup.category)}
                              </div>
                              <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide group-hover:text-secondary transition-colors">
                                {catGroup.category}
                              </h3>
                            </div>
                            <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase px-3 py-1 bg-white/5 rounded-full border border-white/10">
                              {catGroup.items.length} {catGroup.items.length === 1 ? 'Skill' : 'Skills'}
                            </span>
                          </div>

                          {/* Skill Items Pill Badges */}
                          <div className="flex flex-wrap gap-2.5 sm:gap-3">
                            {catGroup.items.map((skill, sIdx) => (
                              <div
                                key={sIdx}
                                className="px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:bg-secondary/15 hover:border-secondary/40 text-slate-300 hover:text-white text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 group/skill hover:scale-[1.03] shadow-sm cursor-default"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary/60 group-hover/skill:bg-secondary group-hover/skill:scale-125 transition-all" />
                                <span>{skill}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Corner Glow Accent */}
                        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-secondary/10 rounded-full blur-[60px] group-hover:bg-secondary/20 transition-all pointer-events-none" />
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
              className="absolute inset-0 bg-primary/80 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-6xl max-h-[90vh] bg-primary/50 rounded-[3rem] border border-white/10 shadow-2xl overflow-y-auto relative z-10 glass custom-scrollbar"
            >
              {/* Modal Header */}
              <div className="sticky top-0 p-8 flex justify-between items-center bg-primary/20 backdrop-blur-xl border-b border-white/5 z-20">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-full bg-white/5 text-slate-400 hover:text-white transition-colors"
                  >
                    ← Back
                  </button>
                  <div className="h-4 w-[1px] bg-white/10 mx-2" />
                  <span className="text-xs font-bold tracking-[0.3em] text-slate-500 uppercase">Project Details</span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-red-500/20 hover:text-red-500 transition-all"
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
                      <p className="text-slate-400 text-lg leading-relaxed">{selectedProject.features[0]}</p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-6 rounded-3xl bg-white/5 border border-white/5 space-y-2">
                        <div className="flex items-center gap-2 text-secondary">
                          <Code2 size={16} />
                          <span className="text-[10px] font-bold uppercase tracking-wider">Technologies</span>
                        </div>
                        <div className="text-2xl font-black text-white">{selectedProject.tech.length}</div>
                      </div>
                      <div className="p-6 rounded-3xl bg-white/5 border border-white/5 space-y-2">
                        <div className="flex items-center gap-2 text-accent">
                          <Smartphone size={16} />
                          <span className="text-[10px] font-bold uppercase tracking-wider">Features</span>
                        </div>
                        <div className="text-2xl font-black text-white">{selectedProject.features.length}</div>
                      </div>
                    </div>

                    {/* Tech Stack List */}
                    <div>
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6 flex items-center">
                        <Layers size={14} className="mr-2" /> Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map((t, i) => (
                          <span key={i} className="px-4 py-2 rounded-xl bg-secondary/10 text-secondary text-xs font-bold border border-secondary/20">
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
                        className="flex-1 min-w-[160px] h-14 rounded-2xl bg-secondary text-white font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(112,66,248,0.4)] transition-all"
                      >
                        Live Demo <ExternalLink size={18} />
                      </a>
                      {selectedProject.github && (
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 min-w-[160px] h-14 rounded-2xl bg-white/5 text-white font-bold border border-white/10 flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
                        >
                          Source Code <FaGithub size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Side: Features & Image */}
                  <div className="space-y-12">
                    <div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl relative group">
                      <img
                        src={selectedProject.image}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-8 flex items-center">
                        <CheckCircle size={14} className="mr-2" /> Key Features
                      </h4>
                      <div className="space-y-6">
                        {selectedProject.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-4 group">
                            <div className="mt-1 w-2 h-2 rounded-full bg-secondary group-hover:scale-150 transition-all shadow-[0_0_10px_rgba(112,66,248,0.5)] shrink-0" />
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
              className="absolute inset-0 bg-[#030014]/90 backdrop-blur-2xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              className="w-full max-w-5xl max-h-[92vh] bg-[#0A0A0E] rounded-[2.5rem] border border-white/10 shadow-2xl overflow-y-auto relative z-10 custom-scrollbar"
            >
              {/* Modal Header */}
              <div className="sticky top-0 p-6 sm:p-8 flex justify-between items-center bg-[#0A0A0E]/90 backdrop-blur-xl border-b border-white/10 z-20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20 shadow-[0_0_20px_rgba(112,66,248,0.2)] shrink-0">
                    <Award size={24} />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-white leading-tight">{selectedCertificate.title}</h2>
                    <span className="text-[10px] font-black tracking-widest text-secondary uppercase flex items-center gap-1.5 mt-1">
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

              {/* Modal Content - Crisp Certificate View */}
              <div className="p-6 sm:p-8 md:p-10 space-y-8">
                {/* Certificate High-Res Container */}
                <div className="p-3 sm:p-4 rounded-3xl bg-white p-2 border border-white/20 shadow-2xl flex items-center justify-center">
                  <img
                    src={selectedCertificate.image}
                    alt={selectedCertificate.title}
                    className="w-full max-h-[65vh] object-contain rounded-2xl"
                  />
                </div>

                {/* Verification Metadata Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-3xl bg-white/5 border border-white/5 space-y-3">
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <CheckCircle size={18} className="text-secondary" />
                      Credential Verification
                    </h4>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      Officially issued credential validating engineering competency in <strong className="text-white">{selectedCertificate.title}</strong>. Facilitated by ITVedant Education Private Limited.
                    </p>
                  </div>

                  <div className="p-6 rounded-3xl bg-white/5 border border-white/5 flex flex-col justify-center items-center text-center space-y-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Verification Status</span>
                    <div className="px-5 py-2.5 rounded-2xl bg-green-500/10 text-green-400 font-black text-xs tracking-widest uppercase border border-green-500/20 shadow-[0_0_20px_rgba(74,222,128,0.15)] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      100% Fully Verified
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="sticky bottom-0 p-6 bg-[#0A0A0E]/90 backdrop-blur-xl border-t border-white/10 flex justify-end">
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

      {/* Global Section Background Elements */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none translate-x-1/2" />
    </section>
  );
};

export default Showcase;
