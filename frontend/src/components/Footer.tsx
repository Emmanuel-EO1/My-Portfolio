"use client";
import { X, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear(); 

  return (
    <footer className="w-full border-t border-slate-900 py-16 px-6 mt-20 bg-[#020617]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        
        {/* About Column */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white tracking-tighter">Emmanuel</h3>
          <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
            Fullstack Software Developer specializing in Django and Next.js. Currently 
            refining models for industrial and commercial applications.
          </p>
        </div>

        {/* Info Column */}
        <div className="space-y-4">
          <h4 className="text-[10px] font-mono uppercase text-slate-400 tracking-widest">Information</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span>Available for Technical Roles</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <MapPin size={14} className="text-slate-500" />
              <span>Lagos, Nigeria</span>
            </div>
          </div>
        </div>

        {/* Social Column */}
        <div className="space-y-4">
          <h4 className="text-[10px] font-mono uppercase text-slate-400 tracking-widest">Connect</h4>
          <div className="flex gap-5">
            {/* <a href="https://github.com/your-username" target="_blank" className="text-slate-400 hover:text-blue-500 transition-colors">
              <Github size={22} />
            </a>
            <a href="https://linkedin.com/in/your-username" target="_blank" className="text-slate-400 hover:text-blue-500 transition-colors">
              <Linkedin size={22} />
            </a> */}
            <a href="https://twitter.com/your-username" target="_blank" className="text-slate-400 hover:text-blue-500 transition-colors">
              <X size={22} />
            </a>
            <a href="mailto:olaleyetolu2003@gmail.com" className="text-slate-400 hover:text-blue-500 transition-colors">
              <Mail size={22} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Copyright Bar */}
      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-slate-900/50 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-600 uppercase tracking-[0.3em] gap-4">
        <p>© {currentYear} Emmanuel // Designed & Engineered | PESOTech </p>
        <p>Built with Next.js & Django</p>
      </div>
    </footer>
  );
}