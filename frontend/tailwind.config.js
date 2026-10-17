/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['DM Sans', 'sans-serif'],
                display: ['Barlow Condensed', 'sans-serif'],
            },
            colors: {
                primary: '#B7F34A',
                secondary: '#161817',
                accent: '#FF7A45',
                muted: '#A8AAA3',
                background: '#191B1A',
                surface: '#242725',
                text: '#F4F1E9',
            },
        },
    },
    plugins: [],
}
