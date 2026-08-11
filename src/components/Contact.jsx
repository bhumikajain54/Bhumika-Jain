import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalDetails } from '../data';
import { Mail, Phone, MapPin, Send, User, MessageSquare, Sparkles, CheckCircle2, ArrowUpRight, Clock, ShieldCheck, Tag, Eye, EyeOff, Lock } from 'lucide-react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    subject: 'Full-Time Role', 
    message: '' 
  });
  const [submitted, setSubmitted] = useState(false);
  const [showEmails, setShowEmails] = useState(false);
  const [showPhones, setShowPhones] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePos({ x, y });
  };

  const subjects = [
    'Full-Time Role',
    'Freelance Project',
    'Technical Consultation',
    'General Inquiry'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', subject: 'Full-Time Role', message: '' });
      }, 4000);
    }
  };

  return (
    <section
      id="contact"
      onMouseMove={handleMouseMove}
      className="section-padding relative overflow-hidden bg-[#030014] min-h-screen flex items-center select-none py-24"
    >
      {/* Dynamic Mouse Spotlight */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}% ${mousePos.y}%, rgba(112, 66, 248, 0.18), rgba(0, 210, 255, 0.07) 40%, transparent 80%)`
        }}
      />

      {/* Multi-Layer Ambient Background Spheres */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[-5%] w-[45%] h-[45%] bg-[#7042f8]/20 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[45%] h-[45%] bg-[#00d2ff]/15 rounded-full blur-[140px]" />
      </div>

      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.06] pointer-events-none" />

      {/* Decorative Star Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full"
            style={{
              top: `${Math.floor((i * 191.7) % 100)}%`,
              left: `${Math.floor((i * 277.3) % 100)}%`,
            }}
            animate={{
              opacity: [0.15, 0.8, 0.15],
              scale: [1, 1.6, 1]
            }}
            transition={{
              duration: 3 + (i % 4),
              repeat: Infinity,
              delay: (i % 5) * 0.5
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto z-10 relative w-full">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-indigo-500/10 border border-purple-400/30 text-cyan-300 shadow-[0_0_20px_rgba(168,85,247,0.2)] backdrop-blur-md mb-4"
          >
            <Sparkles size={13} className="text-secondary animate-spin-slow" />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase bg-gradient-to-r from-white via-slate-200 to-cyan-200 bg-clip-text text-transparent">
              Let's Connect & Collaborate
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-4 tracking-tight leading-tight filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
          >
            Contact{' '}
            <span className="bg-gradient-to-r from-[#a855f7] via-[#7042f8] to-[#00d2ff] bg-clip-text text-transparent filter drop-shadow-[0_0_40px_rgba(112,66,248,0.75)]">
              Me
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-300/90 text-base sm:text-lg font-medium max-w-2xl mx-auto leading-relaxed"
          >
            Have a project in mind, a hiring opportunity, or want to discuss full-stack solutions? Send a message or connect directly.
          </motion.p>
        </div>

        {/* Unified Equal-Height 2-Column Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch max-w-6xl mx-auto">
          {/* Left Column: Direct Contact & Social (5 Columns) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 h-full flex flex-col"
          >
            <div className="p-8 sm:p-10 rounded-[2.5rem] bg-slate-900/60 backdrop-blur-2xl border border-white/15 hover:border-cyan-400/50 transition-all duration-500 relative overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.4)] hover:shadow-[0_0_45px_rgba(112,66,248,0.35)] h-full flex flex-col justify-between group">
              <div className="relative z-10 space-y-6">
                {/* Header info */}
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/30 flex items-center justify-center text-cyan-300 shadow-inner">
                    <Sparkles size={24} />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white leading-snug">Let's build something extraordinary.</h3>
                  <p className="text-slate-300/80 text-xs sm:text-sm leading-relaxed">
                    Available for full-time roles, freelance projects, and enterprise full-stack development.
                  </p>
                </div>

                {/* Direct Contact Channels */}
                <div className="space-y-3.5 pt-2">
                  {/* Email Card (Completely Hidden Text with Reveal Toggle) */}
                  <div className="p-4 rounded-2xl bg-slate-800/60 border border-white/10 hover:border-cyan-400/40 transition-all duration-300 group/item flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 group-hover/item:scale-110 transition-transform mt-0.5">
                      <Mail size={18} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Email Addresses</span>
                        <button
                          type="button"
                          onClick={() => setShowEmails(!showEmails)}
                          className="text-[10px] font-bold text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1 uppercase tracking-wider"
                        >
                          {showEmails ? <EyeOff size={12} /> : <Eye size={12} />}
                          <span>{showEmails ? 'HIDE EMAIL' : 'VIEW EMAIL'}</span>
                        </button>
                      </div>

                      <AnimatePresence mode="wait">
                        {showEmails ? (
                          <motion.div
                            key="visible-emails"
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className="space-y-1 pt-0.5"
                          >
                            <a href={`mailto:${personalDetails.email}`} className="block text-xs font-bold text-white hover:text-cyan-400 transition-colors truncate">
                              {personalDetails.email}
                            </a>
                            {personalDetails.email2 && (
                              <a href={`mailto:${personalDetails.email2}`} className="block text-[11px] font-medium text-slate-300 hover:text-cyan-400 transition-colors truncate">
                                {personalDetails.email2}
                              </a>
                            )}
                          </motion.div>
                        ) : (
                          <motion.div
                            key="hidden-emails"
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 5 }}
                            onClick={() => setShowEmails(true)}
                            className="flex items-center justify-between cursor-pointer pt-0.5 group/btn"
                          >
                            <span className="text-xs font-semibold text-slate-300 group-hover/btn:text-white transition-colors">
                              Click to view email channels
                            </span>
                            <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 text-[9px] font-black uppercase flex items-center gap-1 border border-cyan-500/20">
                              <Lock size={9} /> Private
                            </span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Phone Card (Completely Hidden Text with Reveal Toggle) */}
                  <div className="p-4 rounded-2xl bg-slate-800/60 border border-white/10 hover:border-emerald-400/40 transition-all duration-300 group/item flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 group-hover/item:scale-110 transition-transform mt-0.5">
                      <Phone size={18} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Phone / WhatsApp</span>
                        <button
                          type="button"
                          onClick={() => setShowPhones(!showPhones)}
                          className="text-[10px] font-bold text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1 uppercase tracking-wider"
                        >
                          {showPhones ? <EyeOff size={12} /> : <Eye size={12} />}
                          <span>{showPhones ? 'HIDE PHONE' : 'VIEW PHONE'}</span>
                        </button>
                      </div>

                      <AnimatePresence mode="wait">
                        {showPhones ? (
                          <motion.div
                            key="visible-phones"
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className="space-y-1 pt-0.5"
                          >
                            <a href={`tel:${personalDetails.phone.replace(/[-\s]/g, '')}`} className="block text-xs font-bold text-white hover:text-emerald-400 transition-colors">
                              {personalDetails.phone}
                            </a>
                            {personalDetails.phone2 && (
                              <a href={`tel:${personalDetails.phone2.replace(/[-\s]/g, '')}`} className="block text-[11px] font-medium text-slate-300 hover:text-emerald-400 transition-colors">
                                {personalDetails.phone2}
                              </a>
                            )}
                          </motion.div>
                        ) : (
                          <motion.div
                            key="hidden-phones"
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 5 }}
                            onClick={() => setShowPhones(true)}
                            className="flex items-center justify-between cursor-pointer pt-0.5 group/btn"
                          >
                            <span className="text-xs font-semibold text-slate-300 group-hover/btn:text-white transition-colors">
                              Click to view phone numbers
                            </span>
                            <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[9px] font-black uppercase flex items-center gap-1 border border-emerald-500/20">
                              <Lock size={9} /> Private
                            </span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Location Card */}
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(personalDetails.location)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-slate-800/60 border border-white/10 hover:border-red-500/40 transition-all duration-300 group/item flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 shrink-0 group-hover/item:scale-110 transition-transform">
                        <MapPin size={18} />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Location</span>
                        <span className="text-xs sm:text-sm font-semibold text-white truncate block group-hover/item:text-cyan-300 transition-colors">
                          {personalDetails.location}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight size={16} className="text-slate-400 group-hover/item:text-cyan-300 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all shrink-0 ml-2" />
                  </a>
                </div>
              </div>

              {/* Social Profiles Grid Footer */}
              <div className="relative z-10 pt-6 mt-6 border-t border-white/10 space-y-3">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Social & Code Profiles</span>
                <div className="grid grid-cols-3 gap-3">
                  <a
                    href={personalDetails.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 hover:bg-blue-500 hover:text-white transition-all flex items-center justify-center gap-2 group text-xs font-bold shadow-sm"
                  >
                    <FaLinkedin size={16} />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={personalDetails.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/20 transition-all flex items-center justify-center gap-2 group text-xs font-bold shadow-sm"
                  >
                    <FaGithub size={16} />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={personalDetails.Instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400 hover:bg-pink-500 hover:text-white transition-all flex items-center justify-center gap-2 group text-xs font-bold shadow-sm"
                  >
                    <FaInstagram size={16} />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>

              {/* Bottom Hover Accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          </motion.div>

          {/* Right Column: Contact Form Panel (7 Columns) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 h-full flex flex-col"
          >
            <div className="p-8 sm:p-10 rounded-[2.5rem] bg-slate-900/60 backdrop-blur-2xl border border-white/15 hover:border-cyan-400/50 transition-all duration-500 relative overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.4)] hover:shadow-[0_0_45px_rgba(112,66,248,0.35)] h-full flex flex-col justify-between group">
              <div className="mb-6 relative z-10">
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-1.5">Send a Message</h3>
                <p className="text-slate-300/80 text-xs sm:text-sm">Fill out the details below and I will respond to your message promptly.</p>
              </div>

              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-3xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4 my-auto"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Thank you for reaching out, {formData.name || 'friend'}. I have received your message regarding <strong className="text-white">{formData.subject}</strong> and will get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 relative z-10 flex-1 flex flex-col justify-between">
                  <div className="space-y-5">
                    {/* Name Input */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block">Your Name</label>
                      <div className="relative group/input">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-focus-within/input:text-cyan-300 group-focus-within/input:border-cyan-400/50 transition-colors">
                          <User size={16} />
                        </div>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                          className="w-full bg-slate-800/80 border border-white/15 rounded-2xl pl-16 pr-5 py-3.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:bg-slate-800 focus:ring-2 focus:ring-cyan-400/20 transition-all shadow-inner"
                        />
                      </div>
                    </div>

                    {/* Email & Phone Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block">Your Email</label>
                        <div className="relative group/input">
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-focus-within/input:text-cyan-300 group-focus-within/input:border-cyan-400/50 transition-colors">
                            <Mail size={16} />
                          </div>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="john@example.com"
                            className="w-full bg-slate-800/80 border border-white/15 rounded-2xl pl-16 pr-5 py-3.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:bg-slate-800 focus:ring-2 focus:ring-cyan-400/20 transition-all shadow-inner"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block">Phone Number (Optional)</label>
                        <div className="relative group/input">
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-focus-within/input:text-cyan-300 group-focus-within/input:border-cyan-400/50 transition-colors">
                            <Phone size={16} />
                          </div>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+91 9876543210"
                            className="w-full bg-slate-800/80 border border-white/15 rounded-2xl pl-16 pr-5 py-3.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:bg-slate-800 focus:ring-2 focus:ring-cyan-400/20 transition-all shadow-inner"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Topic / Subject Selection Pills */}
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                        <Tag size={12} className="text-cyan-400" />
                        Inquiry Topic / Subject
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {subjects.map((subj) => (
                          <button
                            key={subj}
                            type="button"
                            onClick={() => setFormData({ ...formData, subject: subj })}
                            className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all border text-center truncate ${
                              formData.subject === subj
                                ? 'bg-gradient-to-r from-[#7042f8] to-[#00d2ff] text-white border-transparent shadow-[0_0_20px_rgba(112,66,248,0.5)]'
                                : 'bg-slate-800/60 text-slate-300 border-white/10 hover:border-white/20 hover:text-white'
                            }`}
                          >
                            {subj}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message Input */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block">Your Message</label>
                      <div className="relative group/input">
                        <div className="absolute left-4 top-4 w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-focus-within/input:text-cyan-300 group-focus-within/input:border-cyan-400/50 transition-colors">
                          <MessageSquare size={16} />
                        </div>
                        <textarea
                          rows="4"
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell me about your project, role details, or inquiry..."
                          className="w-full bg-slate-800/80 border border-white/15 rounded-2xl pl-16 pr-5 py-3.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:bg-slate-800 focus:ring-2 focus:ring-cyan-400/20 transition-all resize-none shadow-inner"
                        />
                      </div>
                    </div>

                    {/* Guarantees & Response Time Banner */}
                    <div className="p-3.5 rounded-2xl bg-slate-800/40 border border-white/10 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-300">
                      <div className="flex items-center gap-2">
                        <Clock size={14} className="text-cyan-400" />
                        <span>Average Response Time: <strong>&lt; 24 Hours</strong></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ShieldCheck size={14} className="text-emerald-400" />
                        <span>100% Privacy Assured</span>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#7042f8] via-[#8b5cf6] to-[#00d2ff] text-white font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(112,66,248,0.5)] hover:shadow-[0_0_50px_rgba(0,212,255,0.7)] transition-all group mt-2"
                  >
                    <span>Send Message</span>
                    <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </form>
              )}

              {/* Bottom Hover Accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

