import Hero from "@/components/Hero";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="flex flex-col w-full relative min-h-[200vh]">
      
      {/* Hero Section */}
      <div className="relative z-10">
        <Hero />
      </div>

      {/* The Skills Hub (Now contains its own integrated Flight Path!) */}
      <Skills />

      {/* Temporary Project Section Spacer */}
      <section className="relative z-10 min-h-screen flex items-center justify-center pt-32">
        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-neon w-full max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Project Arsenal</h2>
          <p className="text-slate-400">
            Keep scrolling. We will build the high-end project display cards here next.
          </p>
        </div>
      </section>

    </div>
  );
}
