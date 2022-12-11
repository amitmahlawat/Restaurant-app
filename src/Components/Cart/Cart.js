import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import React, { useContext } from "react";
import CartCnxt from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const Cartcntxt = useContext(CartCnxt);

  const cartItemAddHandler = (item) => {
    Cartcntxt.addItem(item)
    
  };

  const cartItemRemoveHandler = (item) => {
   Cartcntxt.removeItem(item)
  };

  
  const CartItems = (
    <ul className={classes["cart-items"]}>
      {Cartcntxt.items.map((item) => (
      item.quantity>0 &&  <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          quantity={item.quantity}
          onRemove={cartItemRemoveHandler.bind(null, item)}
          onAdd={cartItemAddHandler.bind(null, {...item, quantity: 1})}
        />
      ))}
    </ul>
  );
  const hasItems = Cartcntxt.items.length > 0;

  

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
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
