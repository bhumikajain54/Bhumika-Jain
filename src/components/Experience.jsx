import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data';
import { Briefcase, Calendar, ChevronRight, Building2, Terminal } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="section-padding relative overflow-hidden bg-primary">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none translate-y-1/4 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6"
          >
            <Briefcase size={14} className="text-secondary" />
            <span className="text-[10px] font-bold tracking-[0.3em] text-secondary uppercase">Career Path</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter"
          >
            Professional <span className="gradient-text glow-text">Experience</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed"
          >
            A chronological journey of my professional growth, technical contributions, and the impact I've made across different organizations.
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Timeline Line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 h-full w-px bg-gradient-to-b from-secondary/40 via-secondary/10 to-transparent" />

          <div className="space-y-24">
            {experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Pulsing Node */}
                <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 md:top-12 z-30">
                  <div className="relative">
                    <motion.div 
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute inset-0 bg-secondary/30 rounded-full blur-md"
                    />
                    <div className="w-4 h-4 bg-primary border-2 border-secondary rounded-full relative z-10 shadow-[0_0_15px_rgba(112,66,248,0.8)]" />
                  </div>
                </div>

                {/* Content Side */}
                <div className={`w-full md:w-[45%] pl-20 md:pl-0 ${idx % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="p-10 rounded-[3rem] glass-premium border border-white/5 hover:border-secondary/40 transition-all duration-700 group relative overflow-hidden"
                  >
                    {/* Background Accent */}
                    <div className="absolute -top-12 -right-12 w-32 h-32 bg-secondary/5 rounded-full blur-3xl group-hover:bg-secondary/10 transition-all duration-700" />
                    
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20 group-hover:scale-110 transition-transform duration-500">
                          <Building2 size={22} />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white group-hover:text-secondary transition-colors">{exp.company}</h4>
                          <div className="flex items-center text-[10px] font-black text-slate-500 uppercase tracking-widest mt-1">
                            <Calendar size={10} className="mr-1.5" />
                            {exp.period}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <h3 className="text-3xl font-black text-white mb-6 tracking-tight leading-tight group-hover:translate-x-2 transition-transform duration-500">
                        {exp.role}
                      </h3>
                      
                      <div className="space-y-4">
                        {exp.description.map((item, i) => (
                          <div key={i} className="flex items-start gap-4 group/item">
                            <div className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary/40 group-hover/item:bg-secondary group-hover/item:scale-125 transition-all shadow-glow" />
                            <p className="text-slate-400 text-sm leading-relaxed group-hover/item:text-slate-200 transition-colors">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Indicator */}
                    <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                       <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Core Impact</span>
                       <ChevronRight size={16} className="text-secondary opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                    </div>
                  </motion.div>
                </div>

                {/* Big Year Watermark */}
                <div className={`hidden md:flex w-[45%] items-center ${idx % 2 === 0 ? 'justify-start pl-16' : 'justify-end pr-16'}`}>
                   <motion.div
                     initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     className="relative"
                   >
                     <span className="text-[120px] font-black text-white/[0.03] tracking-tighter select-none leading-none">
                       {exp.period.split(' – ')[1]?.split(' ')[1] || exp.period.split(' ')[1]}
                     </span>
                     <div className="absolute top-1/2 left-0 w-full h-px bg-white/[0.05] -z-10" />
                   </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

