"use client"; // This MUST be the first line

import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
  "Python", "Django", "PostgreSQL", "React", "Next.js", "Flask", "Tailwind", "REST API"
];

export default function TechStack() {
  return (
    <div className="w-full mt-16">
      <p className="text-slate-500 text-[10px] font-mono uppercase tracking-[0.3em] mb-6">
        Technical Proficiencies
      </p>
      <div className="flex flex-wrap gap-3">
        {technologies.map((tech, index) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -2, color: '#60a5fa', borderColor: 'rgba(59, 130, 246, 0.5)' }}
            className="px-4 py-2 bg-slate-900/40 border border-slate-800 rounded-full text-xs font-medium text-slate-400 backdrop-blur-sm cursor-default transition-colors"
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </div>
  );
}