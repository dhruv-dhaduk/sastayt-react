/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            spacing: {
                '12ch': '12ch'
            },
            gridTemplateColumns: {
                'feed': 'repeat(auto-fit, minmax(22rem, 1fr))'
            }
        },
        screens: {
            'sm': '0px',
            'md': '420px',
            'lg': '780px',
            'xl': '1280px',
            '2xl': '1740px'
        }
    },
    plugins: [],
};
