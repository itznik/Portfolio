"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Monitor, Layout, Smartphone } from "lucide-react";

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
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full max-w-6xl mx-auto py-24 md:py-32 px-4 sm:px-6 lg:px-8 z-10">
      
      {/* Header */}
      <div className="text-center mb-16 md:mb-24 relative z-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-fg-base mb-4">
          Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">Arsenal.</span>
        </h2>
      </div>

      <div className="relative">
        
        {/* UNIQUE SVG VISUALIZER: The Circuit Line */}
        <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-border-card z-0 hidden sm:block">
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="w-full bg-accent-primary shadow-[0_0_10px_var(--accent-primary)]"
          />
        </div>

        {/* Clean, Flat, Premium Project Cards */}
        <div className="flex flex-col gap-12 md:gap-20">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative z-10 flex flex-col md:flex-row gap-8 items-center bg-surface-card border border-border-card rounded-[2rem] p-4 md:p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              
              {/* Circuit Node dot connecting to the line */}
              <div className="hidden sm:block absolute -left-6 md:-left-12 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-bg-base border-2 border-accent-primary -ml-[5px] z-20" />

              {/* Integrated Image/Visual */}
              <div className="w-full md:w-[40%] aspect-video md:aspect-square rounded-2xl bg-bg-base border border-border-card overflow-hidden relative group">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                <div className="absolute inset-0 flex items-center justify-center text-text-secondary">
                  <project.icon size={48} strokeWidth={1} />
                </div>
              </div>

              {/* Content Side (No floating widgets, perfectly aligned) */}
              <div className="w-full md:w-[60%] flex flex-col justify-center px-2 md:px-6">
                <h3 className="text-2xl md:text-3xl font-bold text-fg-base mb-4 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-text-secondary leading-relaxed font-light mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1.5 text-[10px] md:text-xs font-bold tracking-widest uppercase rounded-md bg-bg-base border border-border-card text-text-secondary">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a href={project.live} className="flex items-center gap-2 px-6 py-3 bg-fg-base text-bg-base rounded-xl font-bold text-sm hover:-translate-y-0.5 transition-transform shadow-sm">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a href={project.github} className="flex items-center gap-2 px-6 py-3 bg-surface-card text-fg-base border border-border-card rounded-xl font-bold text-sm hover:bg-bg-base transition-colors">
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
