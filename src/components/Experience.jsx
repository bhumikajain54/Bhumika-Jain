import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experience } from '../data';
import {
  Calendar,
  Building2,
  ArrowUpRight,
  X,
  CheckCircle2,
  Briefcase,
  Layers,
  Sparkles,
  FolderGit2,
  Zap,
  Globe,
  Code2,
  Cpu,
  ShieldCheck,
  Users,
  ShoppingCart,
  GraduationCap
} from 'lucide-react';

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePos({ x, y });
  };

  // Clean period string for display
  const cleanPeriod = (periodStr) => {
    if (!periodStr) return '';
    return periodStr
      .replace(/^Client Engagement\s*\(?/i, '')
      .replace(/\)?$/, '')
      .replace(/\s*-\s*/g, ' – ')
      .trim();
  };

  // Assign domain & category metadata for client engagements
  const getClientMeta = (company) => {
    const c = company.toLowerCase();
    if (c.includes('jobsahi') || c.includes('brightorial')) {
      return { label: 'Recruitment Platform', category: 'recruitment', icon: <Users size={15} />, color: 'text-blue-400 border-blue-500/30 bg-blue-500/10' };
    }
    if (c.includes('insurance') || c.includes("lord's mark")) {
      return { label: 'Insurance MIS', category: 'enterprise', icon: <ShieldCheck size={15} />, color: 'text-purple-400 border-purple-500/30 bg-purple-500/10' };
    }
    if (c.includes('code-b')) {
      return { label: 'Financial MIS', category: 'enterprise', icon: <Cpu size={15} />, color: 'text-indigo-400 border-indigo-500/30 bg-indigo-500/10' };
    }
    if (c.includes('visom6') || c.includes('cabio')) {
      return { label: 'Operations Admin', category: 'enterprise', icon: <Layers size={15} />, color: 'text-amber-400 border-amber-500/30 bg-amber-500/10' };
    }
    if (c.includes('sajal')) {
      return { label: 'E-Commerce Shop', category: 'ecommerce', icon: <ShoppingCart size={15} />, color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10' };
    }
    if (c.includes('aman') || c.includes('school')) {
      return { label: 'EdTech Management', category: 'enterprise', icon: <GraduationCap size={15} />, color: 'text-fuchsia-400 border-fuchsia-500/30 bg-fuchsia-500/10' };
    }
    if (c.includes('mayank') || c.includes('architect')) {
      return { label: 'Architect Portfolio', category: 'ecommerce', icon: <Globe size={15} />, color: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10' };
    }
    return { label: 'Client Engagement', category: 'all', icon: <Code2 size={15} />, color: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10' };
  };

  // Helper function to extract tech stack keywords accurately
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

  // Extract all client projects from freelance entry
  const freelanceEntry = experience.find(exp => exp.company === 'Freelance') || experience[0];
  const allClients = freelanceEntry?.clients || [];

  // Filter clients based on active tab
  const filteredClients = useMemo(() => {
    if (activeCategory === 'all') return allClients;
    return allClients.filter(c => getClientMeta(c.company).category === activeCategory);
  }, [allClients, activeCategory]);

  const categories = [
    { id: 'all', label: 'All Projects', count: allClients.length },
    { id: 'enterprise', label: 'Enterprise & MIS', count: allClients.filter(c => getClientMeta(c.company).category === 'enterprise').length },
    { id: 'ecommerce', label: 'E-Commerce & Showcase', count: allClients.filter(c => getClientMeta(c.company).category === 'ecommerce').length },
    { id: 'recruitment', label: 'Recruitment', count: allClients.filter(c => getClientMeta(c.company).category === 'recruitment').length },
  ];

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
          background: `radial-gradient(900px circle at ${mousePos.x}% ${mousePos.y}%, rgba(112, 66, 248, 0.16), rgba(0, 210, 255, 0.06) 45%, transparent 80%)`
        }}
      />

      {/* Multi-Layer Ambient Background Spheres */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] right-[-5%] w-[50%] h-[50%] bg-[#7042f8]/18 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-[10%] left-[-5%] w-[50%] h-[50%] bg-[#00d2ff]/12 rounded-full blur-[150px]" />
        <div className="absolute top-[45%] left-[25%] w-[35%] h-[35%] bg-[#a855f7]/12 rounded-full blur-[170px]" />
      </div>

      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.05] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative px-4 sm:px-6 lg:px-8">
        {/* Section Header & Metrics */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-indigo-500/10 border border-purple-400/30 text-cyan-300 shadow-[0_0_20px_rgba(168,85,247,0.2)] backdrop-blur-md mb-4"
            >
              <Sparkles size={13} className="text-secondary animate-spin-slow" />
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase bg-gradient-to-r from-white via-slate-200 to-cyan-200 bg-clip-text text-transparent">
                Career Milestones & Engagements
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl lg:text-7xl font-black mb-4 leading-tight tracking-tight text-white filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
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
              Proven track record delivering scalable enterprise platforms, full-stack client web applications, and robust Java REST architectures.
            </motion.p>
          </div>

          {/* Quick Metrics */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 p-5 px-8 rounded-3xl bg-slate-900/70 border border-white/15 backdrop-blur-2xl self-start lg:self-auto shadow-[0_10px_35px_rgba(0,0,0,0.4)]"
          >
            <div className="text-center sm:text-right">
              <div className="text-3xl font-black bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent filter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                {allClients.length + 1}
              </div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Delivered Projects</div>
            </div>
            <div className="w-[1px] h-10 bg-white/10" />
            <div className="text-center sm:text-right">
              <div className="text-3xl font-black bg-gradient-to-r from-[#a855f7] via-[#7042f8] to-[#00d2ff] bg-clip-text text-transparent filter drop-shadow-[0_0_20px_rgba(112,66,248,0.6)]">
                2+
              </div>
              <div className="text-[10px] font-bold text-cyan-300 uppercase tracking-widest mt-0.5">Years Experience</div>
            </div>
          </motion.div>
        </div>

        {/* 1. FREELANCE HERO SHOWCASE CARD */}
        {freelanceEntry && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 relative"
          >
            <div className="rounded-[2.5rem] bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-950/90 border border-purple-500/30 backdrop-blur-2xl p-6 sm:p-10 lg:p-12 shadow-[0_20px_60px_rgba(112,66,248,0.2)] overflow-hidden relative group">
              {/* Subtle top glowing ambient gradient */}
              <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_25px_rgba(0,210,255,0.8)]" />

              {/* Header Row */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/25 via-indigo-500/25 to-cyan-500/25 border border-purple-400/40 flex items-center justify-center text-cyan-300 shadow-[0_0_25px_rgba(112,66,248,0.35)] shrink-0">
                    <Briefcase size={28} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                        Freelance Practice
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 text-xs sm:text-sm font-semibold mt-1">
                      <Calendar size={14} className="text-cyan-400" />
                      <span>{freelanceEntry.period}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-black tracking-widest uppercase shadow-[0_0_20px_rgba(52,211,153,0.25)]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Active Practice
                </div>
              </div>

              {/* Role Title & Subtitle */}
              <div className="mb-8">
                <h4 className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-200">
                  {freelanceEntry.role}
                </h4>
                <p className="text-slate-300/90 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
                  Delivering end-to-end full stack web applications, RESTful API architectures, analytical dashboards, and responsive customer interfaces across diverse industries.
                </p>
              </div>

              {/* 3 Pillars / Core Capabilities Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-400/30 hover:bg-white/[0.06] transition-all">
                  <div className="w-9 h-9 rounded-xl bg-purple-500/15 text-purple-300 flex items-center justify-center mb-3 border border-purple-500/30">
                    <Layers size={18} />
                  </div>
                  <h5 className="text-white font-bold text-sm mb-1.5">Multi-Domain Delivery</h5>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Full-stack web applications across 4 business domains with Java, Spring Boot, React.js, and PHP.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/30 hover:bg-white/[0.06] transition-all">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/15 text-cyan-300 flex items-center justify-center mb-3 border border-cyan-500/30">
                    <Zap size={18} />
                  </div>
                  <h5 className="text-white font-bold text-sm mb-1.5">API & UI Architecture</h5>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    High-performance REST APIs, database query optimization, dashboards, and responsive modern UIs.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-400/30 hover:bg-white/[0.06] transition-all">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/15 text-emerald-300 flex items-center justify-center mb-3 border border-emerald-500/30">
                    <CheckCircle2 size={18} />
                  </div>
                  <h5 className="text-white font-bold text-sm mb-1.5">End-to-End Ownership</h5>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Managed projects from requirements and database architecture to testing, deployment, and maintenance.
                  </p>
                </div>
              </div>

              {/* CLIENT ENGAGEMENTS HEADER & FILTER BAR */}
              <div className="pt-8 border-t border-white/10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      <FolderGit2 size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-black text-white">
                        Selected Client Projects & Engagements
                      </h4>
                      <p className="text-xs text-slate-400">
                        {allClients.length} client projects successfully built and deployed
                      </p>
                    </div>
                  </div>

                  {/* Filter Tabs */}
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                          activeCategory === cat.id
                            ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-[0_0_15px_rgba(112,66,248,0.4)]'
                            : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/5'
                        }`}
                      >
                        <span>{cat.label}</span>
                        <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-black/30">
                          {cat.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* CLIENT CARDS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  <AnimatePresence mode="popLayout">
                    {filteredClients.map((clientItem, cIdx) => {
                      const meta = getClientMeta(clientItem.company);
                      const clientTech = getTechStack(clientItem.description);
                      const displayPeriod = cleanPeriod(clientItem.period);

                      return (
                        <motion.div
                          layout
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.3, delay: cIdx * 0.04 }}
                          key={clientItem.company}
                          whileHover={{ y: -4 }}
                          onClick={() => setSelectedExp(clientItem)}
                          className="p-6 rounded-3xl bg-slate-950/70 border border-white/10 hover:border-cyan-400/50 hover:bg-slate-900/90 transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-5 shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:shadow-[0_0_35px_rgba(112,66,248,0.25)] group/card relative overflow-hidden"
                        >
                          {/* Top Card Ambient Gradient */}
                          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none group-hover/card:bg-cyan-500/15 transition-all" />

                          <div className="space-y-4 relative z-10">
                            {/* Card Top Pill: Domain Badge & Period */}
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold border ${meta.color}`}>
                                {meta.icon}
                                {meta.label}
                              </span>

                              <span className="text-[11px] font-semibold text-slate-400 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5">
                                {displayPeriod}
                              </span>
                            </div>

                            {/* Client & Role Titles */}
                            <div>
                              <h5 className="font-black text-white text-lg group-hover/card:text-cyan-300 transition-colors leading-snug">
                                {clientItem.company}
                              </h5>
                              <div className="text-xs font-extrabold text-purple-300 mt-1 flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                                {clientItem.role}
                              </div>
                            </div>

                            {/* Bullet Deliverables */}
                            <div className="space-y-2">
                              {clientItem.description.map((desc, dIdx) => (
                                <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed font-normal">
                                  <span className="text-cyan-400 text-sm leading-none mt-0.5 shrink-0">•</span>
                                  <span>{desc}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Card Footer: Tech Stack & CTA */}
                          <div className="pt-4 border-t border-white/5 relative z-10 flex flex-wrap items-center justify-between gap-2">
                            <div className="flex flex-wrap gap-1.5">
                              {clientTech.slice(0, 3).map((tag, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="text-[10px] font-bold uppercase px-2.5 py-1 bg-slate-800/90 text-cyan-300 rounded-lg border border-white/10 group-hover/card:border-cyan-400/30"
                                >
                                  {tag}
                                </span>
                              ))}
                              {clientTech.length > 3 && (
                                <span className="text-[9px] font-bold text-slate-400 px-1.5 py-1 bg-white/5 rounded-md">
                                  +{clientTech.length - 3}
                                </span>
                              )}
                            </div>

                            <span className="inline-flex items-center gap-1 text-xs font-bold text-cyan-400 group-hover/card:translate-x-1 transition-transform ml-auto">
                              Details <ArrowUpRight size={14} />
                            </span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* 2. NIT SOLUTION CORPORATE EXPERIENCE CARD */}
        {experience.filter(exp => exp.company !== 'Freelance').map((exp, idx) => {
          const techTags = getTechStack(exp.description);
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-[2.5rem] bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-950/80 border border-white/15 backdrop-blur-2xl p-6 sm:p-10 lg:p-12 shadow-[0_15px_50px_rgba(0,0,0,0.4)] overflow-hidden relative group">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-400/30 flex items-center justify-center text-cyan-300 shadow-inner shrink-0">
                      <Building2 size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                        {exp.company}
                      </h3>
                      <div className="flex items-center gap-2 text-slate-400 text-xs sm:text-sm font-semibold mt-1">
                        <Calendar size={14} className="text-secondary" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-bold tracking-widest uppercase">
                    Completed Role
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-200">
                    {exp.role}
                  </h4>
                  <p className="text-slate-300/90 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
                    Assisted senior engineering teams with Java enterprise application development, RESTful API implementation, and database persistence.
                  </p>
                </div>

                {/* 3 Highlights Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {exp.description.map((desc, dIdx) => (
                    <div key={dIdx} className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] transition-all flex flex-col justify-between">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-xl bg-purple-500/15 text-cyan-300 flex items-center justify-center shrink-0 border border-purple-500/30 mt-0.5">
                          <CheckCircle2 size={16} />
                        </div>
                        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                          {desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer Tech Tags */}
                <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {techTags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-bold uppercase px-3 py-1.5 bg-slate-800/80 text-cyan-300 rounded-xl border border-white/10"
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
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* DETAILED MODAL */}
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
              className="w-full max-w-3xl max-h-[90vh] bg-slate-900/95 backdrop-blur-2xl rounded-[2.5rem] border border-white/15 shadow-[0_0_60px_rgba(112,66,248,0.4)] overflow-y-auto relative z-10 custom-scrollbar"
            >
              {/* Modal Top Bar */}
              <div className="sticky top-0 p-6 sm:p-8 flex justify-between items-center bg-slate-900/90 backdrop-blur-xl border-b border-white/10 z-20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center text-cyan-300 border border-purple-500/30">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white leading-tight">{selectedExp.company}</h3>
                    <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">
                      Project & Role Breakdown
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
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Role</span>
                      <h2 className="text-2xl sm:text-3xl font-black text-white">{selectedExp.role}</h2>
                    </div>

                    <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-cyan-300 text-xs font-bold">
                      <Calendar size={14} />
                      <span>{cleanPeriod(selectedExp.period) || selectedExp.period}</span>
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
                    <CheckCircle2 size={14} className="text-purple-400" /> Deliverables & Technical Contributions
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
                          <CheckCircle2 size={14} />
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed">{item}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

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

