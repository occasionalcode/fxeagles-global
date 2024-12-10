import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobilesS: "320px",
      mobileL: "425px",
      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
    extend: {
      gridTemplateColumns: {
        "auto-fill-250": "repeat(auto-fill, minmax(250px, 1fr))",
        "auto-fill-300": "repeat(auto-fill, minmax(400px, 1fr))",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    fontFamily: {
      Montserrat: "Montserrat",
    },
    dropShadow: {
      glow: [
        "0 0px 20px rgba(232,152, 31, 0.60)",
        "0 0px 65px rgba(255, 255,255, 1)",
      ],
    },
  },
  plugins: [],
} satisfies Config;
