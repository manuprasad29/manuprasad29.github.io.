import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";

const CartItems = ({ product }) => {
  const { cartItems, addToCart, removeFromCart,updateCartItemCount } = useContext(ShopContext);

  return (
    <div className="cartItems text-center">
      <img src={product.image} alt="" />
      <h6>{product.title}</h6>
      <h6>₹{product.price}</h6>
      <div>
        <button
          className="btn btn-primary"
          onClick={() => removeFromCart(product.id)}
        >
          -
        </button>
        <input className="text-center" style={{width:"80px"}} value={cartItems[product.id]} onChange={(e)=>updateCartItemCount(Number(e.target.value),(product.id))}/>
        <button
          className="btn btn-success"
          onClick={() => addToCart(product.id)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItems;
