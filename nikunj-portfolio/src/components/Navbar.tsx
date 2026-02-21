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

  // Prevent hydration mismatch for theme toggle
  useEffect(() => setMounted(true), []);

  // Detect scroll for the glass effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-bg-base/80 backdrop-blur-xl border-b border-border-card py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="p-2 rounded-xl bg-surface-card border border-border-card group-hover:border-accent-primary transition-colors shadow-sm">
            <Terminal size={20} className="text-accent-primary" />
          </div>
          <span className="text-xl font-bold tracking-tighter text-fg-base">
            Vortex<span className="text-accent-secondary">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-text-secondary hover:text-fg-base transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          {/* Theme Toggle */}
          {mounted && (
            <button 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-surface-card border border-border-card text-text-secondary hover:text-fg-base hover:scale-110 transition-all shadow-sm"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}

          <a 
            href="#contact"
            className="px-6 py-2.5 text-sm font-bold rounded-full bg-fg-base text-bg-base hover:-translate-y-1 transition-transform shadow-lg"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Controls (Menu Toggle + Theme) */}
        <div className="flex items-center gap-4 md:hidden">
          {mounted && (
            <button 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-surface-card border border-border-card text-text-secondary"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
          <button 
            className="p-2 text-fg-base"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-bg-base/95 backdrop-blur-3xl border-b border-border-card md:hidden overflow-hidden"
          >
            <div className="flex flex-col px-6 py-8 gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-text-secondary hover:text-accent-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
