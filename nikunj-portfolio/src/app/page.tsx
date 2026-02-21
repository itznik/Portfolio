import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    // Added overflow-clip to ensure glowing backgrounds don't cause horizontal scroll
    <div className="flex flex-col w-full relative overflow-clip">
      
      {/* Fixed Navigation */}
      <Navbar />

      {/* Hero Section */}
      <div id="home" className="relative z-10 min-h-screen pt-20">
        <Hero />
      </div>

      {/* About Me Bento Box */}
      <div className="relative z-10">
        <About />
      </div>

      {/* The Skills Hub (with integrated flight path) */}
      <div id="skills" className="relative z-10">
        <Skills />
      </div>

      {/* The Project Arsenal */}
      <div id="projects" className="relative z-10">
        <Projects />
      </div>

      {/* Contact & Footer */}
      <div id="contact" className="relative z-10">
        <Contact />
      </div>

    </div>
  );
}
