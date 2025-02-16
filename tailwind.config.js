/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: ["font-sans", "font-serif", "font-mono"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        customPurple: "0px 5px 15px 3px rgba(164, 69, 237, 0.4)",
      },
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
        CustomPurpleDarkMode: "#A445ED",
      },
      keyframes: {
        pop: {
          "0%": { transform: "scale(0)", opacity: "0" },
          "50%": { transform: "scale(1.05)", opacity: "1" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        pop: "pop 0.3s ease-out",
      },
    },
  },
  plugins: [],
};
