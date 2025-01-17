import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0F172A",
        foreground: "#E2E8F0",
        primary: {
          DEFAULT: "#2563EB",
          light: "#60A5FA",
          dark: "#1E40AF",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#334155",
          light: "#94A3B8",
          dark: "#1E293B",
          foreground: "#F8FAFC",
        },
        muted: {
          DEFAULT: "#1E293B",
          foreground: "#94A3B8",
        },
        accent: {
          DEFAULT: "#3B82F6",
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "#DC2626",
          foreground: "#FFFFFF",
        },
        border: "#334155",
        input: "#1E293B",
        ring: "#3B82F6",
        chart: {
          "1": "#3B82F6",
          "2": "#10B981",
          "3": "#6366F1",
          "4": "#F59E0B",
          "5": "#EF4444",
        },
      },
      borderRadius: {
        lg: "1rem",
        md: "0.75rem",
        sm: "0.5rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
