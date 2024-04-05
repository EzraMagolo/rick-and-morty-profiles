// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#3F51B5',
        secondary: '#FF5722',
        accent: '#E91E63',
        success: '#4CAF50',
        warning: '#FFC107',
        error: '#FF5252',
        info: '#2196F3',
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        mono: ['Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      boxShadow: {
        'outline-primary': '0 0 0 3px rgba(63, 81, 181, 0.5)',
        'outline-secondary': '0 0 0 3px rgba(255, 87, 34, 0.5)',
        'outline-accent': '0 0 0 3px rgba(233, 30, 99, 0.5)',
        'outline-success': '0 0 0 3px rgba(76, 175, 80, 0.5)',
        'outline-warning': '0 0 0 3px rgba(255, 193, 7, 0.5)',
        'outline-error': '0 0 0 3px rgba(255, 82, 82, 0.5)',
        'outline-info': '0 0 0 3px rgba(33, 150, 243, 0.5)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
