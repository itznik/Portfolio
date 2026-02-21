"use client";

import { motion } from "framer-motion";
import { Code2, MapPin, Headphones, Zap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative w-full max-w-6xl mx-auto py-32 px-4 sm:px-6 z-10">
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Behind the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-magenta">Code.</span>
        </h2>
      </motion.div>

      {/* Bento Box Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Main Bio Box (Spans 2 columns on desktop) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2 p-8 md:p-10 rounded-3xl bg-[#18181B]/60 backdrop-blur-xl border border-white/5 shadow-glass relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/10 rounded-full blur-[80px] -mr-32 -mt-32 transition-opacity group-hover:opacity-100 opacity-50" />
          
          <Code2 size={32} className="text-brand-cyan mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">The Engineer</h3>
          <p className="text-slate-300 font-light leading-relaxed text-lg">
            I'm Nikunj Variya, a 21-year-old Full-Stack Developer driven by a passion for building seamless, high-performance web applications. I specialize in the MERN stack and Next.js, architecting everything from complex backend systems to highly interactive, animated user interfaces. I believe great software isn't just about writing code—it's about crafting experiences.
          </p>
        </motion.div>

        {/* Location Box */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-8 md:p-10 rounded-3xl bg-[#18181B]/60 backdrop-blur-xl border border-white/5 shadow-glass flex flex-col justify-between"
        >
          <div>
            <MapPin size={32} className="text-brand-magenta mb-6" />
            <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Based In</h3>
          </div>
          <div>
            <p className="text-xl font-medium text-slate-200">Surat, Gujarat</p>
            <p className="text-slate-500 text-sm mt-1">India</p>
          </div>
        </motion.div>

        {/* The "Vortex" Creative Box */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-8 md:p-10 rounded-3xl bg-[#18181B]/60 backdrop-blur-xl border border-white/5 shadow-glass relative overflow-hidden group"
        >
           <div className="absolute bottom-0 right-0 w-48 h-48 bg-brand-magenta/10 rounded-full blur-[60px] -mr-20 -mb-20 transition-opacity group-hover:opacity-100 opacity-50" />
          <Headphones size={32} className="text-white mb-6" />
          <h3 className="text-xl font-bold text-white mb-3 tracking-tight">The Creative Moniker</h3>
          <p className="text-slate-400 font-light text-sm leading-relaxed">
            Logic meets rhythm. When I'm not debugging APIs or perfectly aligning CSS grids, I'm deeply immersed in the Indian Desi Hip-Hop scene. Writing and producing under the stage name <strong>"Vortex,"</strong> I draw heavy inspiration from artists like Seedhe Maut and KR$NA to channel my creative energy.
          </p>
        </motion.div>

        {/* The Multidisciplinary Drive Box (Spans 2 columns) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="md:col-span-2 p-8 md:p-10 rounded-3xl bg-gradient-to-br from-brand-cyan/10 to-brand-magenta/5 border border-white/10 shadow-glass flex items-center gap-6"
        >
          <div className="p-4 rounded-full bg-[#09090B] border border-white/5 hidden sm:block">
            <Zap size={28} className="text-brand-cyan" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Multidisciplinary Focus</h3>
            <p className="text-slate-300 font-light leading-relaxed">
              Balancing rigorous academic studies in medicine (BHMS) alongside a relentless, self-taught dedication to software engineering. It's this unique combination of intense analytical study and creative problem-solving that defines my work ethic.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
