"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Plane } from "lucide-react";
import { useEffect, useState, useMemo } from "react";

export default function FlightPath() {
  const { scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(false);

  // We mathematically generate the winding path so the plane and thread align flawlessly.
  const { inputs, leftOutputs, rotateOutputs, svgPoints } = useMemo(() => {
    const points = 100; // Resolution of the curve
    const inputs = Array.from({ length: points }, (_, i) => i / (points - 1));

    // Calculate X position (weaving left and right)
    const leftOutputs = inputs.map(t => `${50 + Math.sin(t * Math.PI * 2) * 30}%`);

    // Calculate Rotation (steering into the curve using the derivative)
    const rotateOutputs = inputs.map(t => {
      const slope = Math.cos(t * Math.PI * 2);
      return 180 - (slope * 50); // Base 180 (pointing down) +/- 50 degrees of tilt
    });

    // Generate the exact same path for the SVG Polyline
    const svgPoints = inputs.map(t => {
      const x = 50 + Math.sin(t * Math.PI * 2) * 30;
      const y = t * 100;
      return `${x},${y}`;
    }).join(" ");

    return { inputs, leftOutputs, rotateOutputs, svgPoints };
  }, []);

  // Bind the Plane's position and rotation to the scroll progress
  const planeX = useTransform(scrollYProgress, inputs, leftOutputs);
  const planeRotate = useTransform(scrollYProgress, inputs, rotateOutputs);
  const planeY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  
  // This scales the clipping mask to reveal the thread as you scroll
  const maskScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="absolute top-[80vh] bottom-0 left-0 w-full pointer-events-none z-0">
      
      {/* 1. The Winding, Running Thread */}
      <svg
        className="absolute top-0 left-0 w-full h-full drop-shadow-[0_0_15px_rgba(0,216,255,0.6)]"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <defs>
          <linearGradient id="threadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00D8FF" /> {/* Cyan */}
            <stop offset="100%" stopColor="#FF007A" /> {/* Magenta */}
          </linearGradient>

          {/* The mask that grows down as you scroll */}
          <clipPath id="scrollMask">
            <motion.rect 
              x="0" 
              y="0" 
              width="100" 
              height="100" 
              style={{ scaleY: maskScaleY, originY: 0 }} 
            />
          </clipPath>
        </defs>

        {/* The dashed, animated line */}
        <polyline
          points={svgPoints}
          fill="none"
          stroke="url(#threadGradient)"
          strokeWidth="0.5"
          vectorEffect="non-scaling-stroke"
          strokeDasharray="10 10"
          clipPath="url(#scrollMask)"
          className="animate-thread opacity-70"
        />
      </svg>

      {/* 2. The Flying Plane */}
      <motion.div
        className="absolute w-8 h-8 -ml-4 -mt-4 flex items-center justify-center"
        style={{
          top: planeY,
          left: planeX,
          rotate: planeRotate,
        }}
      >
        <div className="relative">
          {/* Glowing Aura */}
          <div className="absolute inset-0 bg-brand-cyan blur-md opacity-50 rounded-full scale-150" />
          {/* The Plane Icon */}
          <Plane className="text-white relative z-10 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" size={24} />
        </div>
      </motion.div>

    </div>
  );
}
