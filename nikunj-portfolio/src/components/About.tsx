"use client";

import { motion } from "framer-motion";
import { Code2, MapPin, Headphones, Zap, HeartPulse } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative w-full max-w-7xl mx-auto py-24 md:py-32 px-4 sm:px-6 lg:px-8 z-10 overflow-hidden">
      
                  {/* 1. SECTION BACKGROUND: The Biometric Rhythm */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden">
        
        {/* Fixed height container prevents the SVG from stretching vertically on mobile! */}
        <div className="absolute top-1/2 left-0 w-full h-[200px] md:h-[300px] -translate-y-1/2 opacity-30 dark:opacity-40">
          <svg className="w-full h-full text-border-card" preserveAspectRatio="none" viewBox="0 0 1000 100">
            
            {/* Animated Audio Waveforms (Sine waves) */}
            <motion.path 
              animate={{ d: ["M0 50 Q250 20 500 50 T1000 50", "M0 50 Q250 80 500 50 T1000 50", "M0 50 Q250 20 500 50 T1000 50"] }} 
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} 
              fill="none" stroke="currentColor" strokeWidth="2" 
            />
            <motion.path 
              animate={{ d: ["M0 50 Q250 80 500 50 T1000 50", "M0 50 Q250 20 500 50 T1000 50", "M0 50 Q250 80 500 50 T1000 50"] }} 
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} 
              fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="10 10"
            />
            
            {/* Medical EKG Heartbeat Spike - High resolution, mathematically accurate */}
            <path 
              d="M 0 50 L 300 50 Q 320 40 340 50 L 370 50 L 390 60 L 420 10 L 450 90 L 480 50 L 520 50 Q 550 30 580 50 L 1000 50" 
              fill="none" 
              stroke="var(--accent-secondary)" 
              strokeWidth="3" 
              strokeLinecap="round"
              strokeLinejoin="round"
              className="drop-shadow-[0_0_8px_rgba(255,0,122,0.8)]"
            />
          </svg>
        </div>

        {/* Ambient Core Glow */}
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-accent-secondary/5 rounded-full blur-[120px] -translate-y-1/2 mix-blend-screen" />
      </div>


      <div className="relative z-10 w-full flex flex-col items-center">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-card border border-border-card shadow-sm mb-6">
            <Zap size={14} className="text-accent-secondary" />
            <span className="text-xs font-bold tracking-widest text-fg-base uppercase">Multifaceted</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-fg-base">
            Behind the <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">Code.</span>
          </h2>
        </motion.div>

        {/* 2. THE VISUAL LAYOUT (Overlapping Cards & SVG Connectors) */}
        <div className="relative w-full max-w-5xl mx-auto flex flex-col gap-12 md:gap-24">
          
          {/* --- SVG CONNECTOR LINE (Desktop only to keep mobile clean) --- */}
          <svg className="hidden md:block absolute top-[10%] bottom-[10%] left-1/2 -translate-x-1/2 w-24 h-[80%] -z-10" preserveAspectRatio="none">
            <motion.path 
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              d="M 50 0 C 100 25, 0 75, 50 100" 
              vectorEffect="non-scaling-stroke"
              fill="none" 
              stroke="var(--accent-primary)" 
              strokeWidth="2" 
              strokeDasharray="6 6"
              className="opacity-50"
            />
          </svg>

          {/* CARD 1: The Engineer (Left Aligned) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full md:w-[80%] relative z-10 self-start"
          >
            <div className="p-8 md:p-10 rounded-[2rem] bg-surface-card/80 backdrop-blur-xl border border-border-card shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-primary/5 rounded-full blur-[50px] transition-opacity group-hover:opacity-100 opacity-0" />
              <Code2 size={32} className="text-accent-primary mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold text-fg-base mb-4 tracking-tight">The Engineer</h3>
              <p className="text-text-secondary font-light leading-relaxed text-base md:text-lg">
                I'm a 21-year-old Full-Stack Developer specializing in the MERN stack and Next.js. I don't just write code; I architect systems that bridge the gap between complex logic and stunning visual design.
              </p>
            </div>
            
            {/* Floating Widget */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-4 md:-right-8 p-3 rounded-2xl bg-surface-card border border-border-card shadow-xl flex items-center gap-3 z-20"
            >
              <MapPin size={18} className="text-accent-primary" />
              <span className="text-sm font-bold text-fg-base">Surat, Gujarat</span>
            </motion.div>
          </motion.div>

          {/* CARD 2: The Medical Focus (Right Aligned) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full md:w-[75%] relative z-10 self-end mt-8 md:mt-0"
          >
            <div className="p-8 md:p-10 rounded-[2rem] bg-surface-card/80 backdrop-blur-xl border border-border-card shadow-lg relative overflow-hidden group">
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-secondary/5 rounded-full blur-[50px] transition-opacity group-hover:opacity-100 opacity-0" />
              <HeartPulse size={32} className="text-accent-secondary mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold text-fg-base mb-4 tracking-tight">The Medical Discipline</h3>
              <p className="text-text-secondary font-light leading-relaxed text-base md:text-lg">
                Balancing rigorous academic studies in medicine (BHMS) with a relentless dedication to software engineering. This unique duality fuels my analytical thinking and creative problem-solving.
              </p>
            </div>

            {/* Floating Widget */}
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -top-6 -left-4 md:-left-8 p-3 rounded-2xl bg-surface-card border border-border-card shadow-xl flex items-center gap-3 z-20"
            >
              <div className="w-2 h-2 rounded-full bg-accent-secondary animate-pulse" />
              <span className="text-sm font-bold text-fg-base">BHMS Scholar</span>
            </motion.div>
          </motion.div>

          {/* CARD 3: The Moniker (Center Aligned / Full Width) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full relative z-10 mt-8 md:mt-0"
          >
            <div className="p-8 md:p-12 rounded-[2rem] bg-gradient-to-br from-surface-card via-surface-card to-accent-primary/5 backdrop-blur-xl border border-border-card shadow-lg flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
              <div className="p-6 rounded-full bg-bg-base border border-border-card shadow-inner shrink-0 relative">
                <div className="absolute inset-0 bg-accent-primary/20 rounded-full blur-md animate-pulse" />
                <Headphones size={36} className="text-fg-base relative z-10" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-fg-base mb-3 tracking-tight">The Creative Moniker: <span className="text-accent-primary">"Vortex"</span></h3>
                <p className="text-text-secondary font-light leading-relaxed text-base md:text-lg max-w-3xl">
                  Logic meets rhythm. When I'm not debugging APIs, I'm immersed in the Indian Desi Hip-Hop scene. I channel creative energy inspired by artists like Seedhe Maut and KR$NA to keep my mind sharp.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
