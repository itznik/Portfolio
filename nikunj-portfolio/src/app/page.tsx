import Hero from "@/components/Hero";
import AnimatedThread from "@/components/AnimatedThread";

export default function Home() {
  return (
    // The main container needs 'relative' so the absolute thread maps to its total height
    <div className="flex flex-col w-full relative min-h-[300vh]">
      
      {/* The Central Glowing Spine */}
      <AnimatedThread />

      {/* Hero Section (z-10 ensures it sits above the thread) */}
      <div className="relative z-10">
        <Hero />
      </div>

      {/* --- TEMPORARY SECTIONS TO TEST SCROLLING --- */}
      
      <section className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-neon w-full max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">The Skills Hub</h2>
          <p className="text-slate-400">
            Scroll back up and watch the line recede. Scroll down, and it follows you. 
            Later, we will make "branches" shoot out of the main line to connect to your MERN skills here.
          </p>
        </div>
      </section>

      <section className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-neon w-full max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Project Arsenal</h2>
          <p className="text-slate-400">
            This is where your top full-stack applications will live.
          </p>
        </div>
      </section>

    </div>
  );
}
