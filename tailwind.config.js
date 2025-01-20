/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F72585",
        secondary: "#7209B7",
        tertiary: "#4CC9F0",
        quaternary: "#4361EE",
        BG: "#F3F3F3",
        favorite: "#FF5841",
      },
    },
  },
  plugins: [],
};
