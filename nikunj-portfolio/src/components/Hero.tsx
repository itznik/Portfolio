"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-24 pb-12 overflow-hidden px-4 sm:px-6 lg:px-8">
      
      {/* 1. UNIQUE SVG VISUALIZER: The Topographic Core */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-20 dark:opacity-30">
        <motion.svg 
          animate={{ scale: [1, 1.05, 1], rotate: [0, 2, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute w-[150vw] h-[150vw] max-w-[1200px] max-h-[1200px] text-accent-primary" 
          viewBox="0 0 100 100" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="0.1"
        >
          {/* Concentric Topographic/Radar Rings */}
          <circle cx="50" cy="50" r="10" />
          <circle cx="50" cy="50" r="20" strokeDasharray="1 2" />
          <circle cx="50" cy="50" r="30" />
          <circle cx="50" cy="50" r="40" strokeDasharray="4 4" />
          <circle cx="50" cy="50" r="50" />
          <circle cx="50" cy="50" r="60" strokeDasharray="2 6" />
        </motion.svg>
        {/* Core Glow */}
        <div className="absolute w-64 h-64 bg-accent-primary/20 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8 mt-12 lg:mt-0">
        
        {/* Left: Clean, Uncluttered Typography */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-primary"></span>
            </span>
            <span className="text-sm font-bold tracking-widest text-text-secondary uppercase">Available for Work</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-black tracking-tighter text-fg-base mb-6 leading-[1.05]">
            Bridging the gap between <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
              logic and design.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mb-10 leading-relaxed font-light">
            I'm <strong className="text-fg-base font-semibold">Nikunj Variya</strong>. I build scalable, high-performance web applications from the ground up using the MERN stack and Next.js.
            <span className="flex items-center justify-center lg:justify-start gap-2 mt-4 text-sm font-medium text-text-secondary">
              <MapPin size={16} className="text-accent-secondary" /> Surat, Gujarat
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start">
            <a href="#projects" className="group flex items-center justify-center gap-3 px-8 py-4 bg-fg-base text-bg-base rounded-full font-bold transition-all hover:-translate-y-1 shadow-lg">
              View My Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Right: Clean, Embedded Image Frame (No floating junk) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-[40%] flex justify-center lg:justify-end"
        >
          <div className="relative w-[85%] max-w-[400px] aspect-[4/5] rounded-[2rem] overflow-hidden border border-border-card shadow-2xl bg-surface-card p-2">
            <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden bg-bg-base">
              <Image 
                src="https://github.com/itznik.png" 
                alt="Nikunj Variya"
                fill
                unoptimized
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                priority
              />
              {/* Inner gradient for text contrast if needed later */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-base/60 via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
