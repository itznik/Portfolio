"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Github, ExternalLink, Monitor, Layout, Smartphone } from "lucide-react";
import { useRef } from "react";

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
  {
    id: 3,
    title: "Vortex Analytics Dashboard",
    description: "Complex data visualization dashboard for SaaS products. Consumes large datasets via REST APIs with fluid animations.",
    tech: ["MERN Stack", "Framer Motion", "Recharts"],
    github: "#",
    live: "#",
    icon: Layout,
    color: "from-accent-primary to-accent-secondary",
  },
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll to draw the vertical "Pipeline" line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  const pipelineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} id="projects" className="relative w-full max-w-7xl mx-auto py-24 md:py-32 px-4 sm:px-6 lg:px-8 z-10">
      
      {/* Header */}
      <div className="text-center mb-16 md:mb-24 relative z-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-fg-base mb-4">
          Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">Arsenal</span>
        </h2>
        <p className="text-text-secondary max-w-xl mx-auto text-base md:text-lg">
          A selection of my best full-stack applications.
        </p>
      </div>

      <div className="relative">
        
        {/* THE ANIMATED PIPELINE (Visible on Desktop, hidden on Mobile to keep it clean) */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-border-card -translate-x-1/2 overflow-hidden z-0">
          <motion.div 
            style={{ height: pipelineHeight }}
            className="w-full bg-gradient-to-b from-accent-primary via-accent-secondary to-accent-primary rounded-full shadow-[0_0_10px_#00D8FF]"
          />
        </div>

        {/* The Projects Stack */}
        <div className="flex flex-col gap-24 md:gap-32 relative z-10">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                // Mobile: Stacked vertically. Desktop: Alternating Left/Right
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
              >
                
                {/* 1. Visual/Image Container */}
                <div className="w-full lg:w-1/2 relative group perspective">
                  {/* Central Node for the Pipeline connection (Desktop only) */}
                  <div className={`hidden lg:block absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-bg-base border-4 border-accent-primary z-20 ${isEven ? '-right-[2.1rem]' : '-left-[2.1rem]'}`} />
                  
                  {/* Aspect Ratio perfectly controlled here to prevent crushing mobile text */}
                  <div className="relative w-full aspect-[16/9] md:aspect-[4/3] rounded-[2rem] overflow-hidden bg-surface-card border border-border-card shadow-lg transition-transform duration-500 group-hover:scale-[1.02]">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                    
                    {/* Placeholder for real <Image /> */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-text-secondary group-hover:text-accent-primary transition-colors duration-500">
                      <project.icon size={56} strokeWidth={1} className="mb-4 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                      <span className="text-xs tracking-widest uppercase font-semibold opacity-50">Project Visual</span>
                    </div>
                  </div>
                </div>

                {/* 2. Content Container */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
                  <h3 className="text-3xl md:text-4xl font-bold text-fg-base mb-4 tracking-tight">
                    {project.title}
                  </h3>
                  
                  <div className="p-6 md:p-8 rounded-3xl bg-surface-card/80 backdrop-blur-md border border-border-card shadow-sm mb-6">
                    <p className="text-base md:text-lg text-text-secondary leading-relaxed font-light">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-4 py-1.5 text-xs font-semibold tracking-wide rounded-full bg-surface-card text-accent-primary border border-border-card shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-center lg:justify-start items-center gap-6">
                    <a href={project.github} className="flex items-center gap-2 text-text-secondary hover:text-fg-base transition-colors font-medium">
                      <Github size={20} /> Code
                    </a>
                    <a href={project.live} className="flex items-center gap-2 text-accent-primary hover:text-accent-secondary transition-colors font-medium">
                      <ExternalLink size={20} /> Live Demo
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
