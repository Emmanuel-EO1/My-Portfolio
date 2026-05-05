"use client";
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, Mail, User, MessageSquare } from 'lucide-react';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');


    emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, 
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, 
        formRef.current!, 
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    )
    .then(() => {
      setStatus('sent');
      setTimeout(() => setStatus('idle'), 5000);
    })
    .catch(() => setStatus('error'));
  };

  return (
    <section id="contact" className="w-full max-w-4xl mx-auto py-24 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
        <p className="text-slate-400">Have a project in mind or just want to say hi? Feel free to reach out.</p>
      </div>

      <AnimatePresence mode="wait">
        {status !== 'sent' ? (
          <motion.form 
            ref={formRef} 
            onSubmit={sendEmail}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 ml-1">Full Name</label>
                <input 
                  name="from_name"
                  required 
                  type="text"
                  placeholder="Enter your name" 
                  className="w-full bg-[#f8fafc] border border-slate-200 rounded-xl py-4 px-5 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 ml-1">Email Address</label>
                <input 
                  name="from_email"
                  required 
                  type="email"
                  placeholder="name@company.com" 
                  className="w-full bg-[#f8fafc] border border-slate-200 rounded-xl py-4 px-5 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>
            </div>

            {/* Message Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300 ml-1">Message</label>
              <textarea 
                name="message"
                required 
                rows={6} 
                placeholder="Tell me about your project..." 
                className="w-full bg-[#f8fafc] border border-slate-200 rounded-xl py-4 px-5 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
              />
            </div>
            
            <button 
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.99] disabled:opacity-50 shadow-lg shadow-blue-900/20"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
              <Send size={18} />
            </button>

            {status === 'error' && (
              <p className="text-red-400 text-center text-sm">Something went wrong. Please try again later.</p>
            )}
          </motion.form>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16 bg-white/5 border border-white/10 rounded-3xl"
          >
            <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
            <p className="text-slate-400">Thanks for reaching out. I'll get back to you shortly.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}