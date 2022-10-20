import React from "react";
import "./Nav.css";
import { Link, useLocation } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Checkout from "./Checkout";
import { useState, useContext } from "react";
import ReorderIcon from "@mui/icons-material/Reorder";

import CartContext from "./CartContext";
import { useEffect } from "react";

const Nav = () => {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation()
  useEffect(() => {
    setExpandNavbar(false)
  },[location] )

  const { items } = useContext(CartContext);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="left-nav">
        <h1 className="bvcr">BVCR GYM</h1>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
        <Link to="/checkout">
          <div className="count-counter">
            <ShoppingCartIcon className="cart-icon" />
            <p className="item-count">{items.length}</p>
          </div>
        </Link>
      </div>
      <button
        className="reorder-btn"
        onClick={() => setExpandNavbar((prev) => !prev)}
      >
        <ReorderIcon />
      </button>
    </div>
  );
};

export default Nav;
