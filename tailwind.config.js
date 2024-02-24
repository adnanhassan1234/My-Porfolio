module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "Poppins",
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }
        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
        "2xl": { max: "1750px" },
        // => @media (max-width: 1750px) { ... }
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        "1xl": { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        "2lg": { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        "2md": { max: "767px" },
        // => @media (max-width: 767px) { ... }

        "2sm": { max: "639px" },
        // => @media (max-width: 639px) { ... }
        "3sm": { max: "459px" },
        // => @media (max-width: 459px) { ... }
      },
    },
  },
  plugins: [],
};
