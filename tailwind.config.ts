import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#07111f",
        charcoal: "#111827",
        steel: "#26364a",
        flight: "#2f80ed",
        signal: "#d7a94b",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(47,128,237,0.18), 0 24px 80px rgba(4,12,24,0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
