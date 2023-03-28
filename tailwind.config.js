/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        104: "26rem",
        112: "28rem",
        120: "30rem",
        128: "32rem",
        136: "34rem",
        144: "36rem",
      },
      keyframes: {
        fadein: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        "fade-in": "fadein 0.5s ease-in-out forwards",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
