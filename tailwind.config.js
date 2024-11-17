/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        space: ['"Space Mono"', "monospace"],
      },
      colors: {
        skyBlue: "#0079FF",
        darkGrey: "#697C9A",
        slateBlue: "#4B6A9B",
        navy: "#2B3442",
        lightBlue: "#F6F8FF",
        offWhite: "#FEFEFE",
        pureWhite: "#FFFFFF",
        deepNavy: "#141D2F",
        midnightBlue: "#1E2A47",
      },
    },
  },
  plugins: [],
};
