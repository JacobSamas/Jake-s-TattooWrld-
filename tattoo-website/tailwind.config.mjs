/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6", // Blue
        secondary: "#F59E0B", // Amber
        accent: "#10B981", // Green
        background: "#F3F4F6", // Light Gray
        textPrimary: "#1F2937", // Dark Gray
        textSecondary: "#4B5563", // Medium Gray
    },
    },
  },
  plugins: [],
};
