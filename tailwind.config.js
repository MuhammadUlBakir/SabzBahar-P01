/** @type {import('tailwindcss').Config} */
export default {
  content: [
    
    "./src/UserAuthentiaction/**/*.{js,ts,jsx,tsx}",
    "./src/Product/*.{js,ts,jsx,tsx}",
    // "./src/Product/product_page/Product_page.{js,ts,jsx,tsx}",
    "./src/Product/product_page/**/*.{js,ts,jsx,tsx}",
    // "./src/Product/product_details/Product_details.jsx",
    // "./src/Product/product_details/Product_tabs.jsx",
    "./src/Product/product_details/Image_thumbnail.{js,ts,jsx,tsx}",
    "./src/Product/Product_page/*.{js,ts,jsx,tsx}",
    "./src/nav_component/wishlist/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      boxShadow: {
        '3m': 'rgba(0, 0, 0, 0.1) 0px 4px 12px;',
      }
    },
  },
  plugins: [],
}

