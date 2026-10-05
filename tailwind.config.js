/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: '#111111',
        paper: '#FFFDF5',
        'paper-muted': '#F3F0E6',
        yellow: '#FFE500',
        pink: '#FF1493',
        cyan: '#00D9FF',
        green: '#22F06B',
        red: '#FF4B3E',
        purple: '#A66CFF',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'brutal-xs': '1px 1px 0 var(--shadow-color)',
        'brutal-sm': '3px 3px 0 var(--shadow-color)',
        'brutal-md': '5px 5px 0 var(--shadow-color)',
        'brutal-lg': '7px 7px 0 var(--shadow-color)',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
