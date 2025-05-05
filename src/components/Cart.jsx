import React from "react";
import "../styles/cart.css";
import CartSummary from "../components/CartSummary";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { useDiscountPrice } from "../context/DiscountPriceContext";

const Cart = () => {
  const { cart, incrementQty, decrementQty, removeItem } = useCart();
  const { getDiscountPrice } = useDiscountPrice();

  return (
    <React.Fragment>
      {cart.length === 0 ? (
        <div className="cartEmptyContainer">
          <p>Your Cart is Empty now.</p>
          <Link to="/">
            <button className="shopBtn">Shop Now</button>
          </Link>
        </div>
      ) : (
        <div className="mainCartContainer">
          <div className="cartContainer">
            {cart.map((item) => {
              return (
                <div key={item.id} className="cCard">
                  <div className="cImage">
                    <img src={item.images} alt="Images" />
                  </div>
                  <div className="CardInfo">
                    <div className="CartDetail">
                      <div className="cartTitle">
                        <h3 className="title">{item.title.slice(0, 200)}</h3>
                      </div>
                      <div className="cartPriceDetail">
                        <div className="cartDiscountPrice">
                          <p>
                            &#8377;{getDiscountPrice(item.price, item.discount)}
                            /-
                          </p>
                        </div>
                        <div className="cartOriginalPrice">
                          <p>&#8377;{item.price}/-</p>
                        </div>
                        <div className="cartDiscount">
                          <p>{item.discount}%off</p>
                        </div>
                      </div>

                      <div className="removeIncDecBtn">
                        <div className="cQuantityDetail">
                          <button
                            className="btn incBtn"
                            onClick={() => {
                              incrementQty(item.id);
                            }}
                          >
                            <i className="fa fa-plus"></i>
                          </button>
                          <span className="input">{item.quantity}</span>
                          <button
                            className="btn decBtn"
                            onClick={() => {
                              decrementQty(item.id);
                            }}
                          >
                            <i className="fa fa-minus"></i>
                          </button>
                        </div>
                        <div className="cRemoveDetail">
                          <button
                            className="remBtn"
                            onClick={() => {
                              removeItem(item.id);
                            }}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cartSummaryContainer">
            <CartSummary />
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Cart;
