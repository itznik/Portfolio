"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Instagram, Linkedin, Mail, Clock, CheckCircle2, Loader2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const socials = [
    { name: "GitHub", icon: Github, href: "https://github.com/itznik" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/nikunj._.variya" },
    { name: "LinkedIn", icon: Linkedin, href: "#" }, 
    { name: "Email", icon: Mail, href: "mailto:nikvrya@gmail.com" }, 
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // REPLACE THIS WITH YOUR ACTUAL WEB3FORMS ACCESS KEY
    const accessKey = "07966ceb-688a-4860-b07d-bac6567c79f8"; 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" }); // Clear form
        // Reset button after 3 seconds
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <section id="contact" className="relative w-full max-w-7xl mx-auto pt-24 md:pt-32 pb-12 px-4 sm:px-6 lg:px-8 z-10 overflow-hidden">
      
      {/* 1. UNIQUE SVG VISUALIZER: The Transmission Radar */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-end opacity-20 dark:opacity-30">
        <motion.svg 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-[20%] w-[800px] h-[800px] text-accent-secondary" 
          viewBox="0 0 100 100" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="0.1"
        >
          <circle cx="50" cy="50" r="20" strokeDasharray="1 3" />
          <circle cx="50" cy="50" r="30" />
          <circle cx="50" cy="50" r="40" strokeDasharray="4 4" />
          <circle cx="50" cy="50" r="50" strokeWidth="0.05" />
        </motion.svg>
        <div className="absolute right-0 w-[500px] h-[500px] bg-accent-secondary/5 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-8 items-center mb-24 md:mb-32">
        
        {/* Left: Typography & Embedded Metrics */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex flex-col text-center lg:text-left"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-fg-base mb-6 tracking-tighter leading-[1.05]">
            Let's build something <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
              extraordinary.
            </span>
          </h2>
          
          <p className="text-text-secondary max-w-lg mx-auto lg:mx-0 text-lg md:text-xl font-light mb-8 leading-relaxed">
            Currently open for new opportunities. Whether you have a complex project or just want to connect, my inbox is always open.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-10">
            <div className="flex items-center gap-2 text-sm font-bold text-fg-base">
              <CheckCircle2 size={18} className="text-green-500" />
              Accepting Projects
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-fg-base">
              <Clock size={18} className="text-accent-secondary" />
              Response &lt; 24h
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-4">
            {socials.map((social, i) => (
              <motion.a 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}
                className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-surface-card border border-border-card text-text-secondary hover:text-accent-primary transition-colors"
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right: The Functional Form */}
        <div className="w-full lg:w-1/2">
          <motion.form 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-12 rounded-[2rem] bg-surface-card/60 backdrop-blur-2xl border border-border-card shadow-sm"
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-bold tracking-widest uppercase text-text-secondary ml-1">Full Name</label>
                <input 
                  type="text" id="name" required
                  value={formData.name} onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-bg-base/80 border border-border-card rounded-xl px-5 py-4 text-fg-base placeholder:text-border-card focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-bold tracking-widest uppercase text-text-secondary ml-1">Email Address</label>
                <input 
                  type="email" id="email" required
                  value={formData.email} onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full bg-bg-base/80 border border-border-card rounded-xl px-5 py-4 text-fg-base placeholder:text-border-card focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-bold tracking-widest uppercase text-text-secondary ml-1">Your Message</label>
                <textarea 
                  id="message" required rows={4} 
                  value={formData.message} onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full bg-bg-base/80 border border-border-card rounded-xl px-5 py-4 text-fg-base placeholder:text-border-card focus:outline-none focus:border-accent-secondary focus:ring-1 focus:ring-accent-secondary transition-all resize-none"
                />
              </div>

              {/* Dynamic Submit Button */}
              <button 
                type="submit" 
                disabled={status === "loading" || status === "success"}
                className={`group flex items-center justify-center gap-3 w-full px-8 py-5 rounded-xl font-black text-sm md:text-base transition-all mt-2 ${
                  status === "success" 
                    ? "bg-green-500 text-white" 
                    : status === "error" 
                    ? "bg-red-500 text-white"
                    : "bg-fg-base text-bg-base hover:-translate-y-0.5 shadow-lg"
                } disabled:opacity-70 disabled:hover:translate-y-0`}
              >
                {status === "idle" && (
                  <>
                    <span>Message Me</span>
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
                {status === "loading" && (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>Sending...</span>
                  </>
                )}
                {status === "success" && (
                  <>
                    <CheckCircle2 size={18} />
                    <span>Message Sent!</span>
                  </>
                )}
                {status === "error" && (
                  <span>Message Failed. Try Again.</span>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </div>

      {/* FOOTER */}
      <div className="relative pt-8 border-t border-border-card">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-black tracking-tighter text-fg-base">
              Nikunj<span className="text-accent-primary">.</span>
            </span>
            <span className="text-xs md:text-sm text-text-secondary font-medium ml-2 border-l border-border-card pl-4">
              © {new Date().getFullYear()} Nikunj Variya
            </span>
          </div>

          <div className="text-[10px] md:text-xs font-bold text-text-secondary tracking-widest uppercase">
            Made with 🩷
          </div>
        </div>
      </div>
    </section>
  );
}
