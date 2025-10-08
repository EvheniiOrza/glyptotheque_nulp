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
                gold: "#f4ecdf", // amber-600 для кнопок
                black: "#000000", // чорний для тексту
                white: "#F5F5F5",
                gray: {
                    100: "#ffffff", // основний фон
                    300: "#d1d5db",
                    500: "#6B7280",
                    800: "#1F2937",
                },
            },
            fontFamily: {
                sans: ['"DXgrafic SemiBold"', "sans-serif"],
                body: ['"MursGotic - KeyRegular"', "sans-serif"],
                display: ['"MursGotic - MassiveDemi"', "sans-serif"],
            },
            backgroundColor: {
                DEFAULT: "#ffffff", // основний бекграунд
            }
        },
    },
    plugins: [],
};