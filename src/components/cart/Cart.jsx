import React, { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import EmptyCartImg from "../../assets/images/emptycart.png";
import { Link } from "react-router-dom";
import {
  getTotalAmount,
  removeFromCart,
  updateCart,
} from "../../store/slices/CartSlice";

function Cart() {
  const dispatch = useDispatch();
  const { cartItems, cartAmount } = useSelector((state) => {
    return state.cart;
  });
  useEffect(() => {
    dispatch(getTotalAmount());
  }, [cartItems, dispatch]);
  const [cart, setCart] = useState(cartItems);
  useEffect(() => {
    setCart(cartItems);
  }, [cartItems]);
  return (
    <div className={styles.cart}>
      {cartItems.length != 0 ? (
        <div className={styles.cartItems}>
          <ul className={styles.cartHead}>
            <li>SNO</li>
            <li>PRODUCT</li>
            <li>QUANTITY</li>
            <li>DELETE</li>
            <li>SUBTOTAL</li>
          </ul>
          {cartItems &&
            cartItems.map((i, idx) => (
              <div className={styles.cartItem} key={idx}>
                <h3>{idx + 1}</h3>
                <figure className={styles.cartItemDetails}>
                  <img src={i.image} alt="" />
                  <figcaption>
                    <h3>{i.name}</h3>
                    <p>Category: {i.category}</p>
                    <p>Price: ₹{i.price}</p>
                  </figcaption>
                </figure>
                <span className={styles.changeQuantity}>
                  <button
                    onClick={() =>
                      dispatch(updateCart({ operation: "decrement", id: i.id }))
                    }
                  >
                    -
                  </button>
                  <p>{i.cartQuantity}</p>
                  <button
                    onClick={() =>
                      dispatch(updateCart({ operation: "increment", id: i.id }))
                    }
                  >
                    +
                  </button>
                </span>
                <span
                  className={styles.removeItem}
                  onClick={() => {
                    dispatch(removeFromCart({ id: i.id }));
                  }}
                >
                  Remove Item&nbsp;
                  <RiDeleteBin6Line />
                </span>
                <p>
                  <strong>₹ {i.price * i.cartQuantity}</strong>
                </p>
              </div>
            ))}
          <div className={styles.subtotal}>
            <strong>Total Amount:&nbsp;&nbsp;₹ {cartAmount}</strong>
          </div>
          <div className={styles.checkOutBtn}>
            <Link to="/shippingDetails">CHECK OUT</Link>
          </div>
        </div>
      ) : (
        <div className={styles.emptyCart}>
          <div>
            <h1>Your Cart is Empty</h1>
          </div>
          <div className={styles.emptyCartImg}>
            <img src={EmptyCartImg} alt="" loading="lazy" />
          </div>
          <div>
            <Link to="/products" className={styles.continueBtn}>
              BACK TO SHOPPING
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
