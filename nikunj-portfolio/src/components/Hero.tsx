"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-24 pb-12 overflow-hidden px-4 sm:px-6 lg:px-8">
      
      {/* 1. AMBIENT ANIMATED BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[40vw] h-[40vw] min-w-[300px] min-h-[300px] bg-accent-primary/20 rounded-full blur-[100px] -translate-x-1/3 -translate-y-1/4"
        />
        <motion.div 
          animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[50vw] h-[50vw] min-w-[400px] min-h-[400px] bg-accent-secondary/20 rounded-full blur-[120px] translate-x-1/3 translate-y-1/4"
        />
      </div>

      {/* 2. MAIN CONTENT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
        
        {/* Left: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-3/5 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-surface-card/80 backdrop-blur-md border border-border-card mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
            <span className="text-xs font-semibold tracking-wide text-fg-base uppercase">Available for Work</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-fg-base mb-6 leading-[1.05]">
            Engineering the web, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
              pixel by pixel.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mb-10 leading-relaxed font-light">
            I'm <strong className="text-fg-base font-semibold">Nikunj Variya</strong>. I build scalable, high-performance web applications from the ground up using the MERN stack and Next.js.
            <span className="flex items-center justify-center lg:justify-start gap-1 mt-4 text-sm font-medium">
              <MapPin size={16} className="text-accent-secondary" /> Based in Surat, Gujarat
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start">
            <a href="#projects" className="group flex items-center justify-center gap-2 px-8 py-4 bg-fg-base text-bg-base rounded-full font-bold overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg">
              View My Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="px-8 py-4 bg-surface-card text-fg-base border border-border-card rounded-full font-medium transition-all hover:bg-bg-base hover:-translate-y-1 hover:shadow-sm">
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Right: The User Image Frame */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          className="w-full max-w-[300px] lg:max-w-[450px] aspect-[4/5] relative rounded-[2rem] overflow-hidden border-4 border-surface-card shadow-2xl group mx-auto lg:mx-0 mt-8 lg:mt-0"
        >
          {/* Automatically fetching your GitHub Profile Image */}
          <Image 
            src="https://github.com/itznik.png" 
            alt="Nikunj Variya"
            width={500}
            height={600}
            unoptimized
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
            priority
          />
          {/* Inner glass gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-base/80 via-transparent to-transparent opacity-60 pointer-events-none" />
        </motion.div>

      </div>
    </section>
  );
}
