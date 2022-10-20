import React from "react";
import MenuItem from "./MenuItem";
import { ShopList } from "./ShopList";
import "./Shop.css"


const Shop = () => {
 

  return (
    <div className="shop">
    <div className="shop-list">
      {ShopList.map((item,key) => {
        return (
          <MenuItem 
          key= {key}
          item = {item}
          id={item.id}
          name={item.name} 
          price={item.price} 
          image={item.image} 
      />
        );
      })}
    </div>
    </div>
  );
};

export default Shop;
