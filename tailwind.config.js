/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    darkMode: "class",
    extend: {},
  },
  plugins: [require("daisyui")],
};
