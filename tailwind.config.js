/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        monospace: "'Work Sans', sans-serif",
      },
      screens:{
        'lg':'1030px'
      }
    },
  },
  plugins: [require("daisyui")],
};
