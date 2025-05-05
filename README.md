# 🛒 Shopping Cart Application with Responsive (ContextAPI)
This is a full-featured Shopping-cart web application built with **React + Vite**. It utilizes multiple **context providers** to manage product data, cart functionality, wishlist, and discounts efficiently.

## 🚀 Features
- 🛍 Product Listing.
- ❤️ WishList Manage.
- 🛒 Cart Functionality.
- 🎟 Discount Handling.
- 📦 Provider Structure with ContextAPI.
- 💡 Clean and Maintainable Code with Components.

## 🧱 Tech Stack
- **React.js** + Vite.
- **ContextAPI** for global state management.
- **JavaScript**
- **CSS** for Styling Purpose.
- **Media Query** Responsive for Small Devices.

## 📸 Screenshots
#### 1. Cart.jsx
![Screenshot](https://github.com/prateek205/Shopping_Cart-Page/blob/19cdb1031a70ae9b67ba8a0295e04eeb95160214/public/images/screenshot/cartSummary.png)

#### 2. WishList.jsx
![Screenshot](https://github.com/prateek205/Shopping_Cart-Page/blob/19cdb1031a70ae9b67ba8a0295e04eeb95160214/public/images/screenshot/wishList.png)

#### 3. Checkout.jsx
![Screenshot](https://github.com/prateek205/Shopping_Cart-Page/blob/19cdb1031a70ae9b67ba8a0295e04eeb95160214/public/images/screenshot/checkout.png)

## 📽️ Demo
Here you can see Demo: https://shoppingcart-page-git-main-prateek205s-projects.vercel.app/ 

## 💻 Example of Code using Context Provider
#### Main.jsx
```
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ProductProvider } from "./context/ProductContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { DiscountProvider } from "./context/DiscountPriceContext.jsx";
import { WishListProvider } from "./context/WishListContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductProvider>
      <WishListProvider>
        <CartProvider>
          <DiscountProvider>
            <App />
          </DiscountProvider>
        </CartProvider>
      </WishListProvider>
    </ProductProvider>
  </StrictMode>
);
```

## 🛠️ Setup Installation 
#### 1. **Clone Repository**
```
git clone https://github.com/prateek205/Shopping_Cart-Page.git
cd shopping_cart-page
```
#### 2. **Install Dependencies**
```
npm install
or
yarn install
```
#### 3. **Run the App**
```
npm run dev
or
yarn dev
```

## ✅ To Do
- Authentication Login/Signup
- Payment Integration
- Backend API(Express, MongoDB or Firebase)

## 📦 Deployment
- Github-page.
- Vercel.
- Render.
- Netlify.

## 📂 Folder Structure
```
├── Shopping_Cart-page
├── public/
│   └── Images  
├── src/
│   ├── Assets
│   ├── Components
│   ├── Context
│   ├── Style
│   ├── App.jsx
│   ├── index.css
│   └── Main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

