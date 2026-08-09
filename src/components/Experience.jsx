import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experience } from '../data';
import { Calendar, Building2, Award, ArrowUpRight, X, CheckCircle, Briefcase, ChevronRight, Layers, Sparkles } from 'lucide-react';

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState(null);

  // Calculate years of experience dynamically from experience data
  const years = experience.map(exp => {
    const match = exp.period.match(/\b(20\d{2})\b/g);
    return match ? match.map(Number) : [];
  }).flat();
  const startYear = years.length > 0 ? Math.min(...years) : 2024;
  const currentYear = new Date().getFullYear();
  const yearsOfExp = currentYear - startYear;

  // Helper function to extract tech stack keywords accurately from role descriptions
  const getTechStack = (descriptionArray) => {
    const text = descriptionArray.join(' ');
    const knownTech = [
      'Java', 'Spring Boot', 'React.js', 'React', 'Angular', 'PHP', 'MySQL',
      'MongoDB', 'PostgreSQL', 'NeonDB', 'REST API', 'RESTful APIs', 'JWT',
      'Hibernate', 'JPA', 'Tailwind CSS', 'Tailwind', 'Bootstrap', 'HTML5',
      'CSS3', 'JavaScript', 'TypeScript', 'XSS', 'CSRF', 'Microservices',
      'AWS', 'Git', 'Maven', 'npm', 'Postman'
    ];
    
    const found = [];
    knownTech.forEach(tech => {
      const regex = new RegExp(`\\b${tech.replace('.', '\\.')}\\b`, 'i');
      if (regex.test(text) && !found.includes(tech)) {
        if (tech === 'React' && found.includes('React.js')) return;
        if (tech === 'Tailwind' && found.includes('Tailwind CSS')) return;
        found.push(tech);
      }
    });

    return found.length > 0 ? found : ['Full Stack', 'REST API', 'Web Apps'];
  };

  return (
    <section id="experience" className="section-padding relative overflow-hidden bg-[#030014]">
      {/* Background Glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[160px] pointer-events-none opacity-50 animate-pulse" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Header & Stats Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 md:mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-md"
            >
              <Award size={14} className="text-secondary" />
              <span className="text-[10px] font-black tracking-[0.3em] text-secondary uppercase">Career Milestones</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 leading-tight tracking-tight text-white"
            >
              My <span className="gradient-text glow-text">Experience</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 text-base sm:text-lg leading-relaxed"
            >
              A proven track record of architecting robust enterprise applications, building scalable RESTful APIs, and designing responsive frontend systems.
            </motion.p>
          </div>

          {/* Experience Quick Metrics */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 p-4 sm:p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl self-start lg:self-auto shadow-2xl"
          >
            <div className="text-center sm:text-right">
              <div className="text-2xl sm:text-3xl font-black text-white">{experience.length}</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Total Roles</div>
            </div>
            <div className="w-[1px] h-10 bg-white/10" />
            <div className="text-center sm:text-right">
              <div className="text-2xl sm:text-3xl font-black text-secondary">{yearsOfExp}+</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Years Exp.</div>
            </div>
          </motion.div>
        </div>

        {/* Timeline Grid Container */}
        <div className="relative pl-6 sm:pl-10 lg:pl-0">
          {/* Mobile Left Timeline Line */}
          <div className="lg:hidden absolute left-[11px] sm:left-[19px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-secondary via-purple-500/40 to-transparent z-0" />

          {/* Desktop Center Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-6 bottom-6 w-0.5 -translate-x-1/2 bg-gradient-to-b from-secondary via-purple-500/40 to-transparent z-0 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-x-16 lg:gap-y-12 relative">
            {experience.map((exp, idx) => {
              const techTags = getTechStack(exp.description);
              const isPresent = exp.period.includes('Present');
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="relative"
                >
                  {/* Timeline Hub Node (Mobile) */}
                  <div className="lg:hidden absolute -left-[24px] sm:-left-[32px] top-6 -translate-x-1/2 z-20">
                    <div className="relative flex items-center justify-center">
                      <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#030014] border-2 ${isPresent ? 'border-green-400 shadow-[0_0_15px_rgba(74,222,128,0.6)]' : 'border-secondary shadow-[0_0_15px_rgba(112,66,248,0.5)]'} flex items-center justify-center`}>
                        <div className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${isPresent ? 'bg-green-400 animate-pulse' : 'bg-secondary'}`} />
                      </div>
                    </div>
                  </div>

                  {/* Timeline Hub Node (Desktop Center) */}
                  <div className={`hidden lg:flex absolute top-8 z-20 ${isEven ? '-right-[2rem] xl:-right-[2.25rem] translate-x-1/2' : '-left-[2rem] xl:-left-[2.25rem] -translate-x-1/2'}`}>
                    <div className="relative flex items-center justify-center">
                      <div className={`w-7 h-7 rounded-full bg-[#030014] border-2 ${isPresent ? 'border-green-400 shadow-[0_0_15px_rgba(74,222,128,0.6)]' : 'border-secondary shadow-[0_0_15px_rgba(112,66,248,0.5)]'} flex items-center justify-center`}>
                        <div className={`w-2.5 h-2.5 rounded-full ${isPresent ? 'bg-green-400 animate-pulse' : 'bg-secondary'}`} />
                      </div>
                    </div>
                  </div>

                  {/* Experience Card */}
                  <div className="group relative h-full">
                    <motion.div 
                      whileHover={{ y: -4 }}
                      onClick={() => setSelectedExp(exp)}
                      className="p-6 sm:p-8 md:p-10 rounded-3xl glass border border-white/10 hover:border-secondary/40 transition-all duration-500 relative overflow-hidden cursor-pointer shadow-xl hover:shadow-[0_10px_40px_rgba(112,66,248,0.15)] h-full flex flex-col justify-between"
                    >
                      {/* Ambient Inner Lighting */}
                      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                      <div className="relative z-10 space-y-6">
                        {/* Top Metadata Row: Company & Date */}
                        <div className="flex flex-wrap items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:scale-110 group-hover:bg-secondary/20 group-hover:text-secondary group-hover:border-secondary/30 transition-all duration-500 shrink-0">
                              <Building2 size={22} />
                            </div>
                            <div>
                              <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-secondary transition-colors">
                                {exp.company}
                              </h4>
                              <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                                <Calendar size={13} className="text-secondary" />
                                <span>{exp.period}</span>
                              </div>
                            </div>
                          </div>

                          {isPresent ? (
                            <div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-black tracking-widest uppercase flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                              Active Role
                            </div>
                          ) : (
                            <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-[10px] font-bold tracking-widest uppercase">
                              Completed
                            </div>
                          )}
                        </div>

                        {/* Role Title */}
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
                            {exp.role}
                          </h3>
                        </div>

                        {/* Key Highlights */}
                        <div className="space-y-3">
                          {exp.description.slice(0, 3).map((item, i) => (
                            <div 
                              key={i} 
                              className="flex items-start gap-3 p-3 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/5 group/item hover:bg-white/[0.07] hover:border-white/10 transition-all"
                            >
                              <div className="mt-1 w-5 h-5 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary shrink-0 border border-secondary/20 group-hover/item:bg-secondary group-hover/item:text-white transition-all">
                                <ChevronRight size={13} />
                              </div>
                              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed group-hover/item:text-white transition-colors">
                                {item}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Card Footer: Tech Tags & View Details CTA */}
                      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pt-6 mt-6 border-t border-white/5">
                        <div className="flex flex-wrap gap-2">
                          {techTags.slice(0, 4).map((tag, i) => (
                            <span 
                              key={i} 
                              className="text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 bg-secondary/10 text-secondary rounded-xl border border-secondary/20 group-hover:border-secondary/40 transition-all"
                            >
                              {tag}
                            </span>
                          ))}
                          {techTags.length > 4 && (
                            <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1.5 bg-white/5 text-slate-400 rounded-xl border border-white/5">
                              +{techTags.length - 4} more
                            </span>
                          )}
                        </div>

                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedExp(exp);
                          }}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-secondary group-hover:translate-x-1 transition-all ml-auto"
                        >
                          View Details <ArrowUpRight size={16} />
                        </button>
                      </div>

                      {/* Subtle Ambient Glow Effect */}
                      <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-secondary/10 rounded-full blur-[70px] group-hover:bg-secondary/20 transition-all pointer-events-none" />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Detailed Role Modal */}
      <AnimatePresence>
        {selectedExp && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedExp(null)}
              className="absolute inset-0 bg-[#030014]/80 backdrop-blur-2xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              className="w-full max-w-4xl max-h-[90vh] bg-[#0A0A0E] rounded-[2.5rem] border border-white/10 shadow-2xl overflow-y-auto relative z-10 custom-scrollbar"
            >
              {/* Modal Top Nav Bar */}
              <div className="sticky top-0 p-6 sm:p-8 flex justify-between items-center bg-[#0A0A0E]/90 backdrop-blur-xl border-b border-white/5 z-20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white leading-tight">{selectedExp.company}</h3>
                    <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">Role Breakdown</span>
                  </div>
                </div>

                <button 
                  onClick={() => setSelectedExp(null)}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white transition-all border border-white/10"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 md:p-10 space-y-8">
                {/* Header Summary */}
                <div className="p-6 rounded-3xl bg-white/5 border border-white/5 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Position</span>
                      <h2 className="text-2xl sm:text-3xl font-black text-white">{selectedExp.role}</h2>
                    </div>

                    <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold">
                      <Calendar size={14} />
                      <span>{selectedExp.period}</span>
                    </div>
                  </div>
                </div>

                {/* Tech Stack List */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Layers size={14} className="text-secondary" /> Technologies & Tools Employed
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {getTechStack(selectedExp.description).map((tag, i) => (
                      <span 
                        key={i} 
                        className="px-3.5 py-2 rounded-xl bg-secondary/10 text-secondary text-xs font-bold border border-secondary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Complete Key Contributions */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <CheckCircle size={14} className="text-secondary" /> Deliverables & Technical Contributions
                  </h4>
                  <div className="space-y-4">
                    {selectedExp.description.map((item, i) => (
                      <motion.div 
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        key={i} 
                        className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/[0.08] transition-all"
                      >
                        <div className="mt-1 w-6 h-6 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20 shrink-0">
                          <ChevronRight size={14} />
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed">{item}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Summary Highlight Box */}
                <div className="p-6 rounded-3xl bg-gradient-to-r from-secondary/10 via-purple-600/10 to-transparent border border-secondary/20 relative overflow-hidden">
                  <Sparkles className="absolute top-4 right-4 text-secondary/30" size={24} />
                  <h4 className="text-white font-bold mb-1">Architecture & Engineering Excellence</h4>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    Designed with emphasis on high availability, clean code principles, optimized database performance, and robust security standards.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;
