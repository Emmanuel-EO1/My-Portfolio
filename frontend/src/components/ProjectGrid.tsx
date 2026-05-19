"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, Terminal, ShieldCheck, Database, Palette} from 'lucide-react';

const projects = [
    {
        title: "PayFusion",
        tagline: "FINTECH_INFRASTRUCTURE // LIVE",
        description: "Fintech SaaS multi-vendor e-commerce platform for seamless payment processing and financial management, featuring secure escrow logic, QR code payments, and automated transaction isolation.",
        tech: ["Django", "PostgreSQL", "Next.js", "Supabase RLS"],
        icon: <ShieldCheck className="w-5 h-5 text-blue-400" />,
        size: "large",
        heroImage: "/images/payfusion-hero1.png", // Path to your live ledger screenshot
        projectUrl: "https://my-portfolio-nine-rust-41.vercel.app/", // Direct API layer
        githubUrl: "https://github.com/yourusername/payfusion", // Will add when deployed
    },
    {
        title: "URC Real Estate",
        tagline: "ENTERPRISE_SYSTEM // LOGS",
        description: "Property management system with CRUD functionality, async email notifications and dynamic galleries.",
        tech: ["Django", "MySQL", "Celery", "Jinja2"],
        icon: <Database className="w-5 h-5 text-emerald-400" />,
        size: "small",
        heroImage: "/images/URC-hero1.png",
        projectUrl: undefined, // Direct API layer
        githubUrl: undefined, // Will add when deployed
    },
    {
        title: "Cineverse",
        tagline: "API_ENGINE // STABLE",
        description: "A movie discovery API-driven engine built with Flask for real-time movie data exploration.",
        tech: ["Python", "Flask", "TMDB", "SQLAlchemy", "Celery"],
        icon: <Terminal className="w-5 h-5 text-purple-400" />,
        size: "small",  
        heroImage: "/images/CineVerse-hero1.png",
        projectUrl: undefined, // Direct API layer
        githubUrl: undefined, // Will add when deployed
    },
    {
        title: "Marienique",
        tagline: "DESIGN_SYSTEM // PRODUCTION",
        description: "A comprehensive design system and prototype focused on sustainable e-commerce interactions.",
        tech: ["Figma", "Auto-Layout", "Prototyping"],
        icon: <Palette className="w-5 h-5 text-pink-400" />,
        size: "small",
        heroImage: "/images/Marienique-hero.jpg",
        projectUrl: undefined,
        githubUrl: undefined,
    },
]

export default function ProjectGrid() {
    return (
        <section id="projects" className="w-full max-w-5xl mt-32 px-6 mx-auto">
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
                        className={`group relative rounded-3xl bg-slate-900/40 border border-slate-800/50 backdrop-blur-xl hover:border-blue-500/50 transition-all duration-500 flex flex-col overflow-hidden ${
                            project.size === "large" ? "md:col-span-2" : "md:col-span-1"
                        }`}
                    >
                        {/* 16:9 Hero Image Container */}
                        <div className="relative w-full aspect-video bg-slate-950 overflow-hidden border-b border-slate-800/40">
                            <Image
                                src={project.heroImage}
                                alt={`${project.title} Preview`}
                                fill
                                className="object-cover object-top opacity-60 group-hover:opacity-90 group-hover:scale-[1.02] transition-all duration-500 ease-out"
                            />
                            {/* Gradient to melt the image base cleanly into the card content */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/20 pointer-events-none" />
                        </div>

                        {/* Content Container (Padding moved here so image spans edge-to-edge) */}
                        <div className="p-8 flex flex-col flex-grow">
                            
                            {/* Controls & Icon Row */}
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800 group-hover:border-blue-500/30 transition-colors">
                                    {project.icon}
                                </div>
                                <div className="flex gap-3 items-center z-10">
                                    {project.githubUrl && (
                                        <a 
                                            href={project.githubUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-slate-500 hover:text-white transition-colors"
                                        >
                                            {/* <Github className="w-5 h-5" /> */}
                                        </a>
                                    )}
                                    <a 
                                        href={project.projectUrl || '#'} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-slate-500 hover:text-blue-400 transition-colors"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            {/* Text Metadata */}
                            <div className="flex-grow">
                                <div className="text-[9px] font-mono tracking-widest text-blue-500 mb-1">
                                    {project.tagline}
                                </div>
                                <h3 className={`font-bold mb-3 tracking-tight ${project.size === 'large' ? 'text-3xl' : 'text-xl'}`}>
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-sans">
                                    {project.description}
                                </p>
                            </div>

                            {/* Tech Badges */}
                            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-800/40">
                                {project.tech.map(t => (
                                    <span key={t} className="text-[10px] font-mono text-slate-300 px-2 py-1 bg-slate-800/50 rounded-md border border-slate-700/30">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}