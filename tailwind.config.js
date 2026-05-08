/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#030014",
        secondary: "#7042f8",
        accent: "#bb2649", // A warmer accent or stay with cyan
        card: "rgba(17, 12, 46, 0.45)",
      },
      fontFamily: {
        heading: ["Poppins", "Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'main-gradient': 'linear-gradient(to bottom, #030014, #0a0a2e)',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}

