/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat : ["Montserrat", "sans-serif"],
        fraunces : ["Fraunces", "serif"]
      },
      backgroundImage: {
        'mobile': "url('/image-product-mobile.jpg')",
      }
    },
  },
  plugins: [],
}
