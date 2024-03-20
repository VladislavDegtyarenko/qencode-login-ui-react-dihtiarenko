/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "hsla(210, 12%, 77%, 1)",
        accent: "hsla(220, 81%, 55%, 1)",
        "accent-hovered": "#265cc5",
      },
    },
  },
  plugins: [],
};
