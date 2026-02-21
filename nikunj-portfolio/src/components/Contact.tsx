"use client";

import { motion } from "framer-motion";
import { Send, Github, Instagram, Linkedin, Mail, Clock, MessageSquare } from "lucide-react";

export default function Contact() {
  const socials = [
    { name: "GitHub", icon: Github, href: "https://github.com/itznik" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/nikunj._.variya" },
    { name: "LinkedIn", icon: Linkedin, href: "#" }, 
    { name: "Email", icon: Mail, href: "mailto:your-email@example.com" }, 
  ];

  return (
    <section id="contact" className="relative w-full max-w-7xl mx-auto pt-24 md:pt-32 pb-12 px-4 sm:px-6 lg:px-8 z-10 overflow-hidden">
      
      {/* 1. SECTION BACKGROUND: Blueprint Mesh */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border-card)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-card)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-30" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent-primary/10 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-8 items-center mb-24 md:mb-32">
        
        {/* Left: Typography & Socials */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex flex-col text-center lg:text-left"
        >
          <div className="inline-flex items-center justify-center lg:justify-start gap-2 mb-6">
            <MessageSquare size={16} className="text-accent-primary" />
            <span className="text-xs font-bold tracking-widest text-fg-base uppercase">Initiate Protocol</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-fg-base mb-6 tracking-tighter leading-[1.1]">
            Let's build something <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
              extraordinary.
            </span>
          </h2>
          
          <p className="text-text-secondary max-w-lg mx-auto lg:mx-0 text-lg md:text-xl font-light mb-10 leading-relaxed">
            Currently open for new opportunities. Whether you have a complex project or just want to connect, my inbox is always open.
          </p>

          <div className="flex items-center justify-center lg:justify-start gap-4">
            {socials.map((social, i) => (
              <motion.a 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}
                className="p-4 rounded-2xl bg-surface-card border border-border-card text-text-secondary hover:text-accent-primary hover:border-accent-primary/50 hover:shadow-[0_0_15px_rgba(0,216,255,0.2)] hover:-translate-y-1 transition-all"
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right: The Floating Glass Form & Widgets */}
        <div className="w-full lg:w-1/2 relative">
          
          <motion.form 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10 p-8 md:p-12 rounded-[2.5rem] bg-surface-card/80 backdrop-blur-2xl border border-border-card shadow-2xl"
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-bold tracking-widest uppercase text-text-secondary ml-1">Full Name</label>
                <input 
                  type="text" id="name" placeholder="John Doe"
                  className="w-full bg-bg-base/50 border border-border-card rounded-2xl px-5 py-4 text-fg-base placeholder:text-border-card focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-bold tracking-widest uppercase text-text-secondary ml-1">Email Address</label>
                <input 
                  type="email" id="email" placeholder="john@example.com"
                  className="w-full bg-bg-base/50 border border-border-card rounded-2xl px-5 py-4 text-fg-base placeholder:text-border-card focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-bold tracking-widest uppercase text-text-secondary ml-1">Your Message</label>
                <textarea 
                  id="message" rows={4} placeholder="Tell me about your project..."
                  className="w-full bg-bg-base/50 border border-border-card rounded-2xl px-5 py-4 text-fg-base placeholder:text-border-card focus:outline-none focus:border-accent-secondary focus:ring-1 focus:ring-accent-secondary transition-all resize-none"
                />
              </div>

              <button 
                type="button" 
                className="group relative flex items-center justify-center gap-3 w-full px-8 py-5 bg-fg-base text-bg-base rounded-2xl font-black text-lg overflow-hidden transition-transform hover:-translate-y-1 mt-4 shadow-lg"
              >
                <span className="relative z-10">Transmit Message</span>
                <Send size={20} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </motion.form>

          {/* FLOATING WIDGET 1: Top Right */}
          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="hidden md:flex absolute -top-6 -right-8 p-4 rounded-2xl bg-surface-card/90 backdrop-blur-xl border border-border-card shadow-xl items-center gap-3 z-20"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
            <div className="flex flex-col">
              <span className="text-sm font-bold text-fg-base leading-none">Status</span>
              <span className="text-xs text-text-secondary font-medium mt-1">Accepting Projects</span>
            </div>
          </motion.div>

          {/* FLOATING WIDGET 2: Bottom Left */}
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-6 -left-4 md:-left-12 p-4 rounded-2xl bg-surface-card/90 backdrop-blur-xl border border-border-card shadow-xl flex items-center gap-3 z-20"
          >
            <Clock size={20} className="text-accent-secondary" />
            <div className="flex flex-col">
              <span className="text-sm font-bold text-fg-base leading-none">Avg. Response</span>
              <span className="text-xs text-text-secondary font-medium mt-1">&lt; 24 Hours</span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* 3. FOOTER (With SVG Separator) */}
      <div className="relative pt-12">
        {/* SVG Dashed Line */}
        <svg className="absolute top-0 left-0 w-full h-[2px] text-border-card" preserveAspectRatio="none">
          <line x1="0" y1="1" x2="100%" y2="1" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" />
        </svg>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-2xl font-black tracking-tighter text-fg-base">
              Vortex<span className="text-accent-primary">.</span>
            </span>
            <span className="text-sm text-text-secondary font-medium">
              © {new Date().getFullYear()} Nikunj Variya. All rights reserved.
            </span>
          </div>

          <div className="text-sm font-bold text-text-secondary tracking-widest uppercase">
            Engineered in India
          </div>
        </div>
      </div>
    </section>
  );
}
