import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "#ec2332",
        "secondary" : "#d9d9d9",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundColor: {
        "primary" : "#ec2332",
        "secondary" : "#d9d9d9",
      },
      backgroundImage : {
        "banner" : "url('/assets/contact.png')"
      },
      screens : {
        xs : '350px'
      }
    },
  },
  plugins: [],
} satisfies Config;
