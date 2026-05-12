import React from 'react';
import { personalDetails } from '../data';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 border-t border-white/5 relative overflow-hidden bg-primary">
      <div className="max-w-7xl mx-auto px-6 z-10 relative">
        <div className="flex flex-col items-center gap-12">
          {/* Copyright Info */}
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="space-y-1">
              <h3 className="text-2xl font-black gradient-text">BJ</h3>
              <p className="text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase">Full Stack Java Developer</p>
            </div>
            <p className="text-slate-500 text-xs font-bold tracking-[0.2em] uppercase">
              © {currentYear} {personalDetails.name}. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
    </footer>
  );
};

export default Footer;

