"use client";

import { motion } from "framer-motion";
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, 
  SiMongodb, SiSupabase, SiJavascript, SiTypescript, 
  SiPython, SiCplusplus, SiMysql 
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { Database, Layout, ServerCog } from "lucide-react";

const skills = [
  { name: "React.js", icon: SiReact, color: "group-hover:text-[#61DAFB]" },
  { name: "Next.js", icon: SiNextdotjs, color: "group-hover:text-fg-base dark:group-hover:text-white" },
  { name: "JavaScript", icon: SiJavascript, color: "group-hover:text-[#F7DF1E]" },
  { name: "TypeScript", icon: SiTypescript, color: "group-hover:text-[#3178C6]" },
  { name: "Node.js", icon: SiNodedotjs, color: "group-hover:text-[#339933]" },
  { name: "Express.js", icon: SiExpress, color: "group-hover:text-fg-base dark:group-hover:text-white" },
  { name: "MongoDB", icon: SiMongodb, color: "group-hover:text-[#47A248]" },
  { name: "Supabase", icon: SiSupabase, color: "group-hover:text-[#3ECF8E]" },
  { name: "SQL", icon: SiMysql, color: "group-hover:text-[#4479A1]" },
  { name: "Python", icon: SiPython, color: "group-hover:text-[#3776AB]" },
  { name: "Java", icon: FaJava, color: "group-hover:text-[#007396]" }, 
  { name: "C++", icon: SiCplusplus, color: "group-hover:text-[#00599C]" },
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full max-w-7xl mx-auto py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden z-10">
      
      {/* 1. BACKGROUND: The Blueprint & Constellation Mesh */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border-card)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-card)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_20%,transparent_100%)]" />
        
        {/* SVG Constellation lines running behind the grid */}
        <svg className="absolute w-full h-[600px] max-w-4xl text-border-card" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M 10 20 L 50 10 L 90 20 L 80 50 L 50 90 L 20 50 Z" fill="none" stroke="currentColor" strokeWidth="0.2" />
          <path d="M 50 10 L 50 90" fill="none" stroke="currentColor" strokeWidth="0.2" />
          <path d="M 10 20 L 80 50" fill="none" stroke="currentColor" strokeWidth="0.2" />
          <path d="M 90 20 L 20 50" fill="none" stroke="currentColor" strokeWidth="0.2" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-fg-base mb-4"
          >
            The Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">Arsenal.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary max-w-2xl mx-auto text-base md:text-lg font-light"
          >
            A comprehensive suite of languages and frameworks used to engineer scalable, high-performance systems.
          </motion.p>
        </div>

        {/* 2. OVERLAPPING FLOATING SUMMARY BADGES */}
        <div className="w-full max-w-4xl flex flex-wrap justify-center gap-4 mb-12 z-20 relative">
          {[
            { label: "Frontend", icon: Layout, color: "text-accent-primary" },
            { label: "Backend", icon: ServerCog, color: "text-accent-secondary" },
            { label: "Database", icon: Database, color: "text-fg-base" }
          ].map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              className="flex items-center gap-2 px-5 py-2.5 bg-surface-card/90 backdrop-blur-md border border-border-card rounded-full shadow-lg"
            >
              <badge.icon size={16} className={badge.color} />
              <span className="text-sm font-bold text-fg-base">{badge.label}</span>
            </motion.div>
          ))}
        </div>

        {/* 3. THE APP-ICON GRID ENGINE */}
        <div className="relative z-10 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 w-full max-w-5xl">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
              className="group flex flex-col items-center justify-center p-4 md:p-6 rounded-[1.5rem] bg-surface-card/60 backdrop-blur-xl border border-border-card transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(0,216,255,0.3)] hover:border-accent-primary/40 aspect-square"
            >
              <skill.icon 
                className={`text-4xl md:text-5xl text-text-secondary mb-3 transition-all duration-300 group-hover:scale-110 ${skill.color}`} 
              />
              <span className="text-[10px] md:text-xs font-bold text-text-secondary tracking-widest uppercase text-center group-hover:text-fg-base transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
