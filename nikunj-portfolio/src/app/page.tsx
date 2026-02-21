import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full relative">
      
      {/* Hero Section */}
      <div className="relative z-10 min-h-screen">
        <Hero />
      </div>

      {/* The Skills Hub (with integrated flight path) */}
      <div className="relative z-10">
        <Skills />
      </div>

      {/* The Project Arsenal */}
      <div className="relative z-10">
        <Projects />
      </div>

      {/* Contact & Footer */}
      <div className="relative z-10">
        <Contact />
      </div>

    </div>
  );
}
