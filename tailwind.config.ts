import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        znanylekarz: "#03C3A5",
        primary: "#A4957A",
        accent: "#D1E9F6",
        neutral: "#DED6C5",
        neutral2: "#FFFFFF",
        text: "#333333",
      },
    },
  },
  plugins: [],
};
export default config;
