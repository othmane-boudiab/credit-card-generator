/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // important: true,
  corePlugins: {
    preflight: false, // This disables Tailwind's base styles, which include global resets that might conflict with PrimeNG
  },
}

