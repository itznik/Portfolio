import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Load Space Grotesk at build time
const space = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space',
  display: 'swap',
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const metadata: Metadata = {
  title: "Nikunj Variya | MERN Stack Developer",
  description: "Portfolio of Nikunj Variya, a 21-year-old Full-Stack Web Developer from Surat, Gujarat, specializing in the MERN stack.",
  themeColor: "#09090B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className={space.variable}>
        <main className="relative min-h-screen w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </main>
      </body>
    </html>
  );
}
