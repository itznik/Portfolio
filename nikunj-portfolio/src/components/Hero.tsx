"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Terminal } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center pt-24 pb-12 z-10">
      
      {/* The Origin Point for the SVG Thread (Cyan Glow) */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 1.2, type: "spring" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-cyan shadow-[0_0_20px_rgba(0,216,255,0.8)]"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto flex flex-col items-center"
      >
        {/* Dark Glassmorphic Badge */}
        <motion.div 
          variants={itemVariants}
          className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-neon mb-8"
        >
          <Terminal size={16} className="text-brand-cyan" />
          <span className="text-sm font-medium text-slate-300 tracking-wide flex items-center gap-2">
            MERN Stack Developer <span className="text-slate-500">•</span> 21 y/o
          </span>
        </motion.div>

        {/* Massive Technical Headline */}
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6 leading-[1.1]"
        >
          Engineering the web, <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-magenta">
            pixel by pixel.
          </span>
        </motion.h1>

        {/* Location & Intro */}
        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed font-light"
        >
          I'm Nikunj Variya. I build scalable, high-performance web applications from the ground up. 
          <span className="flex items-center justify-center gap-1 mt-3 text-slate-500 text-base">
            <MapPin size={16} /> Based in Surat, Gujarat
          </span>
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <button className="group relative flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-dark rounded-full font-bold overflow-hidden transition-all hover:shadow-neon hover:-translate-y-1">
            <span className="relative z-10">Explore Projects</span>
            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="px-8 py-4 bg-brand-surface text-white border border-white/10 rounded-full font-medium transition-all hover:bg-white/5 hover:border-white/20 hover:shadow-neon-hover hover:-translate-y-1">
            Contact Me
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
