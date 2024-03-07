/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        bgPrimary: "var(--bg-primary)",
        textColor: "var(--text-color)",
        textColorTwo: "var(--text-color-two)",
        bgSecondary: "var(--bg-secondary)",
        cardBackground: "var(--card-background)",
        bgSecondaryTwo: "var(--bg-secondary-two)",
      },
      boxShadow: {
        navbar: "var(--shadow)",
        projectCard: "inset 0 100px 1000px 10px rgba(0, 0, 0, 0.8)",
      },
      transitionTimingFunction: {
        themeToggle: "cubic-bezier(0.23, 1, 0.32, 1)",
      },
    },
  },
  plugins: [],
};
