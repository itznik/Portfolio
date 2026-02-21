"use client";

import { motion } from "framer-motion";
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, 
  SiMongodb, SiSupabase, SiJavascript, SiTypescript, 
  SiPython, SiCplusplus, SiMysql 
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

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
    <section id="skills" className="relative w-full max-w-7xl mx-auto py-24 md:py-32 px-4 sm:px-6 lg:px-8 z-10">
      
      {/* 1. UNIQUE SVG VISUALIZER: The Data Waveform */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center opacity-30">
        <svg className="w-full h-[400px] text-border-card" preserveAspectRatio="none" viewBox="0 0 100 100">
          <path d="M 0 50 Q 25 20, 50 50 T 100 50" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <path d="M 0 60 Q 25 30, 50 60 T 100 60" fill="none" stroke="currentColor" strokeWidth="0.2" strokeDasharray="2 2" />
          <path d="M 0 70 Q 25 40, 50 70 T 100 70" fill="none" stroke="currentColor" strokeWidth="0.1" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-16 w-full">
        
        {/* Left: Section Header */}
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-fg-base mb-4">
            The Tech <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
              Arsenal.
            </span>
          </h2>
          <p className="text-text-secondary font-light text-base md:text-lg">
            A comprehensive suite of languages and frameworks used to engineer scalable, high-performance systems.
          </p>
        </div>

        {/* Right: Clean, Unified Grid (No individual card backgrounds) */}
        <div className="w-full md:w-2/3">
          <div className="p-6 md:p-10 rounded-[2rem] bg-surface-card/40 backdrop-blur-xl border border-border-card shadow-sm">
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 md:gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group flex flex-col items-center justify-center gap-3 cursor-default"
                >
                  <skill.icon 
                    className={`text-3xl md:text-4xl text-text-secondary transition-all duration-300 group-hover:-translate-y-1 ${skill.color}`} 
                  />
                  <span className="text-[10px] md:text-xs font-bold text-text-secondary tracking-widest uppercase text-center group-hover:text-fg-base transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
