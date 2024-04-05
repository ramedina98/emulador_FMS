/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss';

export default {
  content: [ "./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ],
  theme: {
    extend: {
      colors: {
        greenRetro: '#00b100', 
        blackRetro: '#1a1a1a',
        borderBlack: '#000000',
        violetRetro: '#a156ebb0',
        borderMonitor: '#f0e6df',
        menuBar: '#424242'
      },
      spacing: {
        clampBorderMonitor: 'clamp(450px, 95%, 790px)'
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

