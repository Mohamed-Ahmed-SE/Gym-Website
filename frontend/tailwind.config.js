/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Bebas Neue', 'sans-serif'],
            },
            colors: {
                primary: '#E11D48', // heavy red/pinkish for gym brand
                secondary: '#0F172A', // slate-900
                accent: '#22C55E', // green-500
                muted: '#94A3B8', // slate-400
                background: '#020617', // slate-950
                surface: '#1E293B', // slate-800
                text: '#F8FAFC', // slate-50
            },
        },
    },
    plugins: [],
}
