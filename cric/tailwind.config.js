/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animationFillMode: {
        none: 'none',
        forwards: 'forwards',
        backwards: 'backwards',
        both: 'both',
      },
      animation:{
        // tests:'tests 1s'
        menu:'menu 1s',
        closeMenu:'closeMenu 1s',
        upline:'upline .8s',
        middleline:'',
        lowline:'lowline .8s'
      },
      keyframes:{
        menu:{
          "0%":{transform:'translateX(0%)'},
          "100%":{transform:'translateX(-380%)'}
        },
        closeMenu:{
          "0%":{transform:'translateX(-380%)'},
          "100%":{transform:'translateX(0%)'},
        },
        upline:{
          "0%":{transform:'rotate(0deg)'},
          "100%":{transform:'rotate(45deg)'}
        },
        middleline:{
          "0%":{transform:''},
          "100%":{transform:''}
        },
        lowline:{
          "0%":{transform:'rotate(0deg)'},
          "100%":{transform:'rotate(-45deg)'}
        }
      },
      transformOrigin:{
       "custom":"20% 50%"
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.fill-none': {
          animationFillMode: 'none',
        },
        '.fill-forwards': {
          animationFillMode: 'forwards',
        },
        '.fill-backwards': {
          animationFillMode: 'backwards',
        },
        '.fill-both': {
          animationFillMode: 'both',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
}