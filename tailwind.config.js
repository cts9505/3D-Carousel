/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'forma-djr-mono': ['forma-djr-mono', 'monospace', 'sans-serif'],
            },
            colors: {
                'text': '#fff',
                'bg': '#0f0e0e',
                'link': '#ffffff',
                'link-hover': 'rgba(255, 255, 255, 0.6)',
            }
        },
    },
    plugins: [],
}
