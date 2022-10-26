import React, { useContext, useState, useEffect } from "react";
import "./Checkout.css";
import CartContext from "./CartContext";
import CheckoutItem from "./CheckoutItem";

const Checkout = () => {
  const { items } = useContext(CartContext);
  const [total, addTotal] = useState(0);

  useEffect(() => {}, []);

  const setTotal = () => {
    addTotal(
      items.reduce((prev, curr) => {
        return prev + curr.price;
      }, 0)
    );
  };
  return (
    <div className="checkout">
      <div className="container">
        <div className="shopping-cart-left">
          <h2>Shopping cart</h2>
          <p>Store /Shopping Cart</p>

          <h2>
            {items.map((item, key) => {
              return (
                // <li key={item.id}>{item.name} {item.price}  <button onClick={() =>handleDelete (item.id)}>delete</button></li>
                <CheckoutItem
                  item={item}
                  key={key}
                  name={item.name}
                  price={item.price}
                  id={item.id}
                />
              );
            })}
          </h2>
          {items.length === 0 ? (
            <p
              className="empty-list"
              style={{ color: "red", fontWeight: "bold" }}
            >
              Your list is empty
            </p>
          ) : null}
          <h2>Total: ${total ? total : 0}</h2>
          <button onClick={() => setTotal()}>check total</button>
        </div>
        <div className="shopping-cart-right">
          <h1>Checkout</h1>
          <p>
            Enter your email address. This address will be used to send you
            order status updates.
          </p>
          <input
            type="text"
            placeholder="Your email address"
            className="input"
          />
          <button className="btn">Checkout</button>
          <h4>Next</h4>
          <hr />
          <p>Payment information</p>

          <p>Choose a payment method and enter your payment details.</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
