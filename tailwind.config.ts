import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  prefix: "", // Sem prefixo para as classes Tailwind
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

        // Cores primárias e secundárias da marca (semânticas)
        brand: {
          primary: {
            DEFAULT: "hsl(var(--brand-primary))", // Azul principal
            foreground: "hsl(var(--brand-primary-foreground))", // Texto para fundos azuis
            hover: "hsl(var(--brand-primary-hover))",
          },
          secondary: {
            DEFAULT: "hsl(var(--brand-secondary))", // Verde-azulado/Teal
            foreground: "hsl(var(--brand-secondary-foreground))",
            hover: "hsl(var(--brand-secondary-hover))",
          },
        },

        // Cores de componentes shadcn/ui (semânticas)
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        // Manter cores dimensionais para compatibilidade com componentes existentes
        "emotional-dark": "#1e3a8a",
        "emotional-light": "#3b82f6",
        "emotional-lighter": "#bfdbfe",
        "emotional-darker": "#1e40af",
        "cognitive-dark": "#065f46",
        "cognitive-light": "#10b981",
        "cognitive-lighter": "#a7f3d0",
        "cognitive-darker": "#065f46",
        "autonomy-dark": "#7e1d5f",
        "autonomy-light": "#ec4899",
        "autonomy-lighter": "#fbcfe8",
        "autonomy-darker": "#9d174d",
        "accent-yellow": "#fbbf24",
        "accent-purple": "#a78bfa",
        "accent-teal": "#2dd4bf",
        critical: "#f59e0b",
        white: "#ffffff",
        pearl: "#f8fafc",
        "gray-light": "#e2e8f0",
        "gray-medium": "#64748b",
        "gray-dark": "#1e293b",
        black: "#0f172a",
        light: "var(--color-pearl)",
        dark: "var(--color-black)",
      },
      fontFamily: {
        primary: ["Space Grotesk", "var(--font-primary)", "sans-serif"],
        secondary: ["Manrope", "var(--font-secondary)", "sans-serif"],
        body: ["Manrope", "var(--font-body)", "sans-serif"],
        sans: [
          "Space Grotesk",
          "var(--font-sans)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
      },
      fontSize: {
        // Mobile-first responsive typography scale
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
        '8xl': ['6rem', { lineHeight: '1.1' }],
        '9xl': ['8rem', { lineHeight: '1.1' }],
        // Display sizes for hero text
        'display-sm': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.025em' }],
        'display-md': ['2.875rem', { lineHeight: '3.25rem', letterSpacing: '-0.025em' }],
        'display-lg': ['3.75rem', { lineHeight: '4.25rem', letterSpacing: '-0.025em' }],
        'display-xl': ['4.5rem', { lineHeight: '5rem', letterSpacing: '-0.025em' }],
        'display-2xl': ['5.625rem', { lineHeight: '6rem', letterSpacing: '-0.025em' }],
      },
      spacing: {
        // Extended spacing scale for better layout control
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "calc(var(--radius) + 4px)",
        "2xl": "calc(var(--radius) + 8px)",
        "3xl": "1.5rem",
        "4xl": "2rem",
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
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-from-left": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundSize: "200% 200%", backgroundPosition: "left center" },
          "50%": { backgroundSize: "200% 200%", backgroundPosition: "right center" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-from-right": {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 10px hsl(var(--brand-primary-hover))" },
          "50%": { boxShadow: "0 0 20px hsl(var(--brand-primary))" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "fade-in-up": "fade-in-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "slide-in-from-left": "slide-in-from-left 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "slide-in-from-right": "slide-in-from-right 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "gradient-x": "gradient-x 8s ease infinite",
        shimmer: "shimmer 3s infinite linear",
        "pulse-glow": "pulse-glow 4s infinite ease-in-out",
        "float": "float 6s ease-in-out infinite",
        "scale-in": "scale-in 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "bounce-subtle": "bounce-subtle 2s infinite",
      },
      boxShadow: {
        "soft-sm": "0 2px 4px rgba(0,0,0,0.05)",
        soft: "0 4px 12px rgba(0,0,0,0.1)",
        "soft-lg": "0 10px 25px rgba(0,0,0,0.1)",
        "soft-xl": "0 20px 50px rgba(0,0,0,0.15)",
        "inner-glow": "inset 0 2px 4px 0 rgba(255, 255, 255, 0.02)",
        "glow-white-sm": "0 0 20px rgba(255, 255, 255, 0.03)",
        "glow-white-md": "0 0 40px rgba(255, 255, 255, 0.05)",
        "glow-white-lg": "0 0 60px rgba(255, 255, 255, 0.08)",
        "elevation-1": "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
        "elevation-2": "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
        "elevation-3": "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)",
        "elevation-4": "0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography"), require("@tailwindcss/forms")],
}

export default config
