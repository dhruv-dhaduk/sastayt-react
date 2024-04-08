/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            spacing: {
                '12ch': '12ch',
                'feed-min-w': '20rem',
                'iframe-w-md': 'calc(100% - 7rem)',
                'iframe-left-md': '5.5rem',
                'player-info-margin-md': 'calc(((100% - 4rem) * 9 / 16) + 1rem)',
                'player-info-margin-sm': 'calc((100% * 9 / 16) + 1rem)'
            },
            gridTemplateColumns: {
                'feed': 'repeat(auto-fit, minmax(20rem, 1fr))'
            },
            colors: {
                'loading-card': '#2c2c2c'
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
