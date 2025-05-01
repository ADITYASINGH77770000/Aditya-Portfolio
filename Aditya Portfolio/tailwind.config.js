/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // Disable dark mode functionality
  theme: {
    extend: {
      colors: {
        gradient1: '#000000',
        gradient2: '#0A2647',
        gradient3: '#144272',
        gradient4: '#205295',
        light: {
          bg: '#F3F4F6',
          text:  '#111827',
          primaryLight: '#144272',  // Blue tones for text/borders
          backgroundLight: '#ffffff', // White background
          softBlue: '#DCE8F2', // Optional section b
        }
      },
      fontFamily: {
        arial: ['Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}

