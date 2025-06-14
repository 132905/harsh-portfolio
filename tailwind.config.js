module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", 
  theme: {
    extend: {
      colors: {
        primary: "#ef4444", // red-500 for buttons and accents
        background: "#000000", // default dark background
        surface: "#1f2937", // gray-800
        textPrimary: "#ffffff",
        textSecondary: "#9ca3af", // gray-400
      },
    },
  },
  plugins: [],
};
