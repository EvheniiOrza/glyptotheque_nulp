/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                gold: "#C5A572",
                black: "#0D0D0D",
                white: "#F5F5F5",
                gray: {
                    100: "#EDEDED",
                    300: "#BEBEBE",
                    500: "#6F6F6F",
                    800: "#2A2A2A",
                },
            },
            fontFamily: {
                sans: ['"Playfair Display"', "serif"],
                body: ['"Inter"', "sans-serif"],
            },
        },
    },
    plugins: [],
}
