import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'body': 'rgb(255, 255, 255)',
        'white-color': 'rgb(255, 255, 255)',
        'text-second': 'rgb(68, 68, 68)',
        'text-third': 'rgb(30, 159, 171)',
        'first-color': 'rgb(110, 87, 224)',
        'first-color-hover': 'rgb(40, 91, 212)',
        'second-color': 'rgb(110, 87, 224)',
        'third': 'rgb(192, 166, 49)',
        'first-shadow-color': 'rgba(110, 87, 224, 0.1)',
      },
      keyframes: {
        imgFloat: {
          '50%': { transform: 'translateY(10px)' },
        },
        slideUpFadeIn: {
          from: {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        animateStar: {
          '0%': { transform: 'rotate(315deg) translateX(0)', opacity: '1' },
          '70%': { opacity: '1' },
          '100%': { transform: 'rotate(315deg) translateX(-1500px)', opacity: '0' },
        },
        rise: {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '0.5' },
          '100%': { transform: 'translateY(-100vh) scale(0.5)', opacity: '0' },
        },
      },
      animation: {
        imgFloat: 'imgFloat 7s ease-in-out infinite',
        'slideUpFadeIn': 'slideUpFadeIn 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}
export default config

