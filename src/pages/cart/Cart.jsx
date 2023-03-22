import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/shopContext";
import CartItems from "./CartItems";

const Cart = (props) => {
  const { products, cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate
  
  return (
    <div className="cart container bg-warning">
      <div className="text-center ">
        <h2 className="m-2">Your cart items</h2>
      </div>
      <div className="cartItems">
        {products.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItems product={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout text-center m-5">
          <h2>Sub total : ₹ {totalAmount} </h2>
          <button className="btn btn-info m-5" onClick={()=>navigate("/")}>Continue Shopping</button>
          &nbsp; &nbsp;
          <button className="btn btn-success m-5">Checkout</button>
        </div>
      ) : (
        <h5 className="text-center "> Your Shopping Cart is Empty</h5>
      )}
    </div>
  );
};

export default Cart;
