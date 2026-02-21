"use client";

import { motion } from "framer-motion";
import { Code2, MapPin, Headphones, Zap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative w-full max-w-6xl mx-auto py-24 md:py-32 px-4 sm:px-6 lg:px-8 z-10">
      
      {/* Ambient Background Graphics specifically for the About section */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div 
          animate={{ y: [0, -20, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-10 w-64 h-64 bg-accent-primary/20 rounded-full blur-[80px]"
        />
        <motion.div 
          animate={{ y: [0, 30, 0], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-10 w-80 h-80 bg-accent-secondary/20 rounded-full blur-[100px]"
        />
      </div>

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        className="mb-12 md:mb-20 text-center md:text-left relative z-10"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-fg-base mb-4">
          Behind the <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">Code.</span>
        </h2>
      </motion.div>

      {/* THE LAYOUT ENGINE:
        Mobile: Clean Vertical Stack (flex-col) with generous gaps.
        Desktop: 3-Column Grid.
      */}
      <div className="relative z-10 flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-8">
        
        {/* 1. Main Bio Box */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2 p-8 md:p-10 rounded-3xl bg-surface-card/60 backdrop-blur-xl border border-border-card shadow-sm relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-primary/10 rounded-full blur-[60px] -mr-32 -mt-32 transition-opacity group-hover:opacity-100 opacity-50" />
          
          <Code2 size={32} className="text-accent-primary mb-6" />
          <h3 className="text-2xl md:text-3xl font-bold text-fg-base mb-4 tracking-tight">The Engineer</h3>
          <p className="text-text-secondary font-light leading-relaxed text-base md:text-lg">
            I'm Nikunj Variya, a 21-year-old Full-Stack Developer driven by a passion for building seamless, high-performance web applications. I specialize in the MERN stack and Next.js, architecting everything from complex backend systems to highly interactive user interfaces. I believe great software isn't just about writing code—it's about crafting experiences.
          </p>
        </motion.div>

        {/* 2. Location Box */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-1 p-8 md:p-10 rounded-3xl bg-surface-card/60 backdrop-blur-xl border border-border-card shadow-sm flex flex-col justify-between"
        >
          <div>
            <MapPin size={32} className="text-accent-secondary mb-6" />
            <h3 className="text-2xl font-bold text-fg-base mb-2 tracking-tight">Based In</h3>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-xl font-medium text-fg-base">Surat, Gujarat</p>
            <p className="text-text-secondary text-sm mt-1">India</p>
          </div>
        </motion.div>

        {/* 3. The "Vortex" Creative Box */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-1 p-8 md:p-10 rounded-3xl bg-surface-card/60 backdrop-blur-xl border border-border-card shadow-sm relative overflow-hidden group"
        >
           <div className="absolute bottom-0 right-0 w-48 h-48 bg-accent-secondary/10 rounded-full blur-[50px] -mr-20 -mb-20 transition-opacity group-hover:opacity-100 opacity-50" />
          <Headphones size={32} className="text-fg-base mb-6" />
          <h3 className="text-xl font-bold text-fg-base mb-3 tracking-tight">The Creative Moniker</h3>
          <p className="text-text-secondary font-light text-sm md:text-base leading-relaxed">
            Logic meets rhythm. When I'm not debugging APIs, I'm immersed in the Indian Desi Hip-Hop scene. Writing under the stage name <strong className="text-fg-base font-semibold">"Vortex,"</strong> I channel creative energy inspired by artists like Seedhe Maut and KR$NA.
          </p>
        </motion.div>

        {/* 4. The Multidisciplinary Drive Box */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="md:col-span-2 p-8 md:p-10 rounded-3xl bg-gradient-to-br from-accent-primary/10 to-accent-secondary/5 border border-border-card shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-6"
        >
          <div className="p-4 rounded-full bg-surface-card border border-border-card shrink-0 shadow-sm">
            <Zap size={28} className="text-accent-primary" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-fg-base mb-2 tracking-tight">Multidisciplinary Focus</h3>
            <p className="text-text-secondary font-light leading-relaxed text-sm md:text-base">
              Balancing rigorous academic studies in medicine (BHMS) alongside a relentless, self-taught dedication to software engineering. This unique combination of analytical study and creative problem-solving defines my work ethic.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
