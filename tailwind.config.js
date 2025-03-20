/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      xs: "300px",
      sm: "480px",
      md: "768px",
      slg: "900px", // Semi-large
      lg: "1024px",
      xl: "1200px",
      "2xl": "1500px",
    },
  },
  plugins: [],
};
