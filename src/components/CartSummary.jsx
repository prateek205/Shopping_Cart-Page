import React from "react";
import "../styles/cartSummary.css";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartSummary = () => {
  const {
    mainPrice,
    discountPrice,
    totalDiscount,
    subTotalPrice,
    shippingPrice,
    finalAmount,
  } = useCart();

  return (
    <React.Fragment>
      <div className="summaryCard">
        <div className="sTitle">
          <h3>Cart Summary</h3>
        </div>
        <hr />
        <div className="summaryDetail">
          <div className="summaryHeading">
            <div className="sMainPrice">
              <span>Price </span>
            </div>
            <div className="sDiscountPrice">
              <span>Discount </span>
            </div>
            <div className="sSubtotalPrice">
              <span>Discount Price </span>
            </div>
            <div className="sShippingFee">
              <span>Delivery Charges </span>
            </div>
          </div>
          <div className="summaryPrice">
            <div className="sMainPrice">
              <span>&#8377;{mainPrice}</span>
            </div>
            <div className="sDiscountAmt">
              <span>({totalDiscount}%) &#8377;{discountPrice}</span>
            </div>
            <div className="sMainPrice">
              <span>&#8377;{subTotalPrice}</span>
            </div>
            <div className="sShippingPrice">
              <span>{shippingPrice === 0 ? "Free" : `${shippingPrice}`}</span>
            </div>
          </div>
        </div>
        <hr />
        <div className="sTotalPriceSection">
          <div className="sTotalPrice">
            <span>Total Price </span>
          </div>
          <div className="sTotal">
            <span>&#8377;{finalAmount}</span>
          </div>
        </div>
      </div>
      <Link to="/checkout" style={{textDecoration:"none"}}>
      <div className="checkOut">
        <button className="checkBtn">CheckOut</button>
      </div>
      </Link>
    </React.Fragment>
  );
};

export default CartSummary;
