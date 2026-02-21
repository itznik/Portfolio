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
    color: "from-brand-cyan to-blue-600",
  },
  {
    id: 2,
    title: "Pulse Real-Time Chat",
    description: "A scalable MERN stack chat application using Socket.io for instantaneous bidirectional communication and JWT authentication.",
    tech: ["React", "Node.js", "Socket.io"],
    github: "#",
    live: "#",
    icon: Smartphone,
    color: "from-brand-magenta to-purple-600",
  },
  {
    id: 3,
    title: "Vortex Analytics Dashboard",
    description: "Complex data visualization dashboard for SaaS products. Consumes large datasets via REST APIs with fluid animations.",
    tech: ["MERN Stack", "Framer Motion", "Recharts"],
    github: "#",
    live: "#",
    icon: Layout,
    color: "from-brand-cyan to-brand-magenta",
  },
];

export default function Projects() {
  return (
    <section className="relative w-full max-w-6xl mx-auto py-20 md:py-32 px-0 md:px-6 z-10 overflow-hidden">
      
      <div className="text-center mb-12 md:mb-24 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-magenta">Arsenal</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">
          Swipe to explore my best full-stack applications.
        </p>
      </div>
              {/* MOBILE SWIPE HINT */}
        <div className="md:hidden flex justify-center items-center gap-2 text-brand-cyan text-xs font-bold uppercase tracking-widest mb-6">
          <MoveRight size={16} className="animate-pulse" />
          <span>Swipe to view projects</span>
        </div>
      
      {/* MOBILE: Horizontal Scroll Snap | DESKTOP: Vertical Stack */}
      <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-6 md:gap-24 px-6 md:px-0 pb-12 md:pb-0 no-scrollbar">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              // MOBILE: 85vw width card | DESKTOP: Full width alternating row
              className={`min-w-[85vw] sm:min-w-[60vw] md:min-w-0 snap-center flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 lg:gap-16 items-center`}
            >
              
              <div className="w-full lg:w-1/2 group">
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#18181B] border border-white/10 shadow-glass transition-all duration-500 group-hover:shadow-neon group-hover:border-brand-cyan/30">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500 group-hover:text-brand-cyan transition-colors duration-500">
                    <project.icon size={48} strokeWidth={1} className="mb-4 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 md:w-16 md:h-16" />
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 tracking-tight">
                  {project.title}
                </h3>
                
                <div className="p-5 md:p-6 rounded-2xl bg-[#18181B]/80 backdrop-blur-md border border-white/5 shadow-inner mb-5 md:mb-6">
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 md:px-4 md:py-1.5 text-[10px] md:text-xs font-semibold tracking-wide rounded-full bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6">
                  <a href={project.github} className="flex items-center gap-2 text-sm md:text-base text-slate-400 hover:text-white transition-colors">
                    <Github size={18} /> <span className="font-medium">Code</span>
                  </a>
                  <a href={project.live} className="flex items-center gap-2 text-sm md:text-base text-brand-cyan hover:text-brand-magenta transition-colors">
                    <ExternalLink size={18} /> <span className="font-medium">Live Demo</span>
                  </a>
                </div>
              </div>

            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
