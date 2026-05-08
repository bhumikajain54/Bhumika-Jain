import React from 'react';
import { personalDetails } from '../data';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-2">BJ</h3>
            <p className="text-slate-500 text-sm max-w-xs">
              Building modern web experiences with Java, Spring Boot, and React.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-8 text-sm font-medium">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Home</a>
              <a href="#about" className="text-slate-400 hover:text-white transition-colors">About</a>
              <a href="#skills" className="text-slate-400 hover:text-white transition-colors">Skills</a>
              <a href="#projects" className="text-slate-400 hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="text-slate-400 hover:text-white transition-colors">Contact</a>
            </div>
            <p className="text-slate-500 text-sm flex items-center">
              © {currentYear} {personalDetails.name}. All Rights Reserved. 
              <span className="ml-2 flex items-center">Made with <Heart size={14} className="mx-1 text-red-500 fill-red-500" /> in India</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
