// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js}", // Justera sökvägar efter ditt projekt
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"], // Ersätter den befintliga sans fontstacken
        custom: ['"Roboto"', "serif"], // Lägg till en anpassad font
      },
    },
  },
  plugins: [],
};
