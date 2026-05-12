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

        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Form */}
          <div className="lg:col-span-5 flex flex-col">
            {/* Contact Form Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-[3rem] glass-premium border border-white/5 relative overflow-hidden h-full flex flex-col"
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
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-secondary transition-colors">
                    <Phone size={18} />
                  </div>
                  <input
                    type="tel"
                    placeholder="Your Phone Number"
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
                    <div className="w-full relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-secondary/20 to-purple-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                      <div className="relative w-full border border-white/10 rounded-2xl p-5 flex items-center gap-6 hover:border-secondary/30 transition-all cursor-pointer bg-white/[0.02] hover:bg-white/[0.04]">
                        <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-secondary group-hover:bg-secondary/10 transition-all border border-white/5">
                          <Share2 size={22} />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-bold text-white mb-1">Click to upload photo</p>
                          <p className="text-[10px] text-slate-500 uppercase tracking-wider">PNG, JPG or WEBP (Max 5MB)</p>
                        </div>
                        <div className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center text-slate-600 group-hover:border-secondary/30 group-hover:text-secondary transition-all">
                          <Send size={14} className="rotate-[-45deg] group-hover:rotate-0 transition-transform duration-500" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <button className="w-full h-14 rounded-2xl bg-secondary/80 text-white font-bold flex items-center justify-center gap-3 hover:bg-secondary transition-all shadow-lg">
                    <Send size={16} />
                    Post Comment
                  </button>
                </div>


              </div>

              {/* Background Decorative Element */}
              <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-secondary/5 rounded-full blur-[100px] -z-10" />
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-12 p-8 md:p-12 rounded-[3rem] glass-premium border border-white/5 relative overflow-hidden"
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-secondary/20 to-secondary/20" />
            <span className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">Connect & Reach Out</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-secondary/20 to-secondary/20" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                label: "Email Addresses", 
                icon: <Mail className="text-cyan-500" />, 
                bgColor: "bg-cyan-500/10", 
                borderColor: "hover:border-cyan-500/50",
                links: [
                  { val: personalDetails.email, href: `mailto:${personalDetails.email}` },
                  { val: personalDetails.email2, href: `mailto:${personalDetails.email2}` }
                ]
              },
              { 
                label: "Phone Numbers", 
                icon: <Phone className="text-green-500" />, 
                bgColor: "bg-green-500/10", 
                borderColor: "hover:border-green-500/50",
                links: [
                  { val: personalDetails.phone, href: `tel:${personalDetails.phone.replace(/[-\s]/g, '')}` },
                  { val: personalDetails.phone2, href: `tel:${personalDetails.phone2.replace(/[-\s]/g, '')}` }
                ]
              },
              { 
                label: "Location", 
                sub: personalDetails.location, 
                icon: <MapPin className="text-red-500" />, 
                href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(personalDetails.location)}`, 
                bgColor: "bg-red-500/10", 
                borderColor: "hover:border-red-500/50" 
              },
              { 
                label: "LinkedIn", 
                sub: "Professional Profile", 
                icon: <FaLinkedin className="text-blue-500" />, 
                href: personalDetails.linkedin, 
                bgColor: "bg-blue-500/10", 
                borderColor: "hover:border-blue-500/50" 
              },
              { 
                label: "Instagram", 
                sub: "@yovexaprime", 
                icon: <FaInstagram className="text-pink-500" />, 
                href: personalDetails.Instagram, 
                bgColor: "bg-pink-500/10", 
                borderColor: "hover:border-pink-500/50" 
              },
              { 
                label: "GitHub", 
                sub: "@bhumikajain54", 
                icon: <FaGithub className="text-white" />, 
                href: personalDetails.github, 
                bgColor: "bg-white/10", 
                borderColor: "hover:border-white/50" 
              },
            ].map((social, i) => (
              social.links ? (
                <div
                  key={i}
                  className={`p-6 rounded-3xl bg-white/[0.03] border border-white/5 ${social.borderColor} transition-all duration-300 group flex items-start gap-5 hover:bg-white/[0.06] shadow-xl relative overflow-hidden`}
                >
                  <div className={`w-12 h-12 rounded-2xl ${social.bgColor} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 relative z-10 shrink-0`}>
                    {social.icon}
                  </div>
                  <div className="min-w-0 relative z-10 flex-1">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">{social.label}</p>
                    <div className="space-y-1">
                      {social.links.map((link, idx) => (
                        <a 
                          key={idx} 
                          href={link.href} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block text-sm font-medium text-white hover:text-secondary transition-colors truncate"
                        >
                          {link.val}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className={`absolute top-0 right-0 w-24 h-24 ${social.bgColor} blur-[50px] opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                </div>
              ) : (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-6 rounded-3xl bg-white/[0.03] border border-white/5 ${social.borderColor} transition-all duration-300 group flex items-center gap-5 hover:bg-white/[0.06] shadow-xl relative overflow-hidden`}
                >
                  <div className={`w-12 h-12 rounded-2xl ${social.bgColor} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 relative z-10 shrink-0`}>
                    {social.icon}
                  </div>
                  <div className="min-w-0 relative z-10">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">{social.label}</p>
                    <p className="text-sm font-medium text-white truncate group-hover:text-secondary transition-colors">{social.sub}</p>
                  </div>
                  <div className={`absolute top-0 right-0 w-24 h-24 ${social.bgColor} blur-[50px] opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                </a>
              )
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

