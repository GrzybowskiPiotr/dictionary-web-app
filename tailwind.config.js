/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: ["font-sans", "font-serif", "font-mono"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mono: ["Inconsolata", "monospace"],
        sansSerif: ["Inter", "sans-serif"],
        serif: ["Lora", "serif"],
      },
      colors: {
        CustomGray: {
          "dark-400": "#050505",
          "dark-300": "#1F1F1F",
          "dark-200": "#2D2D2D",
          "dark-100": "#3A3A3A",
          "light-400": "#757575",
          "light-300": "#E9E9E9",
          "light-200": "#F4F4F4",
          "light-100": "#FFFFFF",
        },
        CustomPurple: "#A445ED",
        CustomOrange: "#FF5252",
      },
    },
  },
  plugins: [],
};
