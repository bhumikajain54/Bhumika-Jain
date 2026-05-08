import React from 'react';
import { motion } from 'framer-motion';
import { personalDetails } from '../data';
import { Mail, Phone, MapPin, Send, MessageSquare, Share2 } from 'lucide-react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-primary min-h-screen flex items-center">
      {/* Background Decorative Glows */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative w-full">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight"
          >
            Contact <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg font-medium max-w-xl mx-auto"
          >
            Got a question? Send me a message, and I'll get back to you soon.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Form & Socials */}
          <div className="lg:col-span-5 space-y-10">
            {/* Contact Form Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-[3rem] glass-premium border border-white/5 relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Get in Touch</h3>
                  <p className="text-sm text-slate-500">Have something to discuss? Send me a message and let's talk.</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400">
                  <Share2 size={18} />
                </div>
              </div>

              <form className="space-y-6">
                <div className="relative group">
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-secondary transition-colors">
                    <MessageSquare size={18} />
                  </div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-16 py-5 focus:outline-none focus:border-secondary/50 transition-all text-white placeholder:text-slate-600 focus:bg-white/[0.08]"
                  />
                </div>

                <div className="relative group">
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-secondary transition-colors">
                    <Mail size={18} />
                  </div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-16 py-5 focus:outline-none focus:border-secondary/50 transition-all text-white placeholder:text-slate-600 focus:bg-white/[0.08]"
                  />
                </div>

                <div className="relative group">
                  <div className="absolute left-6 top-6 text-slate-500 group-focus-within:text-secondary transition-colors">
                    <MessageSquare size={18} />
                  </div>
                  <textarea
                    rows="4"
                    placeholder="Your Message"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-16 py-5 focus:outline-none focus:border-secondary/50 transition-all text-white placeholder:text-slate-600 resize-none focus:bg-white/[0.08]"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full h-16 rounded-2xl bg-gradient-to-r from-secondary to-purple-600 text-white font-bold flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(112,66,248,0.3)] hover:shadow-[0_15px_40px_rgba(112,66,248,0.5)] transition-all"
                >
                  <Send size={18} />
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Social Grid Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-10 rounded-[3rem] glass-premium border border-white/5"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-white/10" />
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Connect With Me</span>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent via-white/10 to-white/10" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Let's Connect", sub: "on LinkedIn", icon: <FaLinkedin className="text-blue-500" />, href: personalDetails.linkedin, textColor: "text-blue-500" },
                  { label: "Instagram", sub: "@yovexaprime", icon: <FaInstagram className="text-pink-500" />, href: personalDetails.Instagram, textColor: "text-pink-500" },
                  { label: "GitHub", sub: "@bhumikajain54", icon: <FaGithub className="text-white" />, href: personalDetails.github, textColor: "text-white" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-5 rounded-3xl bg-primary-light/30 border border-white/5 hover:border-secondary/50 transition-all group flex items-center gap-5 hover:bg-white/5 shadow-lg"
                  >
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                    <div>
                      <p className={`text-sm font-bold ${social.textColor} group-hover:brightness-125 transition-all`}>{social.label}</p>
                      {social.sub && <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-widest">{social.sub}</p>}
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Comments Mockup */}
          <div className="lg:col-span-7 h-full">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-12 rounded-[4rem] glass-premium border border-white/5 h-full relative overflow-hidden bg-white/[0.02]"
            >
              <div className="flex items-center gap-3 mb-10 text-white">
                <MessageSquare size={24} className="text-secondary" />
                <h3 className="text-2xl font-bold tracking-tight">Comments <span className="text-slate-600 text-lg ml-1">(1)</span></h3>
              </div>

              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Name *</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-secondary/30 transition-all text-white placeholder:text-slate-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Message *</label>
                    <textarea
                      rows="6"
                      placeholder="Write your message here..."
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-secondary/30 transition-all text-white placeholder:text-slate-600 resize-none"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Profile Photo (optional)</label>
                    <div className="w-full border-2 border-dashed border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center gap-3 hover:border-secondary/30 transition-all cursor-pointer group">
                      <Share2 size={24} className="text-slate-600 group-hover:text-secondary transition-colors" />
                      <span className="text-xs font-bold text-slate-500">Choose Profile Photo</span>
                      <span className="text-[8px] text-slate-700 uppercase tracking-wider">Max file size: 5mb</span>
                    </div>
                  </div>

                  <button className="w-full h-14 rounded-2xl bg-secondary/80 text-white font-bold flex items-center justify-center gap-3 hover:bg-secondary transition-all shadow-lg">
                    <Send size={16} />
                    Post Comment
                  </button>
                </div>

                {/* Sample Comment */}
                <div className="pt-10 border-t border-white/5">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-secondary to-purple-600 flex items-center justify-center font-bold text-white border-2 border-white/10">
                      BJ
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-sm font-bold text-white">Bhumika Jain</h4>
                        <span className="text-[10px] text-slate-600 font-bold">Just now</span>
                      </div>
                      <p className="text-sm text-slate-400 leading-relaxed">Excited to collaborate on your next big project! Reach out today.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Decorative Element */}
              <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-secondary/5 rounded-full blur-[100px] -z-10" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

