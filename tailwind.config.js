/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
     colors: {
        // Primary brand colors
        'zeleman-orange': {
          50: '#fff7f5',
          100: '#ffede8',
          200: '#ffd9cc',
          300: '#ffbaa0',
          400: '#ff8c66',
          500: '#ff6b35', // Main brand color
          600: '#f15a22',
          700: '#e14710',
          800: '#c13a0a',
          900: '#a02f08',
        },
        'zeleman-dark': {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#2d2d2d', // Main dark color
        },
        // Success / Growth color (for trend arrow)
        'zeleman-success': {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        // Background & Accent
        'zeleman-beige': {
          50: '#fdf9f6',
          100: '#f7f0eb',
          200: '#f7e9e5', // Used in bg
          300: '#f3dccf',
          400: '#eecbad',
          500: '#e9b58a',
        },
        // Accent orange for badge
        'zeleman-accent': {
          500: '#fb9f6d', // Badge orange from original design
        },
        // Text & UI
        'zeleman-gray': {
          100: '#f3f3f5',
          200: '#e9ebef',
          300: '#d1d5dc',
          400: '#99a1af',
          500: '#717182',
          600: '#4a5565',
          700: '#302f2f',
        },
        // Optional extras
        'zeleman-yellow': '#fff085',
        'zeleman-red': '#ff4d4d',
        'zeleman-blue': '#4d7cff',
        'zeleman-green': '#4dff88',
        'zeleman-light': '#fff7ed',
      },
    },
    screens: {
        '2xl-custom': '1920px', // custom breakpoint for full HD
      },
  },
  plugins: [],
};
