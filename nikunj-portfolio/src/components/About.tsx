"use client";

import { motion } from "framer-motion";
import { Code2, MapPin, Headphones, Zap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative w-full max-w-6xl mx-auto py-20 md:py-32 px-0 md:px-6 z-10 overflow-hidden">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        className="mb-12 md:mb-16 px-4 md:px-0"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Behind the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-magenta">Code.</span>
        </h2>
      </motion.div>

      {/* THE LAYOUT ENGINE:
        Mobile: Flex Column (Bio on top, Carousel below)
        Desktop: 3-Column CSS Grid 
      */}
      <div className="flex flex-col gap-6 px-4 md:px-0 md:grid md:grid-cols-3">
        
        {/* 1. Main Bio Box (Spans 2 columns on desktop, fixed top on mobile) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2 p-6 md:p-10 rounded-3xl bg-[#18181B]/60 backdrop-blur-xl border border-white/5 shadow-glass relative overflow-hidden group w-full"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/10 rounded-full blur-[80px] -mr-32 -mt-32 transition-opacity group-hover:opacity-100 opacity-50" />
          
          <Code2 size={28} className="text-brand-cyan mb-4 md:mb-6 md:w-8 md:h-8" />
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 tracking-tight">The Engineer</h3>
          <p className="text-slate-300 font-light leading-relaxed text-sm md:text-lg">
            I'm Nikunj Variya, a 21-year-old Full-Stack Developer driven by a passion for building seamless, high-performance web applications. I specialize in the MERN stack and Next.js, architecting everything from complex backend systems to highly interactive user interfaces. I believe great software isn't just about writing code—it's about crafting experiences.
          </p>
        </motion.div>

        {/* SECONDARY CARDS WRAPPER
          Mobile: Horizontal Overflow Swipe Container
          Desktop: `md:contents` makes this div invisible to the CSS Grid, allowing 
          the cards to snap directly into the parent's 3-column layout!
        */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 -mx-4 px-4 md:mx-0 md:px-0 md:pb-0 no-scrollbar md:contents">
          
          {/* 2. Location Box */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="min-w-[75vw] sm:min-w-[300px] snap-center md:min-w-0 md:col-span-1 p-6 md:p-10 rounded-3xl bg-[#18181B]/60 backdrop-blur-xl border border-white/5 shadow-glass flex flex-col justify-between"
          >
            <div>
              <MapPin size={28} className="text-brand-magenta mb-4 md:mb-6 md:w-8 md:h-8" />
              <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2 tracking-tight">Based In</h3>
            </div>
            <div className="mt-8 md:mt-0">
              <p className="text-lg md:text-xl font-medium text-slate-200">Surat, Gujarat</p>
              <p className="text-slate-500 text-xs md:text-sm mt-1">India</p>
            </div>
          </motion.div>

          {/* 3. The "Vortex" Creative Box */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="min-w-[85vw] sm:min-w-[350px] snap-center md:min-w-0 md:col-span-1 p-6 md:p-10 rounded-3xl bg-[#18181B]/60 backdrop-blur-xl border border-white/5 shadow-glass relative overflow-hidden group"
          >
             <div className="absolute bottom-0 right-0 w-48 h-48 bg-brand-magenta/10 rounded-full blur-[60px] -mr-20 -mb-20 transition-opacity group-hover:opacity-100 opacity-50" />
            <Headphones size={28} className="text-white mb-4 md:mb-6 md:w-8 md:h-8" />
            <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 tracking-tight">The Creative Moniker</h3>
            <p className="text-slate-400 font-light text-xs md:text-sm leading-relaxed">
              Logic meets rhythm. When I'm not debugging APIs or aligning CSS grids, I'm immersed in the Indian Desi Hip-Hop scene. Writing under the stage name <strong>"Vortex,"</strong> I draw heavy inspiration from artists like Seedhe Maut and KR$NA to channel my creative energy.
            </p>
          </motion.div>

          {/* 4. The Multidisciplinary Drive Box (Spans 2 columns on desktop) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="min-w-[90vw] sm:min-w-[400px] snap-center md:min-w-0 md:col-span-2 p-6 md:p-10 rounded-3xl bg-gradient-to-br from-brand-cyan/10 to-brand-magenta/5 border border-white/10 shadow-glass flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6"
          >
            <div className="p-3 md:p-4 rounded-full bg-[#09090B] border border-white/5 shrink-0">
              <Zap size={24} className="text-brand-cyan md:w-7 md:h-7" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 tracking-tight">Multidisciplinary Focus</h3>
              <p className="text-slate-300 font-light leading-relaxed text-xs md:text-sm">
                Balancing rigorous academic studies in medicine (BHMS) alongside a relentless, self-taught dedication to software engineering. It's this unique combination of intense analytical study and creative problem-solving that defines my work ethic.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
