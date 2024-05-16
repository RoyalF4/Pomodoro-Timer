/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
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
    },
  },
  plugins: [],
};
