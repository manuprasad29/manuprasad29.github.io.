import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://641977fcc152063412c2b21c.mockapi.io/ecom")
      .then((res) => setproducts(res.data));
  }, []);

  const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < products.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };  

  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  console.log(cartItems);

  const contextValue = {
    addToCart,
    cartItems,
    setCartItems,
    products,
    setproducts,
    removeFromCart
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
