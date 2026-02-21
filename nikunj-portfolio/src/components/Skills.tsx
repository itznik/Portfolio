"use client";

import { motion } from "framer-motion";
import { Database, Server, Code2, Cpu, Globe, Layers } from "lucide-react";

// The data for your tech stack. We alternate 'left' and 'right' so the plane weaves between them.
const skills = [
  { name: "MongoDB", description: "NoSQL Database Architecture", icon: Database, color: "text-emerald-400", align: "left" },
  { name: "Express.js", description: "RESTful API Development", icon: Server, color: "text-slate-300", align: "right" },
  { name: "React.js", description: "Dynamic Interactive UIs", icon: Code2, color: "text-brand-cyan", align: "left" },
  { name: "Node.js", description: "Scalable Backend Execution", icon: Cpu, color: "text-green-400", align: "right" },
  { name: "Next.js 15", description: "SSR, SSG & Full-Stack Routes", icon: Globe, color: "text-white", align: "left" },
  { name: "Tailwind CSS v4", description: "Utility-first Styling Engine", icon: Layers, color: "text-brand-cyan", align: "right" },
];

export default function Skills() {
  return (
    <section className="relative z-10 w-full max-w-5xl mx-auto py-32 px-4 sm:px-6">
      
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-24"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-magenta">Tech Arsenal</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          My primary stack for engineering fast, stable, and highly scalable web applications.
        </p>
      </motion.div>

      {/* Skills Grid / Staggered Path */}
      <div className="flex flex-col gap-8 md:gap-16">
        {skills.map((skill, index) => {
          const isLeft = skill.align === "left";
          
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`flex w-full ${isLeft ? "justify-start" : "justify-end"}`}
            >
              {/* The Glassmorphic Skill Card */}
              <div className="group relative w-full md:w-[45%] p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:shadow-neon hover:border-brand-cyan/50 hover:-translate-y-2 cursor-default overflow-hidden">
                
                {/* Subtle hover gradient inject inside the card */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex items-center gap-5">
                  <div className={`p-4 rounded-xl bg-brand-surface border border-white/5 shadow-inner ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                    <skill.icon size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1 tracking-tight">{skill.name}</h3>
                    <p className="text-sm text-slate-400 font-light">{skill.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
