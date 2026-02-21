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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-bg-base/80 backdrop-blur-xl border-b border-border-card py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        
        {/* Logo: Clean and integrated */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="p-2 rounded-xl bg-surface-card border border-border-card group-hover:border-accent-primary transition-colors">
            <Terminal size={18} className="text-accent-primary" />
          </div>
          <span className="text-xl font-black tracking-tighter text-fg-base">
            Nikunj<span className="text-accent-secondary">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-bold text-text-secondary hover:text-fg-base transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          {/* Theme Toggle */}
          {mounted && (
            <button 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-xl bg-surface-card border border-border-card text-text-secondary hover:text-fg-base transition-colors group"
              aria-label="Toggle Theme"
            >
              <div className="group-hover:rotate-12 transition-transform">
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </div>
            </button>
          )}

          <a 
            href="#contact"
            className="px-6 py-2.5 text-sm font-bold rounded-xl bg-fg-base text-bg-base hover:-translate-y-0.5 transition-transform shadow-sm"
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
              aria-label="Toggle Dark Mode" // ADD THIS
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
          <button 
            className="p-2 text-fg-base bg-surface-card border border-border-card rounded-xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu" // ADD THIS
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        

      {/* Mobile Menu Dropdown: Ultra-clean, no heavy meshes */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-bg-base/95 backdrop-blur-xl border-b border-border-card md:hidden shadow-xl"
          >
            <div className="flex flex-col px-6 py-8 gap-4">
              {navLinks.map((link, i) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-black tracking-tight text-fg-base hover:text-accent-primary transition-colors py-2 border-b border-border-card/50"
                >
                  <span className="text-accent-primary text-sm font-mono mr-2">0{i + 1}.</span> {link.name}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-6 px-6 py-4 text-center font-bold rounded-xl bg-fg-base text-bg-base"
              >
                Hire Me Today
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
