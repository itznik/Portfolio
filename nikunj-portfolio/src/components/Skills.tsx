"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, 
  SiMongodb, SiSupabase, SiJavascript, SiTypescript, 
  SiPython, SiCplusplus, SiJava, SiMysql 
} from "react-icons/si";

// Using your actual, comprehensive tech stack with official brand colors for hover effects
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
  { name: "Java", icon: SiJava, color: "group-hover:text-[#007396]" },
  { name: "C++", icon: SiCplusplus, color: "group-hover:text-[#00599C]" },
];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll specifically for the background "Vortex" animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Rotate the background geometric rings based on scroll
  const rotateOuter = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotateInner = useTransform(scrollYProgress, [0, 1], [360, 0]);
  const scaleVortex = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 0.8]);

  return (
    <section ref={containerRef} id="skills" className="relative w-full max-w-7xl mx-auto py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* --- THE UNIQUE CONCEPT: SCROLL-LINKED VORTEX NODE --- */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-20 dark:opacity-30">
        <motion.div 
          style={{ rotate: rotateOuter, scale: scaleVortex }}
          className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full border border-dashed border-accent-primary/50"
        />
        <motion.div 
          style={{ rotate: rotateInner, scale: scaleVortex }}
          className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full border border-dotted border-accent-secondary/50"
        />
        {/* Core Glow */}
        <div className="absolute w-64 h-64 bg-gradient-to-tr from-accent-primary to-accent-secondary blur-[100px] opacity-20 rounded-full" />
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-16 md:mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-fg-base mb-4"
        >
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">Tech Arsenal</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base md:text-lg"
        >
          A comprehensive suite of languages and frameworks used to engineer scalable, high-performance systems.
        </motion.p>
      </div>

      {/* THE GRID ENGINE:
        Mobile: 3 Columns (App icon style)
        Tablet: 4 Columns
        Desktop: 6 Columns
      */}
      <div className="relative z-10 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
            className="group flex flex-col items-center justify-center p-4 md:p-6 rounded-2xl bg-surface-card/50 backdrop-blur-xl border border-border-card transition-all hover:-translate-y-2 hover:shadow-lg hover:border-accent-primary/30 hover:bg-surface-card/80 aspect-square"
          >
            <skill.icon 
              className={`text-4xl md:text-5xl text-gray-500 dark:text-gray-400 mb-3 transition-all duration-300 group-hover:scale-110 ${skill.color}`} 
            />
            <span className="text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-300 tracking-wide text-center group-hover:text-fg-base transition-colors">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
