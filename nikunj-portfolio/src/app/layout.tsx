import type { Metadata, Viewport} from "next";
import { Space_Grotesk, Sacramento } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAFA" },
    { media: "(prefers-color-scheme: dark)", color: "#09090B" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://your-live-domain.com"),
  title: {
    default: "Nikunj Variya | Full-Stack Developer",
    template: "%s | Nikunj Variya"
  },
  description: "Portfolio of Nikunj Variya, a Full-Stack Web Developer from Surat, Gujarat specializing in the MERN stack and Next.js.",
  keywords: ["Nikunj Variya", "Full-Stack Developer", "MERN Stack", "Next.js Developer", "Surat Developer", "Software Engineer"],
  authors: [{ name: "Nikunj Variya" }],
  creator: "Nikunj Variya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-live-domain.com",
    title: "Nikunj Variya | Full-Stack Developer",
    description: "Engineering the web, pixel by pixel. Specializing in high-performance MERN & Next.js applications.",
    siteName: "Nikunj Variya Portfolio",
    images: [
      {
        url: "/profile-photo.jpg",
        width: 1200,
        height: 630,
        alt: "Nikunj Variya Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikunj Variya | Full-Stack Developer",
    description: "Engineering the web, pixel by pixel.",
    images: ["/profile-photo.jpg"],
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Nikunj Variya",
  },
};

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
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
