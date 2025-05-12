/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fortrolla': {
          'black': '#0A0A0A',
          'dark': '#1A1A1A',
          'gray': '#2A2A2A',
          'silver': '#C0C0C0',
          'light': '#F0F0F0',
          'white': '#FFFFFF',
          'accent': '#8A2BE2', // Vibrant purple accent
          'secondary': '#4B0082', // Deep indigo for secondary accents
        },
      },
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
        'display': ['Playfair Display', 'serif'],
        'mono': ['Space Mono', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
