/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F6F8FA',
        card: '#FFFFFF',
        'text-main': '#172B4D',
        'text-sub': '#667085',
        primary: {
          DEFAULT: '#147D64',
          hover: '#0E604D',
          light: '#E8F5EF',
          border: '#BFE3D4',
        },
        border: {
          DEFAULT: '#E4E7EC',
          light: '#F0F2F5',
          dark: '#D0D5DD',
        },
        warning: {
          DEFAULT: '#D97706',
          light: '#FEF3C7',
          border: '#FDE68A',
        },
        danger: {
          DEFAULT: '#DC4C4C',
          light: '#FEE2E2',
          border: '#FECACA',
        },
        info: {
          DEFAULT: '#2563EB',
          light: '#EFF6FF',
          border: '#BFDBFE',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
