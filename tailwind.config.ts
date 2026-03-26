import type { Config } from "tailwindcss";

// Colors pulled from brand.config.ts — do not add colors here that aren't in brand.config.ts
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#24285b",
          dark:    "#151238",
          shadow:  "rgba(21,18,56,0.15)",
        },
        accent: {
          DEFAULT: "#1fcf42",
          text:    "#0d7a2a",
          hover:   "#17a334",
        },
        surface: {
          white:  "#ffffff",
          light:  "#f6f6f6",
          subtle: "#f5f6f8",
        },
        ink: {
          heading: "#151238",
          body:    "#121643",
          muted:   "#6c757d",
        },
        line: {
          DEFAULT: "#dee2e6",
          subtle:  "rgba(36,40,91,0.12)",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        "hero-lg": ["4rem",    { lineHeight: "1.1",  fontWeight: "700" }],  // 64px
        "hero-sm": ["2.25rem", { lineHeight: "1.15", fontWeight: "700" }],  // 36px
      },
      maxWidth: {
        prose: "700px",
        form:  "560px",
      },
      borderRadius: {
        card: "16px",
        pill: "999px",
      },
      boxShadow: {
        card:       "0 4px 24px rgba(21,18,56,0.08)",
        "card-hover": "0 8px 32px rgba(21,18,56,0.13)",
        nav:        "0 1px 0 #dee2e6",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
