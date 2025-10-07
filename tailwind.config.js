/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                gold: "#f4ddca",
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
                sans: ['"Lora"', "serif"],
                body: ['"Nunito Sans"', "sans-serif"],
            },
        },
    },
    plugins: [],
};
