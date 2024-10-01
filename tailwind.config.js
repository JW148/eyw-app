// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  plugins: [nextui()],
  theme: {
    extend: {
      colors: {
        eywnavy: "#1D3C70",
        eywblue: "#34B3C7",
        eywpurple: "#655CA3",
        eywcoral: "#EA5658",
        eywteal: "#4BB8A9",
        eywyellow: "#EA9200",
      },
    },
  },
};
