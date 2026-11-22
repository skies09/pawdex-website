/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1F6F78',
          dark: '#195C63',
          soft: '#D4EBE8',
          hover: '#F4FAF8',
        },
        secondary: {
          DEFAULT: '#9BC4B5',
          soft: '#E8F3EF',
        },
        sand: '#E7D8C9',
        accent: {
          DEFAULT: '#E97B6C',
          soft: '#FCE8E5',
        },
        ink: {
          DEFAULT: '#2E3A4B',
          muted: '#5A6573',
        },
        surface: {
          DEFAULT: '#F7F3EF',
          card: '#FFFFFF',
          border: '#D4E4DE',
        },
      },
      fontFamily: {
        // Source Sans 3 instead of Inter default (UI Design Brain); Poppins for display.
        sans: ['"Source Sans 3"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Poppins', '"Source Sans 3"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      spacing: {
        4.5: '1.125rem',
      },
      boxShadow: {
        soft: '0 2px 8px rgba(46, 58, 75, 0.08)',
        lift: '0 16px 40px rgba(46, 58, 75, 0.12)',
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        pill: '999px',
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
}
