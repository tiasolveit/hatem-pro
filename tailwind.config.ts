import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            animation: {
                'spin-slow': 'spin 8s linear infinite',
                'spin-slow-reverse': 'spin 8s linear infinite reverse',
                'float': 'float 6s ease-in-out infinite',
            },
        },
    },
    plugins: [],
}
export default config