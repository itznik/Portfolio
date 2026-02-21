"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Code2, Sparkles, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-32 pb-20 overflow-hidden px-4 sm:px-6 lg:px-8">
      
      {/* 1. UPGRADED AMBIENT BACKGROUND: Richer gradients & Blueprint Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
        {/* Faded Blueprint Grid specifically for the Hero */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border-card)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-card)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] opacity-50" />
        
        {/* High-saturation floating orbs */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[50vw] h-[50vw] min-w-[400px] min-h-[400px] bg-accent-primary/20 rounded-full blur-[120px] -translate-x-1/4 -translate-y-1/4 mix-blend-screen dark:mix-blend-color-dodge"
        />
        <motion.div 
          animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[60vw] h-[60vw] min-w-[500px] min-h-[500px] bg-accent-secondary/20 rounded-full blur-[150px] translate-x-1/4 translate-y-1/4 mix-blend-screen dark:mix-blend-color-dodge"
        />
      </div>

      {/* 2. MAIN CONTENT (With floating widgets) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8 mt-8 lg:mt-0">
        
        {/* Left: Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-20"
        >
          <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-surface-card/80 backdrop-blur-xl border border-border-card mb-8 shadow-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-primary"></span>
            </span>
            <span className="text-xs font-bold tracking-widest text-fg-base uppercase">Available for New Projects</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter text-fg-base mb-6 leading-[1.1]">
            Bridging the gap between <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary animate-gradient-x relative">
              logic and design.
              {/* SVG Underline graphic */}
              <svg className="absolute w-full h-4 -bottom-1 left-0 text-accent-secondary/50" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0 20 Q 50 0 100 20" fill="none" stroke="currentColor" strokeWidth="4" />
              </svg>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mb-10 leading-relaxed font-light">
            I'm <strong className="text-fg-base font-semibold">Nikunj Variya</strong>. I build scalable, high-performance web applications from the ground up using the MERN stack and Next.js.
            <span className="flex items-center justify-center lg:justify-start gap-2 mt-4 text-sm font-medium text-text-secondary">
              <MapPin size={16} className="text-accent-primary" /> Surat, Gujarat
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start">
            <a href="#projects" className="group flex items-center justify-center gap-3 px-8 py-4 bg-fg-base text-bg-base rounded-2xl font-bold overflow-hidden transition-all hover:-translate-y-1 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.1)]">
              View My Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="px-8 py-4 bg-surface-card text-fg-base border border-border-card rounded-2xl font-bold transition-all hover:bg-border-card/50 hover:-translate-y-1 shadow-sm">
              Read Manifesto
            </a>
          </div>
        </motion.div>

        {/* Right: The Layered "Helpio-style" Image Frame with Floating Widgets */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative mt-12 lg:mt-0 z-10">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="relative w-[85%] max-w-[400px] aspect-[4/5]"
          >
            {/* Main Image Container */}
            <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden border border-border-card shadow-2xl bg-surface-card">
              <Image 
                src="https://github.com/itznik.png" 
                alt="Nikunj Variya"
                width={600}
                height={800}
                unoptimized
                className="object-cover w-full h-full scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-base/90 via-bg-base/20 to-transparent" />
            </div>

            {/* FLOATING WIDGET 1: Top Left (Like "100% Vetted" from Helpio) */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -left-8 md:-left-16 p-4 rounded-2xl bg-surface-card/90 backdrop-blur-xl border border-border-card shadow-xl flex items-center gap-4 z-20"
            >
              <div className="p-2.5 bg-accent-primary/10 rounded-full text-accent-primary">
                <Code2 size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-fg-base">Full-Stack</span>
                <span className="text-xs text-text-secondary font-medium">MERN & Next.js</span>
              </div>
            </motion.div>

            {/* FLOATING WIDGET 2: Bottom Right (Like "Verified Impact" from Helpio) */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -right-4 md:-right-12 p-4 rounded-2xl bg-surface-card/90 backdrop-blur-xl border border-border-card shadow-xl flex items-center gap-4 z-20"
            >
              <div className="p-2.5 bg-accent-secondary/10 rounded-full text-accent-secondary">
                <Sparkles size={20} />
              </div>
              <div className="flex flex-col pr-4">
                <span className="text-sm font-bold text-fg-base">100% Vetted</span>
                <span className="text-xs text-text-secondary font-medium flex items-center gap-1">
                  <CheckCircle2 size={12} className="text-green-500" /> Scalable Code
                </span>
              </div>
            </motion.div>

            {/* Decorative SVG Elements connecting behind the image */}
            <svg className="absolute -z-10 -top-20 -right-20 w-64 h-64 text-border-card opacity-50 animate-pulse" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </svg>
            
          </motion.div>
        </div>

      </div>
    </section>
  );
}
