// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        alpha: ['alpha', 'sans-serif'],
        beta: ['beta', 'sans-serif'],
        delta: ['delta', 'sans-serif'],
        gamma: ['gamma', 'sans-serif'],
        epsilon: ['epsilon', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
