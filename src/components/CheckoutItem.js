import React, { useContext } from "react";
import CartContext from "./CartContext";

const CheckoutItem = ({ name, price, item, id }) => {
  const { handleDelete, items } = useContext(CartContext);
  console.log(items.length);
  return (
    <div>
      <p id={id} className="checkout-window">
        {name} ${price}
        <button onClick={() => handleDelete(item.id)} className="check-btn">
          Delete
        </button>
      </p>
    </div>
  );
};

export default CheckoutItem;
