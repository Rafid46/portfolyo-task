/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        caveat: "'Caveat', cursive",
        brolimo: ["BrolimoRegular"],
        grotest: ["ArchivGroteskTrial-RegularTrial"],
        neue: ["NeueMontreal-Regular"],
        founderGrotest: ["FoundersGrotesk-Semibold"],
        diastema: ["Diastema Regular"],
        contrail: ["'Contrail One'", "sans-serif"],
        vina: ["'Vina Sans'", "sans-serif"],
        climate: ["'Climate Crisis'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
