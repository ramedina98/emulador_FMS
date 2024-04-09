/** @type {import('tailwindcss').Config} */
import { width } from '@fortawesome/free-solid-svg-icons/fa0';
import plugin from 'tailwindcss';

export default {
  content: [ "./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ],
  theme: {
    extend: {
      colors: {
        greenRetro: '#00b100', 
        blackRetro: '#1a1a1a',
        borderBlack: '#000000',
        violetRetro: '#7340a7b0',
        borderMonitor: '#f0e6df',
        menuBar: '#424242', 
        retroBlue: '#5384c8', 
        retroRed: '#B94A48',
        retroYellow: '#E3C34F',
      },
      width: {
        borderMonitor: 'clamp(450px, 100%, 950px)'
      },
      boxShadow: {
        monitorShadow: '1px 3px 11px rgba(255, 255, 255, 0.5)',
        buttonShadow: '0px 1px 3px rgba(255, 255, 255, 0.5)', 
        outputCard: '0px 2px 3px #8484843b'
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-neon': {
          'text-shadow': '0 0 2px #00ff00, 0 0 3px #00ff00, 0 0 0px #00ff00, 0 0 0px #00ff00, 0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 25px #00ff00',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
}

