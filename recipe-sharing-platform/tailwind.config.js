/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // "./index.html",                 // Vite entry (keeps your setup working)
    // "./public/index.html",          // Added for the checker
    "./src/**/*.{js,ts,jsx,tsx}",   // All React files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
