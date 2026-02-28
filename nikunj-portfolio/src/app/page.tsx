import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full relative overflow-clip print:hidden">
      
      {/* The fully fixed, responsive Nav */}
      <Navbar />

      <div id="home">
        <Hero />
      </div>

      <div className="relative z-10 border-t border-border-card/50">
        <About />
      </div>

      <div className="relative z-10 border-t border-border-card/50">
        <Skills />
      </div>

      <div className="relative z-10 border-t border-border-card/50">
        <Projects />
      </div>

      <div className="relative z-10 border-t border-border-card/50">
        <Contact />
      </div>

    </div>
  );
}
