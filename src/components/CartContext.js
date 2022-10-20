import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider(props) {
  const [items, setItems] = useState([]);
  const addToCart = (name, price, image, id ) => {
    setItems((prev) => [...prev, { name, price, image, id }]);
  };

 
 
  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));

  };


  return (
    <CartContext.Provider value={{ items, addToCart, setItems, handleDelete}}>
      {props.children}
    </CartContext.Provider>
  );
}
export default CartContext;
