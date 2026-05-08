import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Work <span className="text-secondary">Experience</span>
          </motion.h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
        </div>

        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-12 lg:ml-24">
          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="mb-12 relative pl-10 group"
            >
              {/* Timeline dot */}
              <div className="absolute w-5 h-5 bg-primary border-4 border-secondary rounded-full -left-[11px] top-1 group-hover:scale-125 transition-transform duration-300" />
              
              <div className="p-8 rounded-3xl glass border border-white/5 hover:border-secondary/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                    <div className="flex items-center text-secondary font-medium">
                      <Briefcase size={16} className="mr-2" />
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex items-center text-slate-400 bg-white/5 px-4 py-2 rounded-full text-sm">
                    <Calendar size={16} className="mr-2" />
                    {exp.period}
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
