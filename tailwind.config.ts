import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': "#FFFFFF",
        "orange": "#F48F56",
        "light-green": '#9FF9CC',
        "dark-green": '#00292E',
        "light-gray-title": '#E1E1E6',
        "dark-gray": "#C4C4CC",
        "bg-black": '#121214',
        "transparent": 'transparent',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
export default config
