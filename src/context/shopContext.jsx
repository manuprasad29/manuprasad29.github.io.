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
    for (let i = 1; i < 20 + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find((product) => product.id === (item));
        totalAmount += cartItems[item] * itemInfo.price;
        console.log(itemInfo.price);
      }
    }
    return totalAmount;
  };



  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount=(newAmount,itemId)=>{
    console.log(itemId);
    setCartItems((prev) => ({ ...prev, [itemId]:newAmount }));

  }

 

  const contextValue = {
    addToCart,
    cartItems,
    setCartItems,
    products,
    setproducts,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
