import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Load font at build time for 0 layout shift
const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: '--font-jakarta',
  display: 'swap',
});

// Utility function we'll use across components for clean class merging
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Highly optimized SEO Metadata
export const metadata: Metadata = {
  title: "Nikunj Variya (Vortex) | Full-Stack Developer",
  description: "Portfolio of Nikunj Variya, a Full-Stack Web Developer specializing in the MERN stack, Next.js, and high-performance interactive web applications.",
  themeColor: "#14B8A6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className={jakarta.variable}>
        {/* We will insert the SVG Thread Component here later so it spans the whole page */}
        <main className="relative min-h-screen w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </main>
      </body>
    </html>
  );
}
