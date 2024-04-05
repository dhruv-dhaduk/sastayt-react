/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            spacing: {
                '12ch': '12ch'
            }
        },
        screens: {
            'sm': '0px',
            'md': '420px',
            'lg': '840px',
            'xl': '1440px',
            '2xl': '1740px'
        },
        fontSize: {
            'vsm': '0.65rem'
        },
    },
    plugins: [],
};
