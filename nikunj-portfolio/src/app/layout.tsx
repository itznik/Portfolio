import type { Metadata } from "next";
import { Space_Grotesk, Sacramento } from "next/font/google"; // Import Sacramento here
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const space = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space',
  display: 'swap',
});

const signature = Sacramento({
  weight: "400",
  subsets: ["latin"],
  variable: '--font-signature',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Nikunj Variya | Full-Stack Developer",
  description: "Portfolio of Nikunj Variya, a Full-Stack Web Developer.",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      {/* Add the signature.variable here so the whole app can access it */}
      <body className={`${space.variable} ${signature.variable}`}>
        <ThemeProvider>
          <main className="relative min-h-screen w-full mx-auto">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
