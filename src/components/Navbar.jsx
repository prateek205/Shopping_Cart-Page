import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishList } from "../context/WishListContext";

const Navbar = () => {
  const { cart } = useCart();
  const {wishList} = useWishList()

  const totalItem = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <React.Fragment>
      <div className="navContainer">
        <div className="navLogo">
          <h2 className="navheading">
            <Link to="/">e-shop</Link>
          </h2>
        </div>
        <ul className="navList">
          <li className="navItem">
            <Link to="/wishList">
              <i className="fa-solid fa-heart counter"></i>{" "}
              <span className="wishCount">{wishList.length}</span>{" "}
            </Link>
          </li>
          <li className="navItem">
            <Link to="/cart">
              <i className="fa-solid fa-cart-shopping bag"></i>{" "}
              <span className="cartCount">{totalItem}</span>{" "}
            </Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
