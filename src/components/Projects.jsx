import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data';
import { ExternalLink, Layers } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Featured <span className="text-secondary">Projects</span>
          </motion.h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative rounded-3xl overflow-hidden glass border border-white/10 flex flex-col h-full"
            >
              {/* Project Image Placeholder / Icon */}
              <div className="h-48 bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-500 overflow-hidden relative">
                <Layers className="text-white/20 w-24 h-24 absolute rotate-12 -right-4 -bottom-4" />
                <div className="z-10 text-white font-bold text-xl px-6 text-center">{project.title}</div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white">{project.title}</h3>
                
                <ul className="space-y-2 mb-8 flex-grow">
                  {project.features.map((feature, i) => (
                    <li key={i} className="text-slate-400 text-sm flex items-start">
                      <span className="text-accent mr-2">▹</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                  <a href={project.github} className="flex items-center text-sm font-medium text-slate-300 hover:text-white transition-colors group/link">
                    <FaGithub size={18} className="mr-2" />
                    Code
                    <ExternalLink size={14} className="ml-1 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                  </a>
                  <a href={project.demo} className="flex items-center text-sm font-medium text-slate-300 hover:text-white transition-colors group/link">
                    Live Demo
                    <ExternalLink size={16} className="ml-2 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
