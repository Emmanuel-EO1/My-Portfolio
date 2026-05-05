"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Mail } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 flex justify-center p-6"
    >
      <div className="flex items-center justify-between w-full max-w-5xl px-6 py-3 bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-full shadow-2xl">
        
        {/* Logo / Name */}
        <Link href="/" className="flex items-center gap-2 group">
          <Terminal className="w-5 h-5 text-blue-400 group-hover:rotate-12 transition-transform" />
          <span className="font-bold tracking-tight text-slate-100">EMMANUEL<span className="text-blue-500">.SYS</span></span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <Link href="#projects" className="hover:text-blue-400 transition-colors">Projects</Link>
          <Link href="#research" className="hover:text-blue-400 transition-colors">Research</Link>
          <Link href="#about" className="hover:text-blue-400 transition-colors">Experience</Link>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4 text-slate-400">
          {/* <a href="https://github.com" target="_blank" className="hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a> */}
          <a href="mailto:olaleyetolu2003@gmail.com" className="hover:text-white transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;