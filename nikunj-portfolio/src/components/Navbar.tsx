"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-bg-base/80 backdrop-blur-2xl border-b border-border-card py-3 shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        
        {/* Logo with Pulsing Status Indicator */}
        <a href="#home" className="flex items-center gap-3 group relative">
          <div className="absolute -top-1 -right-1 flex h-3 w-3 z-10">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border-2 border-bg-base"></span>
          </div>
          <div className="p-2.5 rounded-[1rem] bg-surface-card border border-border-card group-hover:border-accent-primary group-hover:shadow-[0_0_15px_rgba(0,216,255,0.3)] transition-all">
            <Terminal size={20} className="text-accent-primary" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-fg-base">
            Vortex<span className="text-accent-secondary">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-bold text-text-secondary hover:text-fg-base transition-colors relative group"
            >
              {link.name}
              {/* Animated underline */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          
          {/* Theme Toggle */}
          {mounted && (
            <button 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2.5 rounded-xl bg-surface-card border border-border-card text-text-secondary hover:text-accent-primary hover:border-accent-primary/50 transition-all shadow-sm group"
              aria-label="Toggle Theme"
            >
              <div className="group-hover:rotate-12 transition-transform">
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </div>
            </button>
          )}

          {/* Premium Glowing CTA */}
          <a 
            href="#contact"
            className="px-6 py-2.5 text-sm font-bold rounded-xl bg-fg-base text-bg-base hover:-translate-y-1 transition-all shadow-[0_5px_20px_rgba(0,0,0,0.2)] dark:shadow-[0_5px_20px_rgba(255,255,255,0.15)] border border-transparent hover:border-accent-primary hover:text-accent-primary hover:bg-surface-card"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 md:hidden">
          {mounted && (
            <button 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-xl bg-surface-card border border-border-card text-text-secondary"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
          <button 
            className="p-2 text-fg-base bg-surface-card border border-border-card rounded-xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown (With Blueprint Mesh) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-bg-base/95 backdrop-blur-3xl border-b border-border-card md:hidden overflow-hidden"
          >
            {/* Mobile Mesh Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border-card)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-card)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20" />
            
            <div className="relative z-10 flex flex-col px-6 py-8 gap-6">
              {navLinks.map((link, i) => (
                <motion.a 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-black tracking-tight text-fg-base hover:text-accent-primary transition-colors flex items-center gap-4"
                >
                  <span className="text-accent-primary text-sm font-mono">0{i + 1}.</span> {link.name}
                </motion.a>
              ))}
              <motion.a 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 px-6 py-4 text-center font-bold rounded-2xl bg-fg-base text-bg-base shadow-lg"
              >
                Hire Me Today
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
