import React, { useState } from "react";
import "../styles/checkout.css";
import { useCart } from "../context/CartContext";
import { useDiscountPrice } from "../context/DiscountPriceContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const initialState = {
    name: "",
    address: "",
    city: "",
    zipCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  };

  const [form, setForm] = useState(initialState);
  const {
    cart,
    setCart,
    discountPrice,
    subTotalPrice,
    shippingPrice,
    finalAmount,
    totalDiscount,
  } = useCart();

  const navigate = useNavigate();
  const { getDiscountPrice } = useDiscountPrice();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOrderId =
      "ORD" + "-" + Math.round(1000 + Math.random() * 90000) + "-" + Date.now();
    localStorage.setItem("orderId", newOrderId);
    navigate(`/orderConfirm?${newOrderId}`, { state: { newOrderId } });
    setCart([]);
  };

  return (
    <React.Fragment>
      <div className="checkContainer">
        <div className="checkoutHeading">
          <h2>Checkout</h2>
        </div>

        <div className="summarySection">
          <div className="checkTitle">
            <p>Cart Summary</p>
          </div>
          <div className="summaryList">
            {cart.map((item) => {
              return (
                <div className="checkPrice" key={item.id}>
                  <span>
                    <p>{item.model}</p>
                    <p>
                      {item.quantity}x &#8377;
                      {getDiscountPrice(item.price, item.discount)}
                    </p>
                  </span>
                </div>
              );
            })}
            <div className="checkPrice">
              <span>
                <p>Discount</p>
                <p className="discount">
                  ({totalDiscount}%) &#8377;{discountPrice}
                </p>
              </span>
              <span>
                <p>Discount Price</p>
                <p>&#8377;{subTotalPrice}</p>
              </span>
            </div>
          </div>
        </div>

        <form className="shipmentSection" onSubmit={handleSubmit}>
          <div className="contactSection">
            <div className="contactTitle">
              <p>Shipping Information</p>
            </div>
            <div className="form">
              <input
                type="text"
                placeholder="Enter Full Name"
                name="name"
                value={form.name}
                required
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Address"
                name="address"
                value={form.address}
                required
                onChange={handleChange}
              />
              <span className="czInfo">
                <input
                  type="text"
                  placeholder="City"
                  name="city"
                  value={form.city}
                  required
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Zip Code"
                  name="zipCode"
                  value={form.zipCode}
                  required
                  onChange={handleChange}
                />
              </span>
              <span>
                <p>Country:</p>
                <select name="" id="">
                  <option value="" disabled>
                    Country
                  </option>
                  <option value="">Select</option>
                  <option value="">India</option>
                  <option value="">Other</option>
                </select>
              </span>
            </div>
          </div>

          <div className="paymentSection">
            <div className="paymentTitle">
              <p>Payment Information</p>
            </div>
            <div className="form">
              <input
                type="text"
                placeholder="1234-5678-9101-XXXX"
                name="cardNumber"
                value={form.cardNumber}
                required
                maxLength={16}
                onChange={handleChange}
              />
              <span className="cardDetails">
                <input
                  type="text"
                  placeholder="Expiry Date"
                  name="expiryDate"
                  value={form.expiryDate}
                  required
                  onChange={handleChange}
                />
                <input
                  type="password"
                  placeholder="CVV"
                  name="cvv"
                  value={form.cvv}
                  required
                  maxLength={3}
                  onChange={handleChange}
                />
              </span>

              <div className="placeOrderBtn">
                <button className="orderBtn" type="submit">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </form>

        <div className="orderSummarySection">
          <div className="orderTitle">
            <p>Order Summary</p>
          </div>
          <div className="orderDetails">
            <span>
              <p>Shipping</p>
              <p>&#8377;{shippingPrice}</p>
            </span>
          </div>
          <div className="orderDetails">
            <span>
              <p>Total</p>
              <p>&#8377;{finalAmount}</p>
            </span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Checkout;
