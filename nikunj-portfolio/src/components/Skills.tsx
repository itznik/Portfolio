"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Database, Server, Code2, Cpu, Globe, Layers, Plane } from "lucide-react";
import { useEffect, useRef, useState, useMemo } from "react";

const skills = [
  { name: "MongoDB", description: "NoSQL Architecture", icon: Database, color: "text-emerald-400", align: "left" },
  { name: "Express.js", description: "RESTful API Dev", icon: Server, color: "text-slate-300", align: "right" },
  { name: "React.js", description: "Dynamic UIs", icon: Code2, color: "text-brand-cyan", align: "left" },
  { name: "Node.js", description: "Backend Execution", icon: Cpu, color: "text-green-400", align: "right" },
  { name: "Next.js 15", description: "Full-Stack Routes", icon: Globe, color: "text-white", align: "left" },
  { name: "Tailwind v4", description: "Utility Styling", icon: Layers, color: "text-brand-cyan", align: "right" },
];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Track scroll exactly within this component's boundaries
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Check for mobile on mount to adjust the flight path width
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // MATHEMATICAL ROUTING: Calculate exact coordinates to hit the cards
  const pathData = useMemo(() => {
    const points = 100;
    const inputs = Array.from({ length: points }, (_, i) => i / (points - 1));
    const amplitude = isMobile ? 0 : 25; // Desktop weaves 25% left/right. Mobile goes straight down.

    return {
      inputs,
      // Cosine wave: at t=0, cos=1 -> X=25% (Left). At t=1/5, cos=-1 -> X=75% (Right).
      leftOutputs: inputs.map(t => `${50 - Math.cos(t * Math.PI * (skills.length - 1)) * amplitude}%`),
      
      // Calculate rotation based on the derivative (slope) of the curve
      rotateOutputs: inputs.map(t => {
        const slope = Math.sin(t * Math.PI * (skills.length - 1));
        const rotateAmp = isMobile ? 0 : 55; // Tilt up to 55 degrees to steer
        return 180 - (slope * rotateAmp);
      }),
      
      // Generate the exact same path for the SVG Polyline
      svgPoints: inputs.map(t => {
        const x = 50 - Math.cos(t * Math.PI * (skills.length - 1)) * amplitude;
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
    <section ref={containerRef} className="relative w-full max-w-5xl mx-auto py-32 px-4 sm:px-6">
      
      {/* 1. Header */}
      <div className="text-center mb-24 relative z-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-magenta">Tech Arsenal</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          Scroll down and watch the thread route through the stack.
        </p>
      </div>

      {/* 2. The Integrated Flight Path & Plane */}
      <div className="absolute top-48 bottom-12 left-0 w-full pointer-events-none z-0">
        <svg className="absolute top-0 left-0 w-full h-full drop-shadow-[0_0_15px_rgba(0,216,255,0.6)]" preserveAspectRatio="none" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="skillsGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00D8FF" />
              <stop offset="100%" stopColor="#FF007A" />
            </linearGradient>
            <clipPath id="skillsMask">
              <motion.rect x="0" y="0" width="100" height="100" style={{ scaleY: maskScaleY, originY: 0 }} />
            </clipPath>
          </defs>
          <polyline
            points={pathData.svgPoints}
            fill="none"
            stroke="url(#skillsGradient)"
            strokeWidth="0.5"
            vectorEffect="non-scaling-stroke"
            strokeDasharray="4 4"
            clipPath="url(#skillsMask)"
            className="animate-thread opacity-50"
          />
        </svg>

        <motion.div
          className="absolute w-8 h-8 -ml-4 -mt-4 flex items-center justify-center z-20"
          style={{ top: planeY, left: planeX, rotate: planeRotate }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-brand-cyan blur-md opacity-80 rounded-full scale-150" />
            <Plane className="text-white relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,1)]" size={24} />
          </div>
        </motion.div>
      </div>

      {/* 3. The Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-y-32 relative z-10">
        {skills.map((skill, index) => {
          const isLeft = skill.align === "left";
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              // This CSS ensures Left cards stay in Col 1, Right cards in Col 2.
              className={`col-span-1 flex ${isLeft ? "justify-center md:justify-end md:pr-12" : "md:col-start-2 justify-center md:justify-start md:pl-12"}`}
            >
              <div className="group relative w-full max-w-sm p-6 rounded-2xl bg-[#18181B]/80 backdrop-blur-xl border border-white/10 transition-all duration-300 hover:shadow-neon hover:border-brand-cyan/50 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative z-10 flex items-center gap-5">
                  <div className={`p-4 rounded-xl bg-[#09090B] border border-white/5 shadow-inner ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
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
