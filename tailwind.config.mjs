/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      animation: {
        shine: 'shine 2s infinite',
      },
      keyframes: {
        shine: {
          '0%': { textShadow: '0 0 10px rgba(255,255,255,0.7)' },
          '50%': { textShadow: '0 0 20px rgba(255,255,255,1)' },
          '100%': { textShadow: '0 0 10px rgba(255,255,255,0.7)' },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
