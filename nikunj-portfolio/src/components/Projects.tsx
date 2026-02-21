"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Monitor, Layout, Smartphone } from "lucide-react";

// Placeholder data - you will swap these with your actual MERN/Next.js projects!
const projects = [
  {
    id: 1,
    title: "Nexus E-Commerce Engine",
    description: "A high-performance, full-stack e-commerce platform built with Next.js 15. Features include secure Stripe integration, a custom admin dashboard, and sub-second page loads using server-side rendering.",
    tech: ["Next.js", "MongoDB", "Tailwind CSS", "Stripe"],
    github: "#",
    live: "#",
    icon: Monitor,
    color: "from-brand-cyan to-blue-600",
  },
  {
    id: 2,
    title: "Pulse Real-Time Chat",
    description: "A scalable MERN stack chat application. Uses Socket.io for instantaneous bidirectional communication, JWT authentication, and features a sleek, dark-mode-first user interface.",
    tech: ["React", "Node.js", "Express", "Socket.io"],
    github: "#",
    live: "#",
    icon: Smartphone,
    color: "from-brand-magenta to-purple-600",
  },
  {
    id: 3,
    title: "Vortex Analytics Dashboard",
    description: "A complex data visualization dashboard for SaaS products. Consumes large datasets via REST APIs and renders interactive charts with fluid animations.",
    tech: ["MERN Stack", "Framer Motion", "Recharts", "Redux"],
    github: "#",
    live: "#",
    icon: Layout,
    color: "from-brand-cyan to-brand-magenta",
  },
];

export default function Projects() {
  return (
    <section className="relative w-full max-w-6xl mx-auto py-32 px-4 sm:px-6 z-10">
      
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-24 relative z-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-magenta">Arsenal</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          A selection of my best full-stack applications, engineered from concept to deployment.
        </p>
      </motion.div>

      {/* Projects List */}
      <div className="flex flex-col gap-24">
        {projects.map((project, index) => {
          // Alternate the layout direction for desktop
          const isEven = index % 2 === 0;

          return (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
            >
              
              {/* Left Side: The Visual / Image Placeholder */}
              <div className="w-full lg:w-1/2 group">
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#18181B] border border-white/10 shadow-glass transition-all duration-500 group-hover:shadow-neon group-hover:border-brand-cyan/30">
                  {/* Subtle background glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                  
                  {/* Placeholder Icon (Replace this entire div with <Image /> later) */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500 group-hover:text-brand-cyan transition-colors duration-500">
                    <project.icon size={64} strokeWidth={1} className="mb-4 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                    <span className="text-sm tracking-widest uppercase font-semibold opacity-50">Project Visual</span>
                  </div>
                </div>
              </div>

              {/* Right Side: The Content */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight group-hover:text-brand-cyan transition-colors">
                  {project.title}
                </h3>
                
                <div className="p-6 rounded-2xl bg-[#18181B]/80 backdrop-blur-md border border-white/5 shadow-inner mb-6 relative z-10">
                  <p className="text-slate-300 leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-4 py-1.5 text-xs font-semibold tracking-wide rounded-full bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-6">
                  <a href={project.github} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
                    <Github size={20} className="group-hover:scale-110 transition-transform" />
                    <span className="font-medium">Code</span>
                  </a>
                  <a href={project.live} className="flex items-center gap-2 text-brand-cyan hover:text-brand-magenta transition-colors group">
                    <ExternalLink size={20} className="group-hover:scale-110 transition-transform" />
                    <span className="font-medium">Live Demo</span>
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
