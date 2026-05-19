import Image from 'next/image';
import { Shield, Terminal } from 'lucide-react';

export default function AboutMe() {
  return (
    <section className="py-20 bg-slate-950 text-slate-100 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        {/* Left: Preceding Picture Section */}
        <div className="md:col-span-5 flex justify-center">
          <div className="relative group w-72 h-72 md:w-80 md:h-80">
            {/* Ambient Tech Glow Background */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
            
            {/* The Image Container */}
            <div className="relative w-full h-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-800">
              <Image 
                src="/images/emmanuel-profile.jpeg" 
                alt="Emmanuel"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500 ease-in-out scale-100 group-hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>

        {/* Right: Technical About Me Text */}
        <div className="md:col-span-7 space-y-6">
          <div className="flex items-center space-x-2 text-blue-500 text-xs font-mono tracking-widest uppercase">
            <Terminal className="w-4 h-4" />
            <span>WHO_AM_I</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Building secure, high-performance web systems.
          </h2>

          <p className="text-slate-400 leading-relaxed font-sans">
            I am a full-stack software engineer and B.Sc. Physics with Electronics graduate  specializing in building secure, end-to-end web applications. Leveraging precise engineering principles, I design resilient multi-tenant fintech platforms, dynamic real systems, and responsive API-driven engines using Python, Django, Flask, and PostgreSQL.
          </p>

          <p className="text-slate-400 leading-relaxed font-sans">
            My expertise covers both backend relational architecture and frontend development with Tailwind CSS and JavaScript, alongside digital prototyping in Figma. Combining this technical skill set with professional experience in asset digitalization, I bridge robust software logic with modern user experiences, driven by an interest in automated platforms and tech content creation. <br/>I build with an uncompromising focus on safety, scale, and clean execution.
          </p>

          {/* Technical Capability Badges */}
          <div className="flex flex-wrap gap-3 pt-2 font-mono text-xs text-slate-400">
            <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-full flex items-center gap-1">
              <Shield className="w-3 h-3 text-cyan-400" /> API Security
            </span>
            <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-full flex items-center gap-1">
              <Terminal className="w-3 h-3 text-blue-400" /> Backend Systems
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}