"use client";
import { motion } from 'framer-motion';
import { Database, Layout, Server, Cpu, Globe, Terminal, Code2 } from 'lucide-react';

const coreStack = [
  { 
    name: 'Backend Architecture', 
    tech: 'Python / Django', 
    level: 98, 
    icon: <Server size={20} />, 
    desc: 'RESTful API design, Middleware, and Database management.' 
  },
  { 
    name: 'Frontend Engineering', 
    tech: 'Next.js / TypeScript', 
    level: 96, 
    icon: <Layout size={20} />, 
    desc: 'Responsive UI, State Management, and Animation logic.' 
  },
  { 
    name: 'Data Systems', 
    tech: 'PostgreSQL / Redis', 
    level: 96, 
    icon: <Database size={20} />, 
    desc: 'Relational modeling and high-speed data caching.' 
  },
  { 
    name: 'System Integration', 
    tech: 'CORS / Auth / APIs', 
    level: 94, 
    icon: <Globe size={20} />, 
    desc: 'Cross-origin resource sharing and secure endpoint relay.' 
  },
];

export default function SkillsMatrix() {
  return (
    <section className="w-full max-w-6xl mx-auto py-32 px-6">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-16">
        <div className="h-[1px] w-12 bg-blue-500/50" />
        <h2 className="text-[10px] font-mono text-blue-500 uppercase tracking-[0.5em] font-bold">
          Technical_Proficiency_Matrix
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {coreStack.map((skill, index) => (
          <motion.div 
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-8 bg-slate-900/20 border border-slate-800/50 rounded-3xl hover:bg-slate-900/40 transition-all group"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-500 group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <span className="text-[10px] font-mono text-slate-600 uppercase font-bold">
                Efficiency: {skill.level}%
              </span>
            </div>

            <div className="space-y-2 mb-6">
              <h3 className="text-xl font-bold text-white tracking-tight">{skill.name}</h3>
              <p className="text-sm font-mono text-blue-400/80">{skill.tech}</p>
              <p className="text-sm text-slate-500 leading-relaxed font-light">
                {skill.desc}
              </p>
            </div>

            {/* Visual Progress Bar */}
            <div className="h-1 w-full bg-slate-800/50 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-blue-600 to-blue-400 shadow-[0_0_15px_rgba(37,99,235,0.4)]"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tertiary Skills Log */}
      <div className="mt-12 flex flex-wrap gap-4 px-2">
        {['TailwindCSS', 'Framer Motion', 'Axios', 'Git', 'Docker', 'REST API'].map((item) => (
          <span key={item} className="px-4 py-2 bg-slate-900/50 border border-slate-800 rounded-full text-[10px] font-mono text-slate-400 uppercase tracking-widest">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}