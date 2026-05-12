import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experience } from '../data';
import { Calendar, Building2, MapPin, Sparkles, Award, ArrowUpRight, X, CheckCircle, Briefcase, ChevronRight, Layers } from 'lucide-react';

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState(null);

  return (
    <section id="experience" className="section-padding relative overflow-hidden bg-[#030014]">
      {/* Refined Background Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none opacity-40 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none opacity-40" />
      
      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-24">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md"
            >
              <Award size={14} className="text-secondary" />
              <span className="text-[10px] font-black tracking-[0.4em] text-secondary uppercase">Milestones</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-black mb-8 leading-none tracking-tighter text-white"
            >
              My <span className="gradient-text">Experience</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 text-lg leading-relaxed font-medium"
            >
              A professional journey dedicated to building robust enterprise applications. 
              Specializing in high-performance Java backends and dynamic frontend architectures.
            </motion.p>
          </div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="hidden lg:flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
          >
             <div className="text-right">
                <div className="text-2xl font-black text-white">{experience.length}</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Total Roles</div>
             </div>
             <div className="w-[1px] h-10 bg-white/10" />
             <div className="text-right">
                <div className="text-2xl font-black text-secondary">2+</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Years Experience</div>
             </div>
          </motion.div>
        </div>

        <div className="relative max-w-5xl mx-auto pl-12 md:pl-24">
          <div className="space-y-20">
            {experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative"
              >
                {/* Timeline Indicator Hub */}
                <div className="absolute -left-[12px] md:-left-[24px] top-8 -translate-x-1/2 z-20">
                   <div className="relative flex items-center justify-center">
                     <div className="w-6 h-6 rounded-full bg-primary border-2 border-secondary shadow-[0_0_15px_rgba(112,66,248,0.5)] flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                     </div>
                   </div>
                </div>

                <div className="group relative">
                  {/* Floating Date Label (Desktop) */}
                  <div className="absolute -left-36 top-8 hidden lg:block text-right w-24">
                     <span className="text-[10px] font-black text-slate-500 tracking-widest uppercase block mb-1">Period</span>
                     <span className="text-xs font-bold text-white whitespace-nowrap">{exp.period.split(' – ')[0]}</span>
                  </div>

                  <motion.div 
                    whileHover={{ x: 10 }}
                    onClick={() => setSelectedExp(exp)}
                    className="p-8 md:p-12 rounded-[2.5rem] glass border border-white/5 hover:border-secondary/30 transition-all duration-500 relative overflow-hidden cursor-pointer"
                  >
                    {/* Inner Glow Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="relative z-10 space-y-8">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="flex items-center gap-5">
                          <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:scale-110 group-hover:bg-secondary/20 group-hover:text-secondary transition-all duration-500">
                             <Building2 size={32} />
                          </div>
                          <div>
                            <h4 className="text-2xl font-black text-white group-hover:text-secondary transition-colors mb-1">{exp.company}</h4>
                            <div className="flex items-center gap-2 text-slate-500 text-[10px] font-black uppercase tracking-widest">
                               <MapPin size={12} className="text-secondary" />
                               <span>{exp.period}</span>
                            </div>
                          </div>
                        </div>
                        
                        {exp.period.includes('Present') && (
                           <div className="px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-[10px] font-black tracking-widest uppercase flex items-center gap-2 self-start md:self-center">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                              Active Role
                           </div>
                        )}
                      </div>

                      <div className="space-y-6">
                         <h3 className="text-3xl font-black text-white leading-tight">
                            {exp.role}
                         </h3>
                         
                         <div className="grid md:grid-cols-2 gap-4">
                            {exp.description.slice(0, 2).map((item, i) => (
                              <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 group/item hover:bg-white/[0.08] transition-colors">
                                 <div className="mt-1.5 w-1 h-1 rounded-full bg-secondary group-hover/item:scale-150 transition-all" />
                                 <p className="text-slate-400 text-sm leading-relaxed group-hover/item:text-slate-200 transition-colors line-clamp-2">
                                    {item}
                                 </p>
                              </div>
                            ))}
                         </div>
                      </div>

                      {/* Dynamic Tech Stack Pills */}
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                         {Array.from(new Set(exp.description.join(' ').match(/(Java|Spring Boot|React\.js|React|Angular|MySQL|MongoDB|PostgreSQL|REST API|JWT|PHP|Tailwind|Bootstrap|Hibernate|XSS|CSRF|Microservices|AWS|Git|Maven|npm)/gi) || [])).slice(0, 4).map((tag, i) => (
                           <span key={i} className="text-[9px] font-black tracking-[0.2em] uppercase px-3 py-1.5 bg-secondary/5 text-secondary rounded-lg border border-secondary/10 hover:bg-secondary hover:text-white transition-all cursor-default">
                             {tag}
                           </span>
                         ))}
                         <button 
                            onClick={(e) => {
                               e.stopPropagation();
                               setSelectedExp(exp);
                            }}
                            className="ml-auto flex items-center gap-1 text-[10px] font-bold text-slate-600 group-hover:text-secondary transition-colors"
                         >
                            View Details <ArrowUpRight size={14} />
                         </button>
                      </div>
                    </div>

                    {/* Subtle Background Accent */}
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/5 rounded-full blur-[80px] group-hover:bg-secondary/10 transition-all" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Experience Details Modal */}
      <AnimatePresence>
        {selectedExp && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedExp(null)}
              className="absolute inset-0 bg-primary/80 backdrop-blur-xl"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-4xl max-h-[90vh] bg-primary/50 rounded-[3rem] border border-white/10 shadow-2xl overflow-y-auto relative z-10 glass custom-scrollbar"
            >
              {/* Modal Header */}
              <div className="sticky top-0 p-8 flex justify-between items-center bg-primary/20 backdrop-blur-xl border-b border-white/5 z-20">
                <div className="flex items-center gap-3">
                   <button 
                     onClick={() => setSelectedExp(null)}
                     className="p-2 rounded-full bg-white/5 text-slate-400 hover:text-white transition-colors"
                   >
                     ← Back
                   </button>
                   <div className="h-4 w-[1px] bg-white/10 mx-2" />
                   <span className="text-xs font-bold tracking-[0.3em] text-slate-500 uppercase">Role Details</span>
                </div>
                <button 
                  onClick={() => setSelectedExp(null)}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-red-500/20 hover:text-red-500 transition-all"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-8 md:p-12">
                <div className="grid lg:grid-cols-5 gap-12">
                  {/* Left Side: Summary & Meta */}
                  <div className="lg:col-span-2 space-y-8">
                    <div>
                        <div className="w-20 h-20 rounded-[2rem] bg-secondary/10 flex items-center justify-center text-secondary mb-6 border border-secondary/20">
                           <Building2 size={40} />
                        </div>
                        <h2 className="text-3xl font-black text-white mb-2">{selectedExp.company}</h2>
                        <div className="flex items-center gap-2 text-slate-400 text-sm">
                           <Calendar size={14} className="text-secondary" />
                           {selectedExp.period}
                        </div>
                    </div>

                    <div className="p-6 rounded-[2rem] bg-white/5 border border-white/5 space-y-4">
                       <div className="flex items-center gap-2 text-secondary">
                          <Briefcase size={16} />
                          <span className="text-[10px] font-bold uppercase tracking-widest">Position</span>
                       </div>
                       <div className="text-xl font-bold text-white">{selectedExp.role}</div>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center">
                        <Layers size={14} className="mr-2" /> Key Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {Array.from(new Set(selectedExp.description.join(' ').match(/(Java|Spring Boot|React\.js|React|Angular|MySQL|MongoDB|PostgreSQL|REST API|JWT|PHP|Tailwind|Bootstrap|Hibernate|XSS|CSRF|Microservices|AWS|Git|Maven|npm)/gi) || [])).map((tag, i) => (
                           <span key={i} className="px-3 py-1.5 rounded-xl bg-secondary/10 text-secondary text-[10px] font-bold border border-secondary/20">
                             {tag}
                           </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Side: Detailed Contributions */}
                  <div className="lg:col-span-3 space-y-8">
                    <div>
                       <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6 flex items-center">
                          <CheckCircle size={14} className="mr-2 text-secondary" /> Responsibilities & Impact
                       </h4>
                       <div className="space-y-6">
                          {selectedExp.description.map((item, i) => (
                             <motion.div 
                               initial={{ opacity: 0, x: 20 }}
                               animate={{ opacity: 1, x: 0 }}
                               transition={{ delay: i * 0.1 }}
                               key={i} 
                               className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 group hover:bg-white/[0.08] transition-all"
                             >
                                <div className="mt-1 w-6 h-6 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20 group-hover:bg-secondary group-hover:text-white transition-all">
                                   <ChevronRight size={14} />
                                </div>
                                <p className="text-slate-300 text-sm leading-relaxed">{item}</p>
                             </motion.div>
                          ))}
                       </div>
                    </div>

                    <div className="p-8 rounded-[2rem] bg-gradient-to-br from-secondary/10 to-transparent border border-secondary/20 relative overflow-hidden group">
                       <Sparkles className="absolute top-4 right-4 text-secondary/20 group-hover:scale-125 transition-transform" />
                       <h4 className="text-white font-bold mb-2">Technical Proficiency</h4>
                       <p className="text-slate-400 text-sm">Contributed to high-scale architecture and security implementations using modern development standards.</p>
                    </div>
                  </div>
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
