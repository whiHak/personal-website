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
        'primary': {
          50: '#e8f7ec',   // Very light green
          75: '#e0f6e5',
          100: '#d1eedb',  // Light green
          200: '#a8dfb6',  // Soft green
          300: '#7ecfa3',  // Medium-light green
          400: '#55bf90',  // Medium green
          500: '#2ca16e',  // Base primary green
          600: '#258a5c',  // Slightly darker green
          700: '#1e734a',  // Dark green
          800: '#175c38',  // Very dark green
          900: '#104526',  // Almost black green
          950: '#082413',  // Deepest green
        },
        'primary-green': '#307F38',
        'dark-green': '#1F3D2B',
        'light-green': '#8CFF65',
        'accent-green': '#44874b',
        'off-white': '#f9f9f9',
        'text-gray': '#333333',
        'secondary-text': '#D1D5DC',
        'border-gray': '#e9ecef',
        'card-bg': '#ffffff',
        'dark-card-bg': '#1a2a1a',
        'button-primary': '#1e8a36',
        'button-secondary': '#5cb85c',
        'highlight-yellow': '#f0ad4e',
        'success-green': '#28a745',
        'danger-red': '#dc3545',
        'info-blue': '#17a2b8',
        'text-neutral': '#4B5768',
        'green-lite':"#46a619",
        'transparent-green':"#00B82D1F"
      },
    },
    screens: {
        '2xl-custom': '1920px', // custom breakpoint for full HD
      },
  },
  plugins: [],
};
