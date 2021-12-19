import React from "react";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";

const Cart = () => {
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {[
        {
          id: 1,
          name: "Pizza",
          price: 10.99,
          amount: 1,
        },
      ].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount:</span>
        <span>$10.99</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']}>Close</button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
