import React, { useContext } from "react";

import CartContext from "./CartContext";
import "./MenuItem.css";

const MenuItem = ({ name, image, price, id }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="menuItem">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="img-div"
      ></div>
      <h3>{name}</h3>
      <p>${price}</p>
      <button
        onClick={() => addToCart(name, price, image, id)}
        className="btn-shop"
      >
        Add to cart
      </button>
    </div>
  );
};

export default MenuItem;
