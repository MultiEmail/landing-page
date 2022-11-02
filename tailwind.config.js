/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "media",
    content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            sans: ["Inter", "sans-serif"],
            poppins: ["Poppins", "sans-serif"],
        },
        extend: {},
    },
    plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
