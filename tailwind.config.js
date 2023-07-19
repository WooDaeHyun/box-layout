/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#dfe6e9",
        black: "#2d3436",
        pink: "#fd79a8",
        green: "#00b894",
        red: "#d63031",
        blue: "#0984e3",
        mint: "#81ecec",
        yellow: "#fdcb6e",
      },
    },
  },
  plugins: [],
};
