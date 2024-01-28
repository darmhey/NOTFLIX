/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        'background': '#0E1623',
        'background-light': '#1F2937',
        'accent': '#808CF8',
        'neutral': '#D9DCF6',
        
      },
      maxWidth: {
        'xxxl': '90rem',
      },
      gridTemplateColumns: {
        'template': 'minmax(0, 1fr) minmax(0, 90rem) minmax(0, 1fr)',
      },
    },
  },
  
  plugins: [],
}

