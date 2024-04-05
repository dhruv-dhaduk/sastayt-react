/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
        screens: {
            'sm': '0px',
            'md': '420px',
            'lg': '840px',
            'xl': '1440px',
            '2xl': '1740px'
        }
    },
    plugins: [],
};
