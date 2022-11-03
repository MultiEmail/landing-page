/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "media",
    content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            sans: ["Inter", "sans-serif"],
            poppins: ["Poppins", "sans-serif"],
        },
        extend: {
            animation: {
                "ping-once": "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite",
                // Cool ass animations list
                // https://animate.style/
            },
        },
    },
    plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
