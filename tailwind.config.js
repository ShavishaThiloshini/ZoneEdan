/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-teal': '#075E5B',
        'ocean-teal': '#0B817A',
        'fresh-teal': '#22A79D',
        'aqua-mist': '#DDF4F0',
        'soft-cream': '#FAF8F2',
        'warm-sand': '#F3E8D2',
        'deep-forest': '#173B35',
      },
      fontFamily: {
        sans: ['Geologica', 'sans-serif'],
        serif: ['Fraunces', 'serif'],
      },
    },
  },
  plugins: [],
}
