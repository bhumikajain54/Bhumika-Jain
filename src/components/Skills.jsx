import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data';

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Technical <span className="text-secondary">Skills</span>
          </motion.h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl glass hover:bg-white/5 transition-all duration-300 border border-white/5 hover:border-secondary/30 group"
            >
              <h3 className="text-xl font-bold mb-6 text-white group-hover:text-secondary transition-colors">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 rounded-xl bg-primary/40 text-slate-300 text-sm font-medium border border-white/5 hover:border-accent/30 hover:text-accent transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Visual Decoration */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-secondary/10 to-accent/10 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold mb-2">Constantly Learning</h4>
            <p className="text-slate-400">Exploring new frameworks and best practices to build better software.</p>
          </div>
          <div className="flex gap-4">
             <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center animate-bounce">
                <span className="text-secondary font-bold">🚀</span>
             </div>
             <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center animate-bounce [animation-delay:0.2s]">
                <span className="text-accent font-bold">💡</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
