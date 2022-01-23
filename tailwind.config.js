module.exports = {
  content: ["src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ["active", "hover", "focus"],
      textColor: ["active", "hover", "focus"],
      space: ["active", "hover", "focus"],
      borderRadius: ["active", "hover", "focus"],
      animateSpin: ["active", "hover", "focus"],
    },
  },
  plugins: [],
};
