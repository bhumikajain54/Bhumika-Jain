import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, skills, certifications, achievements, education } from '../data';
import { ExternalLink, Layers, Code2, Award, CheckCircle, Smartphone, Globe, Shield, GraduationCap } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Showcase = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [selectedProject, setSelectedProject] = useState(null);

  const tabs = [
    { id: 'projects', label: 'Projects', icon: <Layers size={18} /> },
    { id: 'certificates', label: 'Certificates', icon: <Award size={18} /> },
    { id: 'education', label: 'Education', icon: <GraduationCap size={18} /> },
    { id: 'skills', label: 'Tech Stack', icon: <Code2 size={18} /> },
  ];

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
            Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path.
          </motion.p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="flex p-1 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold tracking-widest uppercase transition-all duration-500 relative ${
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
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {projects.map((project, idx) => (
                  <motion.div
                    key={idx}
                    layout
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
                {/* Certifications Section */}
                <div>
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent border border-accent/20">
                      <Award size={20} />
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">Professional Certifications</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, idx) => (
                      <motion.div
                        key={idx}
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="group rounded-[2rem] glass border border-white/5 hover:border-accent/30 transition-all duration-500 overflow-hidden card-hover"
                      >
                        <div className="aspect-[4/3] relative overflow-hidden bg-white/5">
                          <img 
                            src={cert.image} 
                            alt={cert.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60" />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                             <div className="w-12 h-12 rounded-full bg-accent/20 backdrop-blur-md border border-accent/40 flex items-center justify-center text-accent">
                               <Award size={24} />
                             </div>
                          </div>
                        </div>

                        <div className="p-6 relative">
                          <h4 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-accent transition-colors">{cert.title}</h4>
                          <div className="flex items-center text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                            <CheckCircle size={12} className="mr-2 text-accent" />
                            Verified Certificate
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Achievements Section */}
                <div>
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20">
                      <Award size={20} />
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">Key Achievements & Honors</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {achievements.map((ach, idx) => (
                      <motion.div
                        key={idx}
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="p-6 rounded-[2rem] glass border border-white/5 hover:border-secondary/30 transition-all duration-500 group relative overflow-hidden card-hover"
                      >
                        <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-4 group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                          <Award size={24} />
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-secondary transition-colors">{ach}</h4>
                        <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">Honor Award</span>
                        
                        <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-secondary/5 rounded-full blur-2xl group-hover:bg-secondary/10 transition-all" />
                      </motion.div>
                    ))}
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
                className="max-w-4xl mx-auto space-y-8"
              >
                {education.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-8 rounded-[2.5rem] glass border border-white/5 hover:border-secondary/30 transition-all duration-500 group card-hover relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                      <GraduationCap size={100} />
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                      <div className="flex gap-6 items-start">
                        <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20 shrink-0 group-hover:scale-110 transition-transform">
                          <GraduationCap size={28} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-secondary transition-colors">{edu.degree}</h3>
                          <p className="text-secondary font-semibold text-lg tracking-wide">{edu.institution}</p>
                        </div>
                      </div>
                      
                      <div className="inline-flex items-center text-xs font-bold text-slate-400 bg-white/5 px-4 py-2 rounded-full border border-white/5 uppercase self-start md:self-center">
                        {edu.period}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === 'skills' && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="max-w-5xl mx-auto"
              >
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {skills.flatMap(s => s.items).map((skill, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -5, scale: 1.05 }}
                      className="p-6 rounded-[2rem] glass border border-white/5 flex flex-col items-center justify-center gap-4 group transition-all duration-500 hover:border-secondary/30"
                    >
                      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 group-hover:bg-secondary group-hover:text-white transition-all shadow-inner">
                        <Code2 size={24} />
                      </div>
                      <span className="text-xs font-bold tracking-widest text-slate-400 group-hover:text-white transition-colors uppercase text-center">{skill}</span>
                    </motion.div>
                  ))}
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
                      <a 
                        href={selectedProject.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 min-w-[160px] h-14 rounded-2xl bg-white/5 text-white font-bold border border-white/10 flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
                      >
                        Source Code <FaGithub size={18} />
                      </a>
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

      {/* Global Section Background Elements */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none translate-x-1/2" />
    </section>
  );
};

export default Showcase;
