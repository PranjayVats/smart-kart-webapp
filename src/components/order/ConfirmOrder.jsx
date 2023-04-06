import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getTotalAmount } from "../../store/slices/CartSlice";
import styles from "./ConfirmOrder.module.css";

function ConfirmOrder() {
  const dispatch = useDispatch();
  dispatch(getTotalAmount());

  const { cartItems, cartAmount } = useSelector((state) => {
    return state.cart;
  });
  let shippingCharge = 0;
  if (cartAmount <= 499) shippingCharge = 40;
  const total = cartAmount + shippingCharge;
  const location = useLocation();
  const shippingInfo = location.state;
  return (
    <div className={styles.confirmOrderPage}>
      <div className={styles.shippingCart}>
        <div className={styles.shippingDetails}>
          <h2>Shipping Details</h2>
          <span>
            Name: <strong>{shippingInfo.recipientName}</strong>
          </span>
          <span>
            Phone Number:<strong> {shippingInfo.phoneNumber}</strong>
          </span>
          <span>
            Address: <strong>{shippingInfo.address}</strong>
          </span>
          <span>
            Pin Code: <strong>{shippingInfo.pincode}</strong>
          </span>{" "}
          <span>
            City: <strong>{shippingInfo.city}</strong>
          </span>
          <span>
            State: <strong>{shippingInfo.state}</strong>
          </span>
          <span>
            Country: <strong>{shippingInfo.country}</strong>
          </span>
        </div>
        <div className={styles.cartItemsDetails}>
          <h2>Your Cart Items</h2>
          <div className={styles.cartItemsList}>
            {cartItems &&
              cartItems.map((i, idx) => (
                <div className={styles.cartItem} key={idx}>
                  <figure className={styles.cartItemDetails}>
                    <img src={i.image} alt="" />
                    <figcaption>{i.name}</figcaption>
                  </figure>
                  <p>
                    {i.cartQuantity} x ₹{i.price}&nbsp;=&nbsp;
                    <strong>₹ {i.price * i.cartQuantity}</strong>
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className={styles.orderSummary}>
        <h2>Order Summary</h2>
        <div className={styles.confirmOrder}>
          <span>
            <span>Subtotal: </span>
            <span>₹{cartAmount}</span>
          </span>
          <span>
            <span>Shipping Charges:</span>
            <span>₹ {shippingCharge}</span>
          </span>
        </div>
        <span>
          <span>
            <strong>Total:</strong>
          </span>
          <span>
            <strong>₹ {total}</strong>
          </span>{" "}
        </span>
        <Link to="/shippingDetails" className={styles.paymentBtn}>Proceed To Payment</Link>
      </div>
    </div>
  );
}

export default ConfirmOrder;
