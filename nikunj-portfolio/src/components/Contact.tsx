"use client";

import { motion } from "framer-motion";
import { Send, Github, Instagram, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  const socials = [
    { name: "GitHub", icon: Github, href: "https://github.com/itznik" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/nikunj._.variya" },
    { name: "LinkedIn", icon: Linkedin, href: "#" }, 
    { name: "Email", icon: Mail, href: "mailto:your-email@example.com" }, 
  ];

  return (
    <section id="contact" className="relative w-full max-w-4xl mx-auto pt-24 md:pt-32 pb-12 px-4 sm:px-6 z-10">
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 relative z-20"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-fg-base mb-4 tracking-tighter">
          Let's build something <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
            extraordinary.
          </span>
        </h2>
        <p className="text-text-secondary max-w-xl mx-auto text-base md:text-lg font-light">
          Currently open for new opportunities. Whether you have a question or just want to say hi, my inbox is open!
        </p>
      </motion.div>

      {/* The Form */}
      <motion.form 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative p-6 md:p-12 rounded-[2rem] bg-surface-card/80 backdrop-blur-xl border border-border-card shadow-lg mb-24"
      >
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-semibold text-fg-base ml-1">Name</label>
              <input 
                type="text" id="name" placeholder="John Doe"
                className="w-full bg-bg-base/50 border border-border-card rounded-xl px-5 py-4 text-fg-base placeholder:text-text-secondary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-semibold text-fg-base ml-1">Email</label>
              <input 
                type="email" id="email" placeholder="john@example.com"
                className="w-full bg-bg-base/50 border border-border-card rounded-xl px-5 py-4 text-fg-base placeholder:text-text-secondary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all"
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-semibold text-fg-base ml-1">Message</label>
            <textarea 
              id="message" rows={5} placeholder="Tell me about your project..."
              className="w-full bg-bg-base/50 border border-border-card rounded-xl px-5 py-4 text-fg-base placeholder:text-text-secondary focus:outline-none focus:border-accent-secondary focus:ring-1 focus:ring-accent-secondary transition-all resize-none"
            />
          </div>

          <button 
            type="button" 
            className="group relative flex items-center justify-center gap-3 w-full md:w-auto md:self-end px-8 py-4 bg-fg-base text-bg-base rounded-xl font-bold overflow-hidden transition-transform hover:-translate-y-1 mt-2 shadow-md"
          >
            <span className="relative z-10">Send Message</span>
            <Send size={18} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </motion.form>

      {/* Footer */}
      <div className="border-t border-border-card pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-2xl font-bold tracking-tighter text-fg-base">
            Vortex<span className="text-accent-primary">.</span>
          </span>
          <span className="text-sm text-text-secondary">
            © {new Date().getFullYear()} Nikunj Variya. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <a 
              key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}
              className="p-3 rounded-full bg-surface-card border border-border-card text-text-secondary hover:text-accent-primary hover:border-accent-primary/50 hover:-translate-y-1 transition-all shadow-sm"
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
