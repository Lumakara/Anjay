// src/styles/tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        serif: ["Merriweather", "serif"],
        sans: ["Inter", "sans-serif"],
        display: ["Rajdhani", "sans-serif"]
      },
      colors: {
        primary: {
          light: "#FDEFF9",
          DEFAULT: "#D53F8C",
          dark: "#97266D"
        }
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/images/particle-bg.svg')"
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-animate')
  ]
};