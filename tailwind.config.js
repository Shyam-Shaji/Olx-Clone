/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./node_modules/@material-tailwind/react/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@material-tailwind/react/plugin")],
};
