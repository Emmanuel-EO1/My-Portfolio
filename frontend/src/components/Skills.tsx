"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Terminal, Users, Database, Globe } from 'lucide-react';

const coreCapabilities = [
  {
    title: "System Architecture",
    icon: <Database className="w-6 h-6 text-blue-400" />,
    desc: "I architect scalable, resilient systems from the ground up, focusing on the mechanical harmony between high-traffic backends and fluid frontends. My approach centers on modularity and security, ensuring that complex financial or real estate data flows are optimized for speed and reliability."
  },
  
  {
    title: "UI/UX Design & Frontend",
    icon: <Terminal className="w-6 h-6 text-purple-400" />,
    desc: "I design interfaces that are not just visually striking but are psychologically intuitive. With 4+ years experience, my UI/UX philosophy focuses on accessibility and 'human-like' interaction, moving away from rigid, predictable patterns to create organic user journeys. Drawing from my work in real estate technology, I specialize in high-resolution visual storytelling."
  },

  {
    title: "Systems & Digitalization",
    icon: <Cpu className="w-6 h-6 text-emerald-400" />,
    desc: "I apply automation principles to streamline professional workflows—from automated communication logs to managing technical inquiries, influenced by my professional service at SAC."
  },

  {
    title: "Fullstack Engineering",
    icon: <Code2 className="w-6 h-6 text-purple-400" />,
    desc: "I bridge the gap between the server and the screen by building end-to-end applications that are as fast as they are functional. My expertise in the Django and Flask frameworks allows me to build powerful, secure RESTful APIs that handle complex business logic with ease. On the frontend, I utilize Next.js and TypeScript to create type-safe, performant environments. I am particularly skilled in managing the entire application lifecycle, from local development to cloud deployment on platforms like Railway, including automated static file management."
  },
  
  {
    title: "Leadership, Logic & Strategic Thinking",
    icon: <Users className="w-6 h-6 text-orange-400" />,
    desc: "Technical writing, project management, and cross-functional system design. I bring a systems-thinking approach to team collaboration and project management. I excel at translating complex technical 'logic' into clear, actionable business strategies for non-technical stakeholders. My leadership style is rooted in clarity and precision. Whether refining professional documentation for top-tier energy firms or managing background inquiries for large-scale property portfolios, I prioritize human-centric communication over detectable AI-generated patterns."
  }
];

const secondaryTools = [
  "Docker", "PostgreSQL", "Git Bash", "REST APIs", "MySQL", "Jinja2", "Celery", "Redis", "Framer Motion", "Tailwind CSS", "JWT Auth", "Figma", "Nginx", "Pytest", "Postman", "Cloudflare"
];

export default function Skills() {
  return (
    <section id="skills" className="w-full max-w-5xl mt-32 px-6">
      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-2">Capabilities</h2>
        <div className="h-1 w-20 bg-blue-600 rounded-full" />
      </div>

      {/* 1. Core Capabilities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        {coreCapabilities.map((item, index) => (
          <motion.div
            key={item.title}
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-2xl bg-slate-900/10 border border-slate-800/50 flex gap-5 items-start"
          >
            <div className="p-3 bg-slate-900 rounded-xl border border-slate-700 shadow-inner">
              {item.icon}
            </div>
            <div>
              <h3 className="font-bold text-slate-100 mb-1">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mt-4">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 2. Horizontal "Infinite" Tool Belt */}
      <div className="relative flex overflow-x-hidden group py-10 border-y border-slate-800/50">
        <div className="animate-custom-marquee whitespace-nowrap flex gap-12 items-center">
          {secondaryTools.map((tool) => (
            <span key={tool} className="text-sm font-mono text-slate-500 uppercase tracking-widest hover:text-blue-400 transition-colors cursor-default">
              {tool}
            </span>
          ))}
          {/* Repeating for seamless loop */}
          {secondaryTools.map((tool) => (
            <span key={`${tool}-2`} className="text-sm font-mono text-slate-500 uppercase tracking-widest">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}