module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#161616",
      secondary: "#262626",
      tertiary: "#0016D9",
      white: "#ffffff",
      black: "#000000",
    }),

    // padding: {
    //   sm: '8px',
    //   md: '16px',
    //   lg: '24px',
    //   xl: '48px',
    //   br:'132px'
    //  },

    colors: {
      // Configure your color palette here

      primary: "#161616",
      secondary: "#262626",
      tertiary: "#0016D9",
      white: "#ffffff",
      black: "#000000",
    },
    fontFamily: {
      serif: ["poppins"],
    },
  },
  variants: {
    backgroundColor: ["active"],
    width: ["responsive", "hover", "focus"],
    transitionProperty: ["responsive", "motion-safe", "motion-reduce"],
    extend: {
      opacity: ["disabled"],
    },
  },
  plugins: [],
};
