"use client";

import { MapPin, Mail, Github, Linkedin, Globe, Phone, Download } from "lucide-react";

export default function Resume() {
  return (
    <main className="min-h-screen bg-bg-base py-10 print:py-0 flex justify-center relative">
      
      {/* FLOATING DOWNLOAD BUTTON (Hidden during actual printing/PDF generation) */}
      <button 
        onClick={() => window.print()}
        className="print:hidden fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 flex items-center gap-2 px-6 py-4 bg-fg-base text-bg-base rounded-full font-bold shadow-[0_10px_40px_-10px_rgba(0,216,255,0.5)] hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(0,216,255,0.8)] transition-all"
      >
        <Download size={18} className="animate-bounce" />
        <span>Save PDF</span>
      </button>

      <div className="w-full max-w-[210mm] min-h-[297mm] bg-surface-card border border-border-card shadow-2xl print:shadow-none print:border-none p-10 md:p-14 relative overflow-hidden">
        
        {/* Subtle Print-Friendly SVG Background */}
        <div className="absolute inset-0 pointer-events-none z-0 opacity-10 print:opacity-[0.05]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border-card)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-card)_1px,transparent_1px)] bg-[size:20px_20px]" />
          <svg className="absolute top-0 right-0 w-96 h-96 text-accent-primary" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
            <circle cx="100" cy="0" r="40" strokeDasharray="4 4" />
            <circle cx="100" cy="0" r="60" />
            <circle cx="100" cy="0" r="80" strokeDasharray="2 6" />
          </svg>
        </div>

        <div className="relative z-10">
          {/* HEADER */}
          <header className="flex flex-col md:flex-row justify-between items-start md:items-end border-b-2 border-fg-base pb-6 mb-8 gap-6 md:gap-0">
            
            {/* Left Section: Photo + Name/Title */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-6 w-full md:w-auto">
              {/* Profile Photo - Matching visual aesthetic */}
              <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-surface-card shadow-lg shrink-0">
                <Image 
                  src="/profile-photo.jpg" // Uses the same image from main site
                  alt="Nikunj Variya"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 96px, 112px"
                />
              </div>
            <div>
              <h1 className="text-5xl font-black tracking-tighter text-fg-base">
            Nikunj Variya</h1><h1 className="text-accent-secondary">.</h1>
              <h2 className="text-xl font-black tracking-widest uppercase text-accent-primary">Full-Stack Engineer</h2>
              <p className="text-sm font-medium text-text-secondary mt-1 max-w-md leading-relaxed">
                Bridging complex logic and premium design. Specialized in building scalable, high-performance web applications with the MERN stack and Next.js.
              </p>
            </div>
            
            <div className="flex flex-col gap-1.5 text-xs font-medium text-text-secondary items-start md:items-end mt-6 md:mt-0">
              <a href="mailto:your-email@example.com" className="flex items-center gap-2 hover:text-accent-primary"><Mail size={14}/> nikvrya@gmail.com</a>
              <a href="tel:+910000000000" className="flex items-center gap-2 hover:text-accent-primary"><Phone size={14}/> +91 79904 51866</a>
              <div className="flex items-center gap-2"><MapPin size={14}/> Surat, Gujarat, India</div>
              <a href="https://nikunjvariya.vercel.app" className="flex items-center gap-2 hover:text-accent-primary"><Globe size={14}/> nikunjvariya.vercel.app</a>
              <a href="https://github.com/itznik" className="flex items-center gap-2 hover:text-accent-primary"><Github size={14}/> github.com/itznik</a>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            {/* LEFT COLUMN: Main Content */}
            <div className="md:col-span-2 flex flex-col gap-8">
              
              {/* EXPERIENCE / PROJECTS */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-2 h-2 bg-accent-secondary rounded-full" />
                  <h3 className="text-lg font-black tracking-widest uppercase text-fg-base">Key Projects</h3>
                </div>

                <div className="flex flex-col gap-6">
                  {/* Project 1 */}
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="text-base font-bold text-fg-base">Nexus E-Commerce Engine</h4>
                      <span className="text-xs font-bold text-accent-primary uppercase tracking-wider">2025</span>
                    </div>
                    <p className="text-xs text-text-secondary mb-2 font-mono">Next.js 15 | MongoDB | Tailwind CSS | Stripe</p>
                    <ul className="list-disc list-inside text-sm text-text-secondary font-light space-y-1.5 marker:text-accent-primary">
                      <li>Architected a high-performance e-commerce platform with sub-second page loads.</li>
                      <li>Implemented secure payment gateways and robust user authentication.</li>
                      <li>Designed a fully responsive, mobile-first UI with premium glassmorphic components.</li>
                    </ul>
                  </div>

                  {/* Project 2 */}
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="text-base font-bold text-fg-base">Pulse Real-Time Chat</h4>
                      <span className="text-xs font-bold text-accent-primary uppercase tracking-wider">2025</span>
                    </div>
                    <p className="text-xs text-text-secondary mb-2 font-mono">React | Node.js | Express | Socket.io</p>
                    <ul className="list-disc list-inside text-sm text-text-secondary font-light space-y-1.5 marker:text-accent-primary">
                      <li>Engineered a scalable chat application utilizing WebSockets for instantaneous bidirectional communication.</li>
                      <li>Secured data transmission and user sessions using JWT authentication.</li>
                    </ul>
                  </div>
                  
                  {/* Project 3 */}
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="text-base font-bold text-fg-base">Medical Practitioner Law Database</h4>
                      <span className="text-xs font-bold text-accent-primary uppercase tracking-wider">2025</span>
                    </div>
                    <p className="text-xs text-text-secondary mb-2 font-mono">Graphic Design | Information Architecture</p>
                    <ul className="list-disc list-inside text-sm text-text-secondary font-light space-y-1.5 marker:text-accent-primary">
                      <li>Designed a comprehensive chart detailing legal frameworks for medical practitioners for S.S. Agrawal Homoeopathic Medical College.</li>
                      <li>Synthesized complex legal and medical terminology into an accessible visual format.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* EDUCATION */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-2 h-2 bg-accent-secondary rounded-full" />
                  <h3 className="text-lg font-black tracking-widest uppercase text-fg-base">Education</h3>
                </div>
                
                <div className="flex flex-col gap-4">
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="text-base font-bold text-fg-base">Bachelor of Homeopathic Medicine and Surgery (BHMS)</h4>
                      <span className="text-xs font-bold text-text-secondary">Expected 2029</span>
                    </div>
                    <p className="text-sm text-text-secondary font-light">S.S. Agrawal Homoeopathic Medical College, Navsari</p>
                  </div>
                </div>
              </section>
            </div>

            {/* RIGHT COLUMN: Sidebar Content */}
            <div className="md:col-span-1 flex flex-col gap-8">
              
              {/* SKILLS */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-2 h-2 bg-accent-primary rounded-full" />
                  <h3 className="text-lg font-black tracking-widest uppercase text-fg-base">Tech Stack</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "React.js", "TypeScript", "Node.js", "Express", "MongoDB", "Supabase", "SQL", "Tailwind CSS", "Python", "Java", "C++"].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-bg-base border border-border-card rounded-md text-xs font-bold text-text-secondary uppercase tracking-wider">
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              {/* DOMAIN EXPERTISE */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-2 h-2 bg-accent-primary rounded-full" />
                  <h3 className="text-lg font-black tracking-widest uppercase text-fg-base">Expertise</h3>
                </div>
                <ul className="flex flex-col gap-2 text-sm text-text-secondary font-light">
                  <li className="flex items-center gap-2"> Full-Stack Architecture</li>
                  <li className="flex items-center gap-2"> RESTful API Design</li>
                  <li className="flex items-center gap-2"> Database Management</li>
                  <li className="flex items-center gap-2"> UI/UX & Graphic Design</li>
                  <li className="flex items-center gap-2"> Medical Data Systems</li>
                  <li className="flex items-center gap-2"> Backend systems</li>
                  <li className="flex items-center gap-2"> Beautiful webapps</li>
                </ul>
              </section>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
