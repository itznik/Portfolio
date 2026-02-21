"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Monitor, Layout, Smartphone, CheckCircle2, Rocket } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Nexus E-Commerce Engine",
    description: "A high-performance, full-stack e-commerce platform built with Next.js 15. Features secure Stripe integration and sub-second page loads.",
    tech: ["Next.js", "MongoDB", "Tailwind", "Stripe"],
    github: "#",
    live: "#",
    icon: Monitor,
    color: "from-accent-primary to-blue-600",
    badge: "Production Ready"
  },
  {
    id: 2,
    title: "Pulse Real-Time Chat",
    description: "A scalable MERN stack chat application using Socket.io for instantaneous bidirectional communication and JWT authentication.",
    tech: ["React", "Node.js", "Socket.io"],
    github: "#",
    live: "#",
    icon: Smartphone,
    color: "from-accent-secondary to-purple-600",
    badge: "WebSockets"
  },
  {
    id: 3,
    title: "Vortex Analytics Dashboard",
    description: "Complex data visualization dashboard for SaaS products. Consumes large datasets via REST APIs with fluid animations.",
    tech: ["MERN Stack", "Framer Motion", "Recharts"],
    github: "#",
    live: "#",
    icon: Layout,
    color: "from-accent-primary to-accent-secondary",
    badge: "Data Heavy"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full max-w-7xl mx-auto py-24 md:py-32 px-4 sm:px-6 lg:px-8 z-10 overflow-hidden">
      
      {/* 1. SECTION BACKGROUND: Deep Blueprint Mesh */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border-card)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-card)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-30" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-primary/5 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-secondary/5 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="relative z-10 w-full">
        
        {/* Header */}
        <div className="text-center mb-20 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-card border border-border-card shadow-sm mb-6"
          >
            <Rocket size={14} className="text-accent-primary" />
            <span className="text-xs font-bold tracking-widest text-fg-base uppercase">Shipped Work</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-fg-base mb-4"
          >
            Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">Arsenal.</span>
          </motion.h2>
        </div>

        {/* 2. THE TIMELINE LAYOUT */}
        <div className="relative flex flex-col gap-24 md:gap-40">
          
          {/* Central Connecting SVG Line (Desktop Only) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 overflow-hidden z-0">
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <line x1="1" y1="0" x2="1" y2="100%" stroke="var(--border-card)" strokeWidth="2" strokeDasharray="8 8" />
              <motion.line 
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                x1="1" y1="0" x2="1" y2="100%" 
                stroke="var(--accent-primary)" 
                strokeWidth="2" 
                className="drop-shadow-[0_0_8px_rgba(0,216,255,0.8)]"
              />
            </svg>
          </div>

          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-20 items-center relative z-10`}
              >
                
                {/* Visual / Image Side with Floating Badges */}
                <div className="w-full lg:w-1/2 relative">
                  
                  {/* Central Timeline Node (Desktop Only) */}
                  <div className={`hidden lg:block absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-bg-base border-[3px] border-accent-primary shadow-[0_0_15px_rgba(0,216,255,0.5)] z-20 ${isEven ? '-right-[2.5rem]' : '-left-[2.5rem]'}`} />
                  
                  {/* The Main Image Container */}
                  <div className="relative w-full aspect-[16/9] md:aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-surface-card border border-border-card shadow-2xl group">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-text-secondary group-hover:text-accent-primary transition-colors duration-500">
                      <project.icon size={64} strokeWidth={1} className="mb-4 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                      <span className="text-xs tracking-widest uppercase font-bold opacity-50">Project Visual</span>
                    </div>
                  </div>

                  {/* FLOATING WIDGET 1: Top Status Badge */}
                  <motion.div 
                    animate={{ y: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: index * 0.2 }}
                    className={`absolute -top-5 ${isEven ? '-right-4 md:-right-8' : '-left-4 md:-left-8'} p-3 md:p-4 rounded-2xl bg-surface-card/90 backdrop-blur-xl border border-border-card shadow-xl flex items-center gap-3 z-20`}
                  >
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>
                    <div className="flex flex-col">
                      <span className="text-xs md:text-sm font-bold text-fg-base leading-none">Live Deploy</span>
                    </div>
                  </motion.div>

                  {/* FLOATING WIDGET 2: Bottom Feature Badge */}
                  <motion.div 
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 + (index * 0.2) }}
                    className={`absolute -bottom-5 ${isEven ? '-left-4 md:-left-8' : '-right-4 md:-right-8'} p-3 md:p-4 rounded-2xl bg-surface-card/90 backdrop-blur-xl border border-border-card shadow-xl flex items-center gap-3 z-20`}
                  >
                    <CheckCircle2 size={18} className="text-accent-primary" />
                    <span className="text-xs md:text-sm font-bold text-fg-base">{project.badge}</span>
                  </motion.div>

                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left pt-6 lg:pt-0">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-fg-base mb-6 tracking-tight leading-tight">
                    {project.title}
                  </h3>
                  
                  <div className="p-6 md:p-8 rounded-[2rem] bg-surface-card/50 backdrop-blur-xl border border-border-card shadow-sm mb-8 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <p className="text-base md:text-lg text-text-secondary leading-relaxed font-light relative z-10">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap justify-center lg:justify-start gap-2 md:gap-3 mb-10">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-4 py-2 text-xs font-bold tracking-widest uppercase rounded-full bg-bg-base border border-border-card text-text-secondary shadow-sm hover:text-accent-primary hover:border-accent-primary/50 transition-colors cursor-default">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-center lg:justify-start items-center gap-4">
                    <a href={project.live} className="group flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-fg-base text-bg-base rounded-2xl font-bold transition-transform hover:-translate-y-1 shadow-lg">
                      <ExternalLink size={18} className="group-hover:rotate-12 transition-transform" /> Live Demo
                    </a>
                    <a href={project.github} className="flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-surface-card text-fg-base border border-border-card rounded-2xl font-bold hover:bg-border-card/50 transition-colors shadow-sm">
                      <Github size={18} /> Code
                    </a>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
