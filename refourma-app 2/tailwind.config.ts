import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0a",
        "ink-soft": "#1a1816",
        "ink-mid": "#3a3733",
        paper: "#faf7f1",
        "paper-2": "#f4efe5",
        bone: "#f4efe6",
        ivory: "#ebe3d3",
        "ivory-warm": "#e0d4bc",
        rust: "#b8451f",
        gold: "#c89545",
      },
      fontFamily: {
        display: ['"Fraunces"', "serif"],
        body: ['"Inter"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
