import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f2f6ff",
          100: "#e2ecff",
          200: "#c7daff",
          300: "#9ab9ff",
          400: "#658fff",
          500: "#3b65f5",
          600: "#2645d8",
          700: "#1d36ab",
          800: "#142584",
          900: "#0c1a5e",
          950: "#070f3a",
        },
        ink: {
          50: "#f7f8fa",
          100: "#eef0f4",
          200: "#dbdfe8",
          300: "#b9c0d0",
          400: "#8b95ad",
          500: "#646f8a",
          600: "#4a546e",
          700: "#39415a",
          800: "#262c41",
          900: "#161a2c",
          950: "#0b0e1c",
        },
        accent: {
          400: "#5be1c4",
          500: "#26c9a8",
          600: "#0fa789",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "ui-sans-serif",
          "system-ui",
          "Inter",
          "Segoe UI",
          "sans-serif",
        ],
        display: [
          "var(--font-display)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(11,14,28,0.04), 0 8px 24px rgba(11,14,28,0.06)",
        elevate:
          "0 4px 12px rgba(11,14,28,0.06), 0 24px 48px -12px rgba(11,14,28,0.18)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 80%)",
        "brand-radial":
          "radial-gradient(1200px 600px at 20% 0%, rgba(59,101,245,0.18), transparent 60%), radial-gradient(900px 500px at 100% 10%, rgba(38,201,168,0.14), transparent 60%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
