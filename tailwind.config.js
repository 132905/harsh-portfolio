/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        red: {
          500: "#ef4444",
          600: "#dc2626",
        },
        background: "#000000",
        surface: "#1f2937",
      },
    },
  },
  plugins: [],
};
