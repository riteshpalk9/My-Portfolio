
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class", ".dark-purple", ".dark-blue"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#8B5CF6",
          foreground: "#ffffff",
          100: "#EDE9FE",
          200: "#DDD6FE", 
          300: "#C4B5FD",
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#7C3AED",
          700: "#6D28D9",
          800: "#5B21B6",
          900: "#4C1D95",
        },
        secondary: {
          DEFAULT: "#64748b",
          foreground: "#ffffff",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
        accent: {
          DEFAULT: "#D946EF",
          foreground: "#ffffff",
          100: "#FAE8FF",
          200: "#F5D0FE",
          300: "#F0ABFC",
          400: "#E879F9",
          500: "#D946EF",
          600: "#C026D3",
          700: "#A21CAF",
          800: "#86198F",
          900: "#701A75",
        },
        success: {
          DEFAULT: "#10B981",
          foreground: "#ffffff",
        },
        warning: {
          DEFAULT: "#F59E0B",
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        'premium': '0 10px 30px -3px rgba(139, 92, 246, 0.15)',
        'premium-hover': '0 20px 30px -3px rgba(139, 92, 246, 0.25)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 20px rgba(139, 92, 246, 0.5)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        moveParticle: {
          "0%": {
            transform: "translateX(0) translateY(0)",
          },
          "25%": {
            transform: "translateX(50px) translateY(-50px)",
          },
          "50%": {
            transform: "translateX(100px) translateY(0)",
          },
          "75%": {
            transform: "translateX(50px) translateY(50px)",
          },
          "100%": {
            transform: "translateX(0) translateY(0)",
          },
        },
        "particle-trail": {
          "0%": {
            opacity: "0.8",
            transform: "rotate(var(--rotation)) translateX(150px) scale(1)",
          },
          "50%": {
            opacity: "0.4",
            transform: "rotate(var(--rotation)) translateX(200px) scale(0.8)",
          },
          "100%": {
            opacity: "0",
            transform: "rotate(var(--rotation)) translateX(250px) scale(0.2)",
          },
        },
        shine: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "0 0" }
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" }
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
        "shimmer": "shimmer 2s infinite",
        "shine": "shine 8s ease-in-out infinite",
        blob: "blob 7s infinite",
        moveParticle: "moveParticle 10s infinite",
        "particle-trail": "particle-trail 2s linear infinite",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'shine': 'linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent)',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function({ addUtilities }) {
      const newUtilities = {
        '.animation-delay-2000': {
          'animation-delay': '2s',
        },
        '.animation-delay-3000': {
          'animation-delay': '3s',
        },
        '.animation-delay-4000': {
          'animation-delay': '4s',
        },
        '.glass-card': {
          'backdrop-filter': 'blur(16px)',
          'background-color': 'rgba(255, 255, 255, 0.05)',
          'border': '1px solid rgba(255, 255, 255, 0.1)',
          'box-shadow': '0 4px 30px rgba(0, 0, 0, 0.1)'
        },
        '.glass-card-dark': {
          'backdrop-filter': 'blur(16px)',
          'background-color': 'rgba(0, 0, 0, 0.2)',
          'border': '1px solid rgba(255, 255, 255, 0.05)',
          'box-shadow': '0 4px 30px rgba(0, 0, 0, 0.3)'
        },
        '.text-gradient': {
          'background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        '.shimmer': {
          'position': 'relative',
          'overflow': 'hidden',
        },
        '.shimmer::before': {
          'content': '""',
          'position': 'absolute',
          'top': '0',
          'left': '-100%',
          'width': '100%',
          'height': '100%',
          'background': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
          'animation': 'shimmer 2s infinite',
        }
      }
      addUtilities(newUtilities)
    },
  ],
} satisfies Config;
