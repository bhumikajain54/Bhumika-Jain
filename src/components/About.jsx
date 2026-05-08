import React from 'react';
import { motion } from 'framer-motion';
import { personalDetails, projects, skills } from '../data';
import { Code, Database, Layout, Server, Globe, Shield } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: <Code className="text-secondary" />, title: "Development", desc: "Crafting clean, efficient code for complex problems." },
    { icon: <Server className="text-accent" />, title: "API", desc: "Designing robust and scalable RESTful architectures." },
    { icon: <Database className="text-secondary" />, title: "Database", desc: "Optimizing data structures and query performance." },
  ];

  const projectCount = projects.length;
  const techCount = skills.reduce((acc, curr) => acc + curr.items.length, 0);

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-secondary">Me</span>
            </h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              {personalDetails.summary}
            </p>
            <div className="flex flex-wrap gap-8">
              <div>
                <h3 className="text-3xl font-bold text-white">2+</h3>
                <p className="text-slate-500">Years Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">{projectCount}+</h3>
                <p className="text-slate-500">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">{techCount}+</h3>
                <p className="text-slate-500">Technologies</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, i) => (
              <div 
                key={i} 
                className={`p-6 rounded-2xl glass ${i === 0 ? 'sm:col-span-2' : ''} hover:border-secondary/50 transition-colors group`}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
