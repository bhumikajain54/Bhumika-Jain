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

        <div className="max-w-3xl mx-auto w-full">
          <div className="flex flex-col">
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

