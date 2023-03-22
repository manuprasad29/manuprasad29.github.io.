import React, { useContext } from "react";
import "./product.css";
import { ShopContext } from "../../context/shopContext";

const Product = ({ product, props }) => {
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[product.id];

  return (
    <div className="product">
      <div className="product_description text-center">
        <img src={product.image} alt={product.title} />
        <h6>{product.title}</h6>
        <h6>{product.subtitle}</h6>
        <h6>₹ {product.price}</h6>
        <button
          className="btn btn-success"
          onClick={() => addToCart(product.id)}
        >
          Add {cartItemCount > 0 && <>({cartItemCount})</>}
        </button>
      </div>
    </div>
  );
};

export default Product;
