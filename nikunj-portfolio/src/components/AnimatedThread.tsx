"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedThread() {
  const { scrollYProgress } = useScroll();
  
  // We wrap the scroll progress in a spring physics configuration.
  // This makes the line draw smoothly and "catch up" gracefully if the user scrolls very fast.
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by ensuring this only renders on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    // The container spans the entire height of its parent (the main page)
    <div className="absolute top-[50vh] bottom-0 left-1/2 -translate-x-1/2 w-1 pointer-events-none z-0">
      {/* The actual growing line */}
      <motion.div
        className="w-[2px] h-full mx-auto bg-gradient-to-b from-brand-cyan via-brand-magenta to-brand-dark origin-top rounded-full"
        style={{ scaleY }}
      >
        {/* The glowing "head" of the line */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-16 bg-brand-magenta blur-[4px] rounded-full" />
      </motion.div>
    </div>
  );
}
