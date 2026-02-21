import Hero from "@/components/Hero";
import FlightPath from "@/components/FlightPath";

export default function Home() {
  return (
    <div className="flex flex-col w-full relative min-h-[300vh]">
      
      {/* The Dynamic Flight Path */}
      <FlightPath />

      {/* Hero Section */}
      <div className="relative z-10">
        <Hero />
      </div>

      {/* Temporary Sections */}
      <section className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-neon w-full max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">The Skills Hub</h2>
          <p className="text-slate-400">
            Scroll down and watch the plane steer left and right!
          </p>
        </div>
      </section>

      <section className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-neon w-full max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Project Arsenal</h2>
        </div>
      </section>

    </div>
  );
}
