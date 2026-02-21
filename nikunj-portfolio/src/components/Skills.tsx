"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Database, Server, Code2, Cpu, Globe, Layers, Plane } from "lucide-react";
import { useEffect, useRef, useState, useMemo } from "react";

const skills = [
  { name: "MongoDB", description: "NoSQL DB", icon: Database, color: "text-emerald-400", align: "left" },
  { name: "Express.js", description: "REST API", icon: Server, color: "text-slate-300", align: "right" },
  { name: "React.js", description: "Dynamic UI", icon: Code2, color: "text-brand-cyan", align: "left" },
  { name: "Node.js", description: "Backend", icon: Cpu, color: "text-green-400", align: "right" },
  { name: "Next.js", description: "Full-Stack", icon: Globe, color: "text-white", align: "left" },
  { name: "Tailwind", description: "Styling Engine", icon: Layers, color: "text-brand-cyan", align: "right" },
];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); 
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const pathData = useMemo(() => {
    const points = 300; 
    const inputs = Array.from({ length: points }, (_, i) => i / (points - 1));
    const amplitude = isMobile ? 0 : 30; // Disabled weave on mobile for the new 2-column layout
    const waves = 1.2; 

    return {
      inputs,
      leftOutputs: inputs.map(t => `${50 + Math.sin(t * Math.PI * 2 * waves) * amplitude}%`),
      rotateOutputs: inputs.map(t => {
        const slope = Math.cos(t * Math.PI * 2 * waves);
        const maxTilt = isMobile ? 0 : 45; // Plane points straight down on mobile
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
    <section ref={containerRef} id="skills" className="relative w-full max-w-6xl mx-auto py-20 md:py-32 px-4 sm:px-6">
      <style>{`
        @keyframes dash-run { to { stroke-dashoffset: -16; } }
        .animate-running-thread { animation: dash-run 1s linear infinite; }
      `}</style>

      <div className="text-center mb-16 md:mb-32 relative z-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-magenta">Tech Arsenal</span>
        </h2>
      </div>

      {mounted && (
        <div className="absolute top-32 md:top-48 bottom-0 left-0 w-full pointer-events-none z-0">
          <svg className="absolute top-0 left-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="skillsGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#00D8FF" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#FF007A" stopOpacity="0.9" />
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
              strokeDasharray="8 8" 
              vectorEffect="non-scaling-stroke"
              clipPath="url(#skillsMask)"
              className="animate-running-thread drop-shadow-[0_0_8px_rgba(0,216,255,0.6)]"
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

      {/* MOBILE: 2-Column Grid | DESKTOP: Alternating Layout */}
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-y-16 md:gap-x-12 relative z-10">
        {skills.map((skill, index) => {
          const isLeft = skill.align === "left";
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              // Override alignment on mobile to just fill the grid naturally
              className={`col-span-1 flex justify-center md:justify-end ${!isLeft ? 'md:col-start-2 md:justify-start' : ''}`}
            >
              {/* Card adjusted for mobile vertical stack vs desktop horizontal */}
              <div className="group relative w-full max-w-[380px] p-4 md:p-6 rounded-2xl bg-[#18181B]/40 md:bg-[#18181B]/60 backdrop-blur-xl border border-white/5 md:hover:shadow-neon md:hover:border-brand-cyan/40 transition-all duration-500 overflow-hidden text-center md:text-left">
                
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-3 md:gap-5">
                  <div className={`p-3 md:p-4 rounded-xl bg-[#09090B] border border-white/5 shadow-inner ${skill.color}`}>
                    <skill.icon size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-sm md:text-xl font-bold text-white mb-1 tracking-tight">{skill.name}</h3>
                    <p className="hidden md:block text-sm text-slate-400 font-light">{skill.description}</p>
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
