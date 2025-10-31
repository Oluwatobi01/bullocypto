/** @type {import('tailwindcss').Config} */
module.exports = {
  content:["./src/**/*.{js,jsx,ts,tsx}"],
  theme:{
    extend:{
      colors:{
        brandBlue:"#4f46e5",
        brandPurple:"#7c3aed",
      },
      fontFamily:{
        sans:["Poppins","sans-serif"],
      },
      keyframes:{
        fadeIn:{
          "0%":{opacity:0, transform:"translateY(10px)"},
          "100%":{opacity:1, transform:"translateY(0)"},
        },
        pulseSlow:{
          "0%,100%":{opacity:1},
          "50%":{opacity:0.5},
        },
      },
      animation:{
        fadeIn:"fadeIn 0.8s ease-out",
        pulseSlow:"pulseSlow 3s ease-in-out infinite",
      },
    },
  },
  plugins:[],
}
