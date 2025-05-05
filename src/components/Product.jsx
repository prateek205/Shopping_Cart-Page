import React from "react";
import "../styles/product.css";
import { useProduct } from "../context/ProductContext";
import { useCart } from "../context/CartContext";
import { useDiscountPrice } from "../context/DiscountPriceContext";
import { useWishList } from "../context/WishListContext";

const Product = () => {
  const { product } = useProduct();
  const { AddToCart } = useCart();
  const { getDiscountPrice } = useDiscountPrice();
  const { wishList, AddWishList } = useWishList();

  if (!product) {
    return (
      <div className="productload">
        <p>Product Loading....</p>
      </div>
    );
  }

  return (
    <React.Fragment>
      <div className="prodContainer">
        {product.map((item) => (
          <div key={item.id} className="prodCard">
            <button className="wishList" onClick={() => AddWishList(item)}>
              <i
                className="fa-solid fa-heart hearts"
                style={{
                  color: `${
                    wishList.some((i) => i.id === item.id) ? "red" : "grey"
                  }`,
                }}
              ></i>
            </button>
            <div className="cardImg">
              <img src={item.images} alt="image" />
            </div>
            <div className="cardTitle">
              <h4 className="cTitle">{item.title.slice(0, 61)}...</h4>
            </div>
            <div className="cardDetail">
              <div className="cDiscountPrice">
                <p>&#8377;{getDiscountPrice(item.price, item.discount)}/-</p>
              </div>
              <div className="cOriginalPrice">
                <p>&#8377;{item.price}/-</p>
              </div>
              <div className="cDiscount">
                <p>{item.discount}%Off</p>
              </div>
            </div>
            <div className="cardbtn">
              <button
                className="addBtn"
                onClick={() => {
                  AddToCart(item);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Product;
