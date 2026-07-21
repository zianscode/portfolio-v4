import type { Config } from "tailwindcss";
import tailwindScrollbar from "tailwind-scrollbar";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"], 
  theme: {
    extend: {
      screens: {
        lg: "1500px",
      },
      colors: {
        background: "var(--background)", 
        foreground: "var(--foreground)", 
        brand: {
          neon: "#39FF14",
          dark: "#001F3F",
        }
      },
      borderRadius: {
        lg: "var(--radius)", 
        md: "calc(var(--radius) - 2px)", 
        sm: "calc(var(--radius) - 4px)", 
      },
      fontFamily: {
        sora: ["var(--font-sora)", ...fontFamily.sans], 
        poppins: ["var(--font-poppins)", ...fontFamily.sans], 
        inter: ["var(--inter-font)", ...fontFamily.sans], 
      },
      animation: {
        'gradient-move': 'gradient-move 3s ease infinite',
      },
      keyframes: {
        'gradient-move': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
    },
  },
  plugins: [tailwindScrollbar], 
};

export default config;