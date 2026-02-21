"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";

export default function Hero() {
  // Animation variants for staggered entrance
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
      
      {/* The Origin Point for the SVG Thread (We'll connect the line to this later) */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 1.2, type: "spring" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-teal shadow-[0_0_20px_rgba(20,184,166,0.6)]"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto flex flex-col items-center"
      >
        {/* Glassmorphic Badge */}
        <motion.div 
          variants={itemVariants}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 backdrop-blur-md border border-white/50 shadow-glass mb-8"
        >
          <Terminal size={16} className="text-brand-teal" />
          <span className="text-sm font-semibold text-slate-700 tracking-wide">
            Full-Stack MERN & Next.js Developer
          </span>
        </motion.div>

        {/* Massive Modern Headline */}
        <motion.h1 
          variants={itemVariants}
          className="text-6xl md:text-8xl font-extrabold tracking-tight text-brand-dark mb-6 leading-[1.1]"
        >
          Building the web, <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-indigo">
            radically better.
          </span>
        </motion.h1>

        {/* Clean, readable subheadline */}
        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed"
        >
          Hi, I'm Nikunj Variya. I engineer high-performance, visually striking web applications from end to end. Welcome to my digital workspace.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <button className="group relative flex items-center justify-center gap-2 px-8 py-4 bg-brand-dark text-white rounded-full font-medium overflow-hidden transition-all hover:shadow-glass-hover hover:-translate-y-1">
            <span className="relative z-10">View My Work</span>
            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            {/* Subtle hover gradient inject */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/20 to-brand-indigo/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
          
          <button className="px-8 py-4 bg-white text-brand-dark border border-slate-200 rounded-full font-medium transition-all hover:bg-slate-50 hover:shadow-glass hover:-translate-y-1">
            Let's Talk
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
