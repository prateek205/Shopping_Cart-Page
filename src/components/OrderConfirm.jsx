import React, { useEffect, useState } from "react";
import "../styles/orderConfirm.css";
import { Link, useLocation } from "react-router-dom";

const OrderConfirm = () => {
  const location = useLocation();
  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    const stateOrderId = location.state?.newOrderId;
    const savedId = localStorage.getItem("newOrderId");

    if (stateOrderId) {
      setOrderId(stateOrderId);
    } else if (savedId) {
      setOrderId(savedId);
    }
  }, []);

  return (
    <React.Fragment>
      <div className="oContainer">
        <div className="oTitle">
          <span>
            <h1>✅Order Successfull !!! </h1>
          </span>
        </div>
        <div className="oOrderId">
          {orderId && (
            <p>
              OrderId: <span>{orderId}</span>
            </p>
          )}
          <p>Your Order will be Delivery Soon</p>
        </div>
        <div className="oMessage">
          <p>Thank you for Shopping with us!!!</p>
        </div>
        <Link to="/">
          <div className="oBtn">
            <button>Back to Home</button>
          </div>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default OrderConfirm;
