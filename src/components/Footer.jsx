import React from 'react';
import { personalDetails } from '../data';
import { Code2, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-14 border-t border-white/10 relative overflow-hidden bg-[#030014] select-none">
      {/* Tech Grid Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.04] pointer-events-none" />

      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-t from-[#7042f8]/15 via-[#00d2ff]/5 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 z-10 relative">
        <div className="flex flex-col items-center gap-8">
          {/* Logo & Headline */}
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(112,66,248,0.4)] mb-1">
              <span className="text-2xl font-black bg-gradient-to-r from-[#a855f7] via-[#7042f8] to-[#00d2ff] bg-clip-text text-transparent">
                BJ
              </span>
            </div>
            <h3 className="text-xl font-bold text-white tracking-wide">Bhumika Jain</h3>
            <p className="text-[11px] font-black tracking-[0.25em] text-cyan-300 uppercase flex items-center gap-1.5">
              <Code2 size={13} className="text-purple-400" />
              Full Stack Java Developer
            </p>
          </div>
          {/* Copyright Info */}
          <div className="pt-6 border-t border-white/10 w-full text-center">
            <p className="text-slate-400 text-xs font-semibold tracking-wider">
              © {currentYear} <span className="text-white font-bold">{personalDetails.name}</span>. All Rights Reserved. Built with React & Java Stack.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



