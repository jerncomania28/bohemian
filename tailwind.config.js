/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "shop-whats-new": "url('assets/shop-whats-new.webp')",
        "shop-loungewear": "url('assets/shop-loungewear.webp')",
        "shop-prints": "url('assets/shop-prints.webp')",
        "shop-dresses": "url('assets/shop-dresses.webp')",
      },
    },
  },
  plugins: [],
};
