"use client";
import React from 'react';
import { motion } from 'framer-motion';
import {ExternalLink, Terminal, ShieldCheck, Database, Palette} from 'lucide-react'

const projects = [
    {
        title: "PayFusion",
        description: "Fintech SaaS platform for seamless payment processing and financial management, featuring secure escrow logic, QR code payments, and automated transaction isolation.",
        tech: ["Django", "PostgreSQL", "Next.js"],
        icon: <ShieldCheck className="w-5 h-5 text-blue-400" />,
        size: "large",
    },
    {
        title: "URC Real Estate",
        description: "Property management system with async email notifications and dynamic galleries.",
        tech: ["Django", "MySQL", "Celery", "Jinja2"],
        icon: <Database className="w-5 h-5 text-emerald-400" />,
        size: "small",
    },
    {
        title: "Cineverse",
        description: "A movie discovery API-driven engine built with Flask for real-time movie data exploration.",
        tech: ["Python", "Flask", "TMDB", "SQLAlchemy", "Celery"],
        icon: <Terminal className="w-5 h-5 text-purple-400" />,
        size: "small",  
    },
    {
    title: "Marienique", // Example UI/UX project name
    description: "A comprehensive design system and mobile prototype focused on sustainable e-commerce interactions.",
    tech: ["Figma", "Auto-Layout", "Prototyping"],
    icon: <Palette className="w-5 h-5 text-pink-400" />,
    size: "small",
  },
]

export default function ProjectGrid() {
    return (
    <section id="projects" className="w-full max-w-5xl mt-32 px-6">
      {/* Section Header */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-2">Featured Projects</h2>
        <div className="h-1 w-20 bg-blue-600 rounded-full" />
      </div>
      
      {/* The Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`group relative p-8 rounded-3xl bg-slate-900/40 border border-slate-800/50 backdrop-blur-xl hover:border-blue-500/50 transition-all duration-500 ${
              project.size === "large" ? "md:col-span-2" : "md:col-span-1"
            }`}
          >
            <div className="flex justify-between items-start mb-8">
              <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800 group-hover:border-blue-500/30 transition-colors">
                {project.icon}
              </div>
              <div className="flex gap-3">
                {/* <Github className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer" /> */}
                <ExternalLink className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer" />
              </div>
            </div>

            <div>
              <h3 className={`font-bold mb-3 ${project.size === 'large' ? 'text-3xl' : 'text-xl'}`}>
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map(t => (
                <span key={t} className="text-[10px] font-mono text-slate-300 px-2 py-1 bg-slate-800/50 rounded-md">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}