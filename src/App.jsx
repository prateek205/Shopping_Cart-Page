import React from "react";
import "./index.css";
import Product from "./components/product";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WishList from "./components/WishList";
import { ToastContainer } from "react-toastify";
import Checkout from "./components/Checkout";
import OrderConfirm from "./components/OrderConfirm";

function App() {

  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element=<Product /> />
          <Route path="/wishList" element=<WishList /> />
          <Route path="/cart" element=<Cart /> />
          <Route path="/checkout" element=<Checkout/>/>
          <Route path="/orderConfirm" element=<OrderConfirm/>/>
        </Routes>
      </Router>
          <ToastContainer
            position="top-center"
            autoClose={800}
            theme="dark"
          />
    </React.Fragment>
  );
}

export default App;
