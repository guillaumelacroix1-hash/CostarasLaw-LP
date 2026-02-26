/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#0A192F", // Navy Blue
                secondary: "#D4AF37", // Gold
                "background-light": "#F9FBFD", // Soft off-white
                "background-dark": "#0A1016", // Dark blue-black for dark mode
                "surface-light": "#FFFFFF",
                "surface-dark": "#16202A",
                "text-main-light": "#0A192F",
                "text-main-dark": "#E2E8F0",
                "text-muted-light": "#4A5568",
                "text-muted-dark": "#94A3B8",
            },
            fontFamily: {
                display: ["'Playfair Display'", "serif"],
                body: ["'Inter'", "sans-serif"],
            },
            borderRadius: {
                DEFAULT: "0.5rem",
                'xl': '1rem',
                '2xl': '1.5rem',
            },
        },
    },
    plugins: [],
}
