"use client";

import { motion } from "framer-motion";
import { Send, Github, Instagram, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  const socials = [
    { name: "GitHub", icon: Github, href: "https://github.com/itznik" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/nikunj._.variya" },
    { name: "LinkedIn", icon: Linkedin, href: "#" }, // Add your LinkedIn here later
    { name: "Email", icon: Mail, href: "mailto:your-email@example.com" }, // Add your email here
  ];

  return (
    <section className="relative w-full max-w-4xl mx-auto pt-32 pb-12 px-4 sm:px-6 z-10">
      
      {/* Massive Call to Action Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16 relative z-20"
      >
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter leading-tight">
          Let's build something <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-magenta">
            extraordinary.
          </span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-lg font-light">
          Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
      </motion.div>

      {/* The Contact Form (Glassmorphic) */}
      <motion.form 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative p-8 md:p-12 rounded-3xl bg-[#18181B]/60 backdrop-blur-xl border border-white/10 shadow-glass mb-24 overflow-hidden group"
      >
        {/* Subtle hover gradient inject inside the form card */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-magenta/5 via-transparent to-brand-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        <div className="relative z-10 flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-semibold tracking-wide text-slate-300 ml-1">Name</label>
              <input 
                type="text" 
                id="name" 
                placeholder="John Doe"
                className="w-full bg-[#09090B]/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/50 transition-all"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-semibold tracking-wide text-slate-300 ml-1">Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="john@example.com"
                className="w-full bg-[#09090B]/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/50 transition-all"
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-semibold tracking-wide text-slate-300 ml-1">Message</label>
            <textarea 
              id="message" 
              rows={5}
              placeholder="Tell me about your project..."
              className="w-full bg-[#09090B]/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-magenta/50 focus:ring-1 focus:ring-brand-magenta/50 transition-all resize-none"
            />
          </div>

          <button 
            type="button" // Change to "submit" when you connect a backend
            className="group relative flex items-center justify-center gap-3 w-full md:w-auto md:self-end px-8 py-4 bg-white text-brand-dark rounded-xl font-bold overflow-hidden transition-all hover:shadow-neon hover:-translate-y-1 mt-2"
          >
            <span className="relative z-10">Send Message</span>
            <Send size={18} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </motion.form>

      {/* Footer / Signature */}
      <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-2xl font-bold tracking-tighter text-white">
            Vortex<span className="text-brand-cyan">.</span>
          </span>
          <span className="text-sm text-slate-500">
            © {new Date().getFullYear()} Nikunj Variya. All rights reserved.
          </span>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <a 
              key={social.name} 
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-brand-cyan hover:border-brand-cyan/30 hover:bg-brand-cyan/10 hover:-translate-y-1 transition-all duration-300"
              aria-label={social.name}
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
