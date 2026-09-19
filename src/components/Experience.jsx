import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experience } from '../data';
import { Calendar, Building2, Award, ArrowUpRight, X, CheckCircle, Briefcase, ChevronRight, Layers, Sparkles, FolderGit2 } from 'lucide-react';

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePos({ x, y });
  };

  // Calculate years of experience dynamically from experience data
  const years = experience.map(exp => {
    let match = exp.period.match(/\b(20\d{2})\b/g) || [];
    if (exp.clients) {
      exp.clients.forEach(c => {
        const cMatch = c.period.match(/\b(20\d{2})\b/g);
        if (cMatch) match = match.concat(cMatch);
      });
    }
    return match.map(Number);
  }).flat();
  const startYear = years.length > 0 ? Math.min(...years) : 2024;
  const currentYear = new Date().getFullYear();
  const yearsOfExp = currentYear - startYear;

  // Total roles count including primary and client engagements
  const totalRoles = experience.reduce((acc, curr) => acc + 1 + (curr.clients?.length || 0) - (curr.clients?.length ? 0 : 0), 0);
  const totalClients = experience.reduce((acc, curr) => acc + (curr.clients?.length || 0), 0);

  // Helper function to extract tech stack keywords accurately from role & client descriptions
  const getTechStack = (descriptionArray) => {
    if (!descriptionArray) return ['Full Stack', 'Web Apps'];
    const text = Array.isArray(descriptionArray) ? descriptionArray.join(' ') : String(descriptionArray);
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
    <section
      id="experience"
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
        <div className="absolute top-[15%] right-[-5%] w-[45%] h-[45%] bg-[#7042f8]/20 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-[10%] left-[-5%] w-[45%] h-[45%] bg-[#00d2ff]/15 rounded-full blur-[140px]" />
        <div className="absolute top-[50%] left-[30%] w-[30%] h-[30%] bg-[#a855f7]/15 rounded-full blur-[160px]" />
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
              top: `${Math.floor((i * 163.7) % 100)}%`,
              left: `${Math.floor((i * 307.2) % 100)}%`,
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
        {/* Header & Stats Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 md:mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-indigo-500/10 border border-purple-400/30 text-cyan-300 shadow-[0_0_20px_rgba(168,85,247,0.2)] backdrop-blur-md mb-4"
            >
              <Sparkles size={13} className="text-secondary animate-spin-slow" />
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase bg-gradient-to-r from-white via-slate-200 to-cyan-200 bg-clip-text text-transparent">
                Career Milestones & Impact
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 leading-tight tracking-tight text-white filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
            >
              My{' '}
              <span className="bg-gradient-to-r from-[#a855f7] via-[#7042f8] to-[#00d2ff] bg-clip-text text-transparent filter drop-shadow-[0_0_40px_rgba(112,66,248,0.75)]">
                Experience
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-300/90 text-base sm:text-lg leading-relaxed font-normal"
            >
              A proven track record of architecting robust enterprise applications, building scalable RESTful APIs, and delivering client projects end-to-end.
            </motion.p>
          </div>

          {/* Experience Quick Metrics */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 p-5 px-7 rounded-3xl bg-slate-900/60 border border-white/15 backdrop-blur-2xl self-start lg:self-auto shadow-[0_10px_35px_rgba(0,0,0,0.4)] hover:border-cyan-400/40 transition-all duration-300"
          >
            <div className="text-center sm:text-right">
              <div className="text-3xl font-black bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent filter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                {totalClients > 0 ? `${totalClients + 2}` : experience.length}
              </div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Total Engagements</div>
            </div>
            <div className="w-[1px] h-10 bg-white/10" />
            <div className="text-center sm:text-right">
              <div className="text-3xl font-black bg-gradient-to-r from-[#a855f7] via-[#7042f8] to-[#00d2ff] bg-clip-text text-transparent filter drop-shadow-[0_0_20px_rgba(112,66,248,0.6)]">
                {yearsOfExp}+
              </div>
              <div className="text-[10px] font-bold text-cyan-300 uppercase tracking-widest mt-0.5">Years Exp.</div>
            </div>
          </motion.div>
        </div>

        {/* Experience Roles Stack */}
        <div className="space-y-12 relative">
          {experience.map((exp, idx) => {
            const techTags = getTechStack(exp.description);
            const isPresent = exp.period.includes('Present');
            const hasClients = exp.clients && exp.clients.length > 0;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative"
              >
                {/* Main Role Card */}
                <div
                  className="p-6 sm:p-8 md:p-10 rounded-3xl bg-slate-900/70 backdrop-blur-2xl border border-white/15 hover:border-cyan-400/50 hover:bg-slate-900/85 transition-all duration-500 relative overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.4)] hover:shadow-[0_0_45px_rgba(112,66,248,0.35)] flex flex-col justify-between"
                >
                  {/* Ambient Inner Lighting */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-cyan-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="relative z-10 space-y-6">
                    {/* Top Metadata Row: Company & Date */}
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/30 flex items-center justify-center text-cyan-300 shrink-0 shadow-inner">
                          {exp.company === 'Freelance' ? <Briefcase size={24} /> : <Building2 size={24} />}
                        </div>
                        <div>
                          <h4 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {exp.company}
                          </h4>
                          <div className="flex items-center gap-2 text-slate-400 text-xs sm:text-sm font-medium">
                            <Calendar size={14} className="text-secondary" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>

                      {isPresent ? (
                        <div className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-black tracking-widest uppercase flex items-center gap-2 shadow-[0_0_15px_rgba(52,211,153,0.2)]">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          Active Role
                        </div>
                      ) : (
                        <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs font-bold tracking-widest uppercase">
                          Completed
                        </div>
                      )}
                    </div>

                    {/* Role Title */}
                    <div>
                      <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-snug">
                        {exp.role}
                      </h3>
                    </div>

                    {/* Primary Deliverables */}
                    <div className="space-y-3">
                      {exp.description.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.08] hover:border-purple-400/30 transition-all"
                        >
                          <div className="mt-1 w-5 h-5 rounded-lg bg-purple-500/10 flex items-center justify-center text-cyan-300 shrink-0 border border-purple-500/30">
                            <ChevronRight size={13} />
                          </div>
                          <p className="text-slate-300 text-sm leading-relaxed">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Nested Client Projects / Engagements Section inside Freelance */}
                    {hasClients && (
                      <div className="pt-6 space-y-6 border-t border-white/10 mt-6">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <div className="flex items-center gap-2.5 text-cyan-300 font-extrabold text-base sm:text-lg tracking-wide">
                            <FolderGit2 size={20} className="text-cyan-400 animate-pulse" />
                            <span>Selected Client Projects / Engagements ({exp.clients.length})</span>
                          </div>
                          <span className="text-xs text-purple-300/90 font-medium px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
                            Delivered under Freelancing
                          </span>
                        </div>

                        {/* Clients Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          {exp.clients.map((clientItem, cIdx) => {
                            const clientTech = getTechStack(clientItem.description);
                            return (
                              <motion.div
                                key={cIdx}
                                whileHover={{ y: -3 }}
                                onClick={() => setSelectedExp(clientItem)}
                                className="p-5 sm:p-6 rounded-2xl bg-slate-950/60 border border-white/10 hover:border-cyan-400/40 hover:bg-slate-900/90 transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-4 shadow-[0_4px_20px_rgba(0,0,0,0.3)] group/client"
                              >
                                <div className="space-y-3">
                                  <div className="flex flex-wrap items-start justify-between gap-2">
                                    <div>
                                      <h5 className="font-black text-white text-base sm:text-lg group-hover/client:text-cyan-300 transition-colors">
                                        {clientItem.company}
                                      </h5>
                                      <div className="text-xs font-bold text-slate-400 mt-0.5">
                                        {clientItem.role}
                                      </div>
                                    </div>
                                    <span className="text-[10px] font-bold text-purple-300 px-2.5 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 whitespace-nowrap">
                                      {clientItem.period.replace('Client Engagement ', '').replace('Client Engagement', 'Client Project')}
                                    </span>
                                  </div>

                                  <div className="space-y-2">
                                    {clientItem.description.map((desc, dIdx) => (
                                      <div key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300/90 leading-relaxed font-normal">
                                        <span className="text-cyan-400 mt-1 shrink-0">•</span>
                                        <span>{desc}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-white/5">
                                  <div className="flex flex-wrap gap-1.5">
                                    {clientTech.slice(0, 3).map((tag, tIdx) => (
                                      <span
                                        key={tIdx}
                                        className="text-[9px] font-bold tracking-wider uppercase px-2.5 py-1 bg-slate-800/80 text-cyan-300 rounded-lg border border-white/10"
                                      >
                                        {tag}
                                      </span>
                                    ))}
                                  </div>
                                  <span className="inline-flex items-center gap-1 text-xs font-bold text-cyan-400 group-hover/client:translate-x-1 transition-transform">
                                    View Details <ArrowUpRight size={14} />
                                  </span>
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Footer: Tech Tags & View Details CTA */}
                  <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pt-6 mt-6 border-t border-white/10">
                    <div className="flex flex-wrap gap-2">
                      {techTags.slice(0, 6).map((tag, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 bg-slate-800/80 text-cyan-300 rounded-xl border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelectedExp(exp)}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-300 hover:text-cyan-300 transition-all ml-auto"
                    >
                      View Breakdown <ArrowUpRight size={16} className="text-cyan-400" />
                    </button>
                  </div>

                  {/* Bottom Hover Gradient Accent */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400" />
                </div>
              </motion.div>
            );
          })}
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
              className="absolute inset-0 bg-[#030014]/85 backdrop-blur-2xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              className="w-full max-w-4xl max-h-[90vh] bg-slate-900/95 backdrop-blur-2xl rounded-[2.5rem] border border-white/15 shadow-[0_0_60px_rgba(112,66,248,0.4)] overflow-y-auto relative z-10 custom-scrollbar"
            >
              {/* Modal Top Nav Bar */}
              <div className="sticky top-0 p-6 sm:p-8 flex justify-between items-center bg-slate-900/90 backdrop-blur-xl border-b border-white/10 z-20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center text-cyan-300 border border-purple-500/30">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white leading-tight">{selectedExp.company}</h3>
                    <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">
                      {selectedExp.clients ? 'Freelance Practice Overview' : 'Engagement Breakdown'}
                    </span>
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
                <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Position</span>
                      <h2 className="text-2xl sm:text-3xl font-black text-white">{selectedExp.role}</h2>
                    </div>

                    <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-cyan-300 text-xs font-bold">
                      <Calendar size={14} />
                      <span>{selectedExp.period}</span>
                    </div>
                  </div>
                </div>

                {/* Tech Stack List */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Layers size={14} className="text-cyan-400" /> Technologies & Tools Employed
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {getTechStack(selectedExp.description).map((tag, i) => (
                      <span
                        key={i}
                        className="px-3.5 py-2 rounded-xl bg-slate-800/80 text-cyan-300 text-xs font-bold border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Complete Key Contributions */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <CheckCircle size={14} className="text-purple-400" /> Deliverables & Responsibilities
                  </h4>
                  <div className="space-y-4">
                    {selectedExp.description.map((item, i) => (
                      <motion.div
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        key={i}
                        className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.08] transition-all"
                      >
                        <div className="mt-1 w-6 h-6 rounded-xl bg-purple-500/10 flex items-center justify-center text-cyan-300 border border-purple-500/30 shrink-0">
                          <ChevronRight size={14} />
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed">{item}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Client Engagements List (if selectedExp has clients) */}
                {selectedExp.clients && selectedExp.clients.length > 0 && (
                  <div className="space-y-4 pt-4 border-t border-white/10">
                    <h4 className="text-xs font-bold text-cyan-300 uppercase tracking-widest flex items-center gap-2">
                      <FolderGit2 size={15} /> All Client Projects ({selectedExp.clients.length})
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedExp.clients.map((c, i) => (
                        <div key={i} className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                          <div className="flex items-center justify-between gap-2">
                            <h5 className="font-bold text-white text-sm">{c.company}</h5>
                            <span className="text-[10px] text-purple-300 bg-purple-500/15 px-2 py-0.5 rounded-full">{c.period}</span>
                          </div>
                          <div className="text-xs font-semibold text-cyan-300">{c.role}</div>
                          {c.description.map((d, dIdx) => (
                            <p key={dIdx} className="text-xs text-slate-300 leading-relaxed">• {d}</p>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Summary Highlight Box */}
                <div className="p-6 rounded-3xl bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-transparent border border-purple-500/30 relative overflow-hidden">
                  <Sparkles className="absolute top-4 right-4 text-purple-400/40 animate-pulse" size={24} />
                  <h4 className="text-white font-bold mb-1">Architecture & Engineering Excellence</h4>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
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
