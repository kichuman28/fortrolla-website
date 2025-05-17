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
          'black': '#000000',
          'dark': '#111111',
          'gray': '#222222',
          'pink': '#FF4191',
          'magenta': '#E90074',
          'gold': '#FFD700',
          'light': '#F0F0F0',
          'white': '#FFFFFF',
        },
      },
      fontFamily: {
        'sans': ['ABeeZee', 'sans-serif'],
        'display': ['ABeeZee', 'sans-serif'],
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
