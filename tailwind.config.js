/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './index.html',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        'roboto-mono': ['Roboto Mono', 'sans-serif'],
      },
      colors: {
        selected: 'rgba(0, 0, 0, 0.37)',
        addTaskBg: 'rgba(0, 0, 0, 0.49)',
        addTaskBorder: 'rgba(255, 255, 255, 0.494)',
        promptBG: 'rgb(218, 214, 214)',
      },
      boxShadow: {
        toggleBtn: '0 5px rgb(187, 185, 185)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
