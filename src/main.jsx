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
