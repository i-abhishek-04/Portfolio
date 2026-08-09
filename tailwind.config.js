/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#02050b",
        panel: "#080d18",
        panel2: "#0a1120",
        border: "rgba(96,165,250,0.14)",
        borderStrong: "rgba(96,165,250,0.32)",
        term: "#4ade80",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        glowCyan: "0 0 24px rgba(56,189,248,0.25)",
        glowViolet: "0 0 24px rgba(168,85,247,0.25)",
      },
      keyframes: {
        floatSlow: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        blink: {
          "0%,49%": { opacity: 1 },
          "50%,100%": { opacity: 0 },
        },
      },
      animation: {
        floatSlow: "floatSlow 6s ease-in-out infinite",
        blink: "blink 1s step-start infinite",
      },
    },
  },
  plugins: [],
};
