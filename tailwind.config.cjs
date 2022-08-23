/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: ["./src/**/*.{astro,html,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto Mono", "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        primary: "#D68FBC",
        secondary: "#53A0C4",
        alternate: "#935D7E",
        grey: "#AFD7FA",
        dark: "#0F1026",
        "dark-secondary": "#051C30",
        "dark-grey": "#042F40",
      },
      boxShadow: {
        DEFAULT: `0 0 0 1.5px ${"#935D7E"}`,
        fs: `0 0 0 1.5px ${"#D68FBC"}`,
      },
    },
  },
  plugins: [],
};
