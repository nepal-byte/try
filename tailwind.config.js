/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '320px',    // Small phone
      'sm': '640px',    // Large phone
      'md': '768px',    // Tablet
      'lg': '1024px',   // Small laptop
      'xl': '1440px',   // Desktop
      '2xl': '1920px',  // Large desktop
    },
    extend: {},
  },
  plugins: [],
}
