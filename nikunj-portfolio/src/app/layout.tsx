import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const space = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Nikunj Variya | MERN Stack Developer",
  description: "Portfolio of Nikunj Variya, a 21-year-old Full-Stack Web Developer from Surat.",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <body className={space.variable}>
        <ThemeProvider>
          <main className="relative min-h-screen w-full mx-auto">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
