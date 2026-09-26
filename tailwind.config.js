/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a3c5e',
          light:   '#245280',
          dark:    '#0f2438',
          darker:  '#071420',
        },
        accent: {
          DEFAULT: '#c8973a',
          light:   '#e2b05c',
          dark:    '#a67a28',
        },
      },
      fontFamily: {
        body:    ['Inter', 'sans-serif'],
        heading: ['"Playfair Display"', 'serif'],
      },
      animation: {
        'float':      'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite reverse',
        'pulse-wa':   'pulse-wa 2.5s infinite',
        'bounce-dot': 'bounce-dot 1.8s infinite',
        'shimmer':    'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-14px)' },
        },
        'pulse-wa': {
          '0%,100%': { boxShadow: '0 6px 20px rgba(37,211,102,0.45)' },
          '50%':     { boxShadow: '0 6px 36px rgba(37,211,102,0.70)' },
        },
        'bounce-dot': {
          '0%,80%,100%': { transform: 'translateY(0)' },
          '40%':          { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'hero-gradient':  'linear-gradient(135deg,#071420 0%,#0f2438 40%,#1a3c5e 80%,#0f2438 100%)',
        'dark-gradient':  'linear-gradient(135deg,#071420 0%,#1a3c5e 100%)',
        'gold-gradient':  'linear-gradient(135deg,#c8973a,#e2b05c)',
        'card-gradient':  'linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))',
      },
      boxShadow: {
        'glow-gold':  '0 0 30px rgba(200,151,58,0.25)',
        'glow-blue':  '0 0 30px rgba(26,60,94,0.35)',
        'card':       '0 4px 24px rgba(0,0,0,0.08)',
        'card-hover': '0 16px 48px rgba(0,0,0,0.15)',
      },
    },
  },
  plugins: [],
}
