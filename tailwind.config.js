/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      "banner-img":
        "url('https://live.staticflickr.com/2500/3711782753_8123b71233_z.jpg')",
    },
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],
};
