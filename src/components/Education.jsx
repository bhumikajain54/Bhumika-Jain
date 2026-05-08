import React from 'react';
import { motion } from 'framer-motion';
import { education, certifications, achievements } from '../data';
import { GraduationCap, Award, CheckCircle } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education Column */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center text-secondary">
                <GraduationCap size={28} />
              </div>
              <h2 className="text-3xl font-bold">Education</h2>
            </div>

            <div className="space-y-8">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative pl-8 border-l-2 border-slate-800"
                >
                  <div className="absolute w-4 h-4 bg-primary border-2 border-secondary rounded-full -left-[9px] top-1" />
                  <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                  <p className="text-secondary font-medium mb-1">{edu.institution}</p>
                  <p className="text-sm text-slate-500">{edu.period}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications & Achievements Column */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center text-accent">
                <Award size={28} />
              </div>
              <h2 className="text-3xl font-bold">Certifications & Awards</h2>
            </div>

            <div className="space-y-12">
              <div>
                <h3 className="text-lg font-bold text-slate-400 uppercase tracking-widest mb-6">Professional Certs</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {certifications.map((cert, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.02 }}
                      className="p-4 rounded-xl glass border border-white/5 flex items-center gap-3"
                    >
                      <CheckCircle className="text-accent flex-shrink-0" size={18} />
                      <span className="text-sm text-slate-300">{cert}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-400 uppercase tracking-widest mb-6">Key Achievements</h3>
                <div className="space-y-4">
                  {achievements.map((ach, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                       <div className="mt-1 w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
                       <p className="text-slate-300">{ach}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
