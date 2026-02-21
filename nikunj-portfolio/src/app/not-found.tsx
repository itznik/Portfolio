"use client";

import { motion } from "framer-motion";
import { Terminal, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-bg-base text-fg-base overflow-hidden px-4">
      
      {/* Animated Background "Black Hole" Vortex */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-50">
        <motion.div 
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] rounded-full border-[2px] border-dashed border-accent-primary/30"
        />
        <div className="absolute w-64 h-64 bg-accent-secondary/20 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="p-4 rounded-2xl bg-surface-card border border-border-card mb-8 shadow-lg">
          <Terminal size={40} className="text-accent-primary animate-pulse" />
        </div>
        
        <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-br from-accent-primary to-accent-secondary">
          404
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Lost in the Vortex
        </h2>
        
        <p className="text-text-secondary max-w-md mb-10 text-lg font-light">
          The page or endpoint you are looking for doesn't exist, has been moved, or was swallowed by an unhandled promise rejection.
        </p>

        <Link 
          href="/"
          className="group flex items-center gap-3 px-8 py-4 bg-fg-base text-bg-base rounded-full font-bold transition-transform hover:-translate-y-1 shadow-lg"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Safety
        </Link>
      </div>
    </div>
  );
}
