import Hero from "@/components/Hero";

export default function Home() {
  return (
    // We add flex-col so future sections stack neatly below the hero
    <div className="flex flex-col w-full relative">
      <Hero />
      
      {/* Temporary spacer to allow scrolling so we can test the SVG thread later.
        We will replace this with your Skills and Projects sections.
      */}
      <div className="h-[150vh] w-full border-t border-slate-200/50 mt-10">
        <div className="text-center pt-20 text-slate-400">
          (Scroll down to see the magic later)
        </div>
      </div>
    </div>
  );
}
