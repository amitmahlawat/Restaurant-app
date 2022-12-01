import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import React, { useContext } from "react";
import CartCnxt from "../../store/cart-context";

const Cart = (props) => {
  const Cartcntxt = useContext(CartCnxt);
  const CartItems = (
    <ul className={classes["cart-items"]}>
      {Cartcntxt.items.map((item) => (
        <li>
          Name: {item.name} Price:{item.price} quantity:{item.quantity}
        </li>
      ))}
    </ul>
  );
  let totalAmount = 0;
  Cartcntxt.items.forEach((item) => {
    totalAmount = totalAmount + item.price * item.quantity;
    // console.log(totalAmount)
  });
  return (
    <Modal onClose={props.onClose}>
      {CartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
