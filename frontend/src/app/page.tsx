"use client";
import { motion } from 'framer-motion';
import TechStack from '@/components/TechStack';
import Skills from '@/components/Skills';
import AboutMe from '@/components/AboutMe';
import ProjectGrid from '@/components/ProjectGrid';
import LiveTransactions from '@/components/LiveTransactions';
import Contact from '@/components/Contact';
import SkillsMatrix from '@/components/SkillsMatrix';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#020617] flex flex-col items-center">
      {/* Background Gradient - More subtle, less botty */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <section className="w-full max-w-5xl pt-48 pb-20 px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Subtle Terminal Line */}
          <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 mb-8">
             <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-[10px] font-mono text-blue-400 uppercase tracking-[0.2em]">
              System_Online: v1.0.4
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
            Architecting <br />
            <span className="text-slate-500">resilient</span> code.
          </h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-xl leading-relaxed mb-10 font-light">
            Fullstack Engineer & MSc candidate. I build robust web applications with an uncompromising focus on precision.
          </p>

          <div className="flex flex-wrap gap-4 mb-20">
            <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-white text-black text-sm font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300">
              Explore Projects
            </button>
            <a 
              href="/Emmanuel_CV.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-transparent border border-slate-800 text-slate-300 text-sm font-bold rounded-full hover:bg-slate-900 transition-all">
              View Curriculum Vitae
            </a>
          </div>

          <AboutMe />
          <TechStack />
          <Skills />
          <ProjectGrid />
          <LiveTransactions />
          <SkillsMatrix />
          <Contact />
          <Footer />
        </motion.div>
      </section>
    </main>
  );
}