"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Database, Server, Code2, Cpu, Globe, Layers, Plane } from "lucide-react";
import { useEffect, useRef, useState, useMemo } from "react";

const skills = [
  { name: "MongoDB", description: "NoSQL Database Architecture", icon: Database, color: "text-emerald-400", align: "left" },
  { name: "Express.js", description: "RESTful API Development", icon: Server, color: "text-slate-300", align: "right" },
  { name: "React.js", description: "Dynamic Interactive UIs", icon: Code2, color: "text-brand-cyan", align: "left" },
  { name: "Node.js", description: "Scalable Backend Execution", icon: Cpu, color: "text-green-400", align: "right" },
  { name: "Next.js 15", description: "SSR, SSG & Full-Stack Routes", icon: Globe, color: "text-white", align: "left" },
  { name: "Tailwind CSS v4", description: "Utility-first Styling Engine", icon: Layers, color: "text-brand-cyan", align: "right" },
];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false); // Hydration fix flag

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  useEffect(() => {
    setMounted(true); // Safely on the client now
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // MATHEMATICAL ROUTING
  const pathData = useMemo(() => {
    const points = 300; 
    const inputs = Array.from({ length: points }, (_, i) => i / (points - 1));
    const amplitude = isMobile ? 10 : 30; 
    const waves = 1.2; 

    return {
      inputs,
      leftOutputs: inputs.map(t => `${50 + Math.sin(t * Math.PI * 2 * waves) * amplitude}%`),
      rotateOutputs: inputs.map(t => {
        const slope = Math.cos(t * Math.PI * 2 * waves);
        const maxTilt = isMobile ? 15 : 40; 
        return 180 - (slope * maxTilt);
      }),
      svgPoints: inputs.map(t => {
        const x = 50 + Math.sin(t * Math.PI * 2 * waves) * amplitude;
        const y = t * 100;
        return `${x},${y}`;
      }).join(" "),
    };
  }, [isMobile]);

  const planeX = useTransform(scrollYProgress, pathData.inputs, pathData.leftOutputs);
  const planeRotate = useTransform(scrollYProgress, pathData.inputs, pathData.rotateOutputs);
  const planeY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const maskScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} className="relative w-full max-w-6xl mx-auto py-32 px-4 sm:px-6">
      
      {/* Header */}
      <div className="text-center mb-32 relative z-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-magenta">Tech Arsenal</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          Built for scale, speed, and seamless user experiences.
        </p>
      </div>

      {/* Hydration fix: Only render the SVG and Plane after client mount */}
      {mounted && (
        <div className="absolute top-48 bottom-0 left-0 w-full pointer-events-none z-0">
          <svg className="absolute top-0 left-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="skillsGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#00D8FF" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#FF007A" stopOpacity="0.8" />
              </linearGradient>
              <clipPath id="skillsMask">
                <motion.rect x="0" y="0" width="100" height="100" style={{ scaleY: maskScaleY, originY: 0 }} />
              </clipPath>
            </defs>
            
            <polyline
              points={pathData.svgPoints}
              fill="none"
              stroke="url(#skillsGradient)"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
              clipPath="url(#skillsMask)"
              className="drop-shadow-[0_0_8px_rgba(0,216,255,0.6)]"
            />
          </svg>

          <motion.div
            className="absolute w-8 h-8 -ml-4 -mt-4 flex items-center justify-center z-20"
            style={{ top: planeY, left: planeX, rotate: planeRotate }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-brand-cyan blur-[12px] opacity-90 rounded-full scale-[2]" />
              <Plane className="text-white relative z-10 drop-shadow-[0_0_12px_rgba(255,255,255,1)]" size={24} />
            </div>
          </motion.div>
        </div>
      )}

      {/* The Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-x-12 relative z-10">
        {skills.map((skill) => {
          const isLeft = skill.align === "left";
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className={`col-span-1 flex ${isLeft ? "justify-center md:justify-end" : "md:col-start-2 justify-center md:justify-start"}`}
            >
              <div className="group relative w-full max-w-[380px] p-6 rounded-2xl bg-[#18181B]/60 backdrop-blur-xl border border-white/5 transition-all duration-500 hover:shadow-neon hover:border-brand-cyan/40 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex items-center gap-5">
                  <div className={`p-4 rounded-xl bg-[#09090B] border border-white/5 shadow-inner ${skill.color} group-hover:scale-110 transition-transform duration-500`}>
                    <skill.icon size={26} strokeWidth={1.5} />
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
