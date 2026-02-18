import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Mobile-first breakpoints
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Noto Sans Armenian", "sans-serif"],
      },
      // Mobile-first spacing scale
      spacing: {
        "safe-top": "env(safe-area-inset-top)",
        "safe-bottom": "env(safe-area-inset-bottom)",
        "safe-left": "env(safe-area-inset-left)",
        "safe-right": "env(safe-area-inset-right)",
      },
      // Fluid typography
      fontSize: {
        "fluid-xs": ["clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)", { lineHeight: "1.5" }],
        "fluid-sm": ["clamp(0.875rem, 0.8rem + 0.375vw, 1rem)", { lineHeight: "1.5" }],
        "fluid-base": ["clamp(1rem, 0.95rem + 0.25vw, 1.125rem)", { lineHeight: "1.6" }],
        "fluid-lg": ["clamp(1.125rem, 1rem + 0.625vw, 1.5rem)", { lineHeight: "1.5" }],
        "fluid-xl": ["clamp(1.25rem, 1.1rem + 0.75vw, 1.875rem)", { lineHeight: "1.4" }],
        "fluid-2xl": ["clamp(1.5rem, 1.3rem + 1vw, 2.25rem)", { lineHeight: "1.3" }],
        "fluid-3xl": ["clamp(1.875rem, 1.5rem + 1.875vw, 3rem)", { lineHeight: "1.2" }],
        "fluid-4xl": ["clamp(2.25rem, 1.8rem + 2.25vw, 3.75rem)", { lineHeight: "1.1" }],
        "fluid-5xl": ["clamp(3rem, 2.4rem + 3vw, 4.5rem)", { lineHeight: "1.1" }],
      },
      // Touch target sizes
      minHeight: {
        "touch": "44px",
      },
      minWidth: {
        "touch": "44px",
      },
    },
  },
  plugins: [],
};

export default config;
