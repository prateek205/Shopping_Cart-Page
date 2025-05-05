import React, { useEffect } from "react";
import "../styles/wishList.css";
import { useWishList } from "../context/WishListContext";
import { Link } from "react-router-dom";
import { useDiscountPrice } from "../context/DiscountPriceContext";
import { useCart } from "../context/CartContext";

const WishList = () => {
  const { wishList, removeItem } = useWishList();
  const { getDiscountPrice } = useDiscountPrice();
  const { AddToCart } = useCart();
  

  return (
    <React.Fragment>
      {wishList.length === 0 ? (
        <div className="wishNoItem">
          <p>No Item in WishList</p>
          <Link to="/">
            <button className="shopbtn">Shop Now</button>
          </Link>
        </div>
      ) : (
        <div className="wishListContainer">
          {wishList.map((item) => {
            return (
              <div key={item.id} className="wishCard">
                <div className="wImg">
                  <img src={item.images} alt="" />
                </div>
                <div className="wDetail">
                  <div className="wTitle">
                    <h3>{item.title}</h3>
                  </div>
                  <div className="wPriceDetail">
                    <div className="wDiscountPrice">
                      <p>
                        &#8377;{getDiscountPrice(item.price, item.discount)}
                      </p>
                    </div>
                    <div className="wDiscount">
                      <p>{item.discount}%off</p>
                    </div>
                  </div>
                  <div className="wOriginalPrice">
                    <p>&#8377;{item.price}</p>
                  </div>
                  <div className="btnDetails">
                    <div className="removeBtn">
                      <button
                        className="btn"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                    <div className="removeBtn">
                      <button className="btn" onClick={() => AddToCart(item)}>
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </React.Fragment>
  );
};

export default WishList;
