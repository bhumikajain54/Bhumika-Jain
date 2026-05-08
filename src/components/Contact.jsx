import React from 'react';
import { motion } from 'framer-motion';
import { personalDetails } from '../data';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get In <span className="text-secondary">Touch</span>
            </h2>
            <p className="text-lg text-slate-400 mb-12">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-secondary border-secondary/20 border">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">Email Me</p>
                  <a href={`mailto:${personalDetails.email}`} className="text-lg font-medium text-white hover:text-secondary transition-colors">
                    {personalDetails.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-accent border-accent/20 border">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">Call Me</p>
                  <a href={`tel:${personalDetails.phone}`} className="text-lg font-medium text-white hover:text-secondary transition-colors">
                    {personalDetails.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-secondary border-secondary/20 border">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">Location</p>
                  <p className="text-lg font-medium text-white">{personalDetails.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
                <a href={personalDetails.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:bg-secondary hover:text-white transition-all">
                  <FaGithub size={20} />
                </a>
                <a href={personalDetails.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:bg-secondary hover:text-white transition-all">
                  <FaLinkedin size={20} />
                </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl glass border border-white/10"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-primary/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary transition-colors text-white"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-primary/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary transition-colors text-white"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Subject</label>
                <input 
                  type="text" 
                  className="w-full bg-primary/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary transition-colors text-white"
                  placeholder="How can I help?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea 
                  rows="4"
                  className="w-full bg-primary/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary transition-colors text-white resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button 
                type="submit"
                className="w-full btn-primary flex items-center justify-center group"
              >
                Send Message
                <Send size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
