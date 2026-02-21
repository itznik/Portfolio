import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-jakarta)', 'sans-serif'],
      },
      colors: {
        brand: {
          teal: "#14B8A6",   // The primary bright teal
          indigo: "#6366F1", // The secondary deep purple
          dark: "#0F172A",   // Very dark blue for text
          light: "#FAFAFA",  // Off-white background
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #14B8A655 0deg, #6366F155 180deg, transparent 360deg)',
      },
      boxShadow: {
        'glass': '0 10px 40px -10px rgba(0,0,0,0.08)', // Soft, wide shadow for cards
        'glass-hover': '0 20px 40px -10px rgba(20, 184, 166, 0.15)', // Teal tinted hover shadow
      },
    },
  },
  plugins: [],
};
export default config;
