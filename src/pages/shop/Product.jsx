import React, { useContext } from "react";
import "./product.css";
import { ShopContext } from "../../context/shopContext";

const Product = ({ product,props }) => {
  const { addToCart} = useContext(ShopContext);

  return (
    <div className="product">
      <div className="product_description text-center">
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <h3>{product.subtitle}</h3>
        <h3>{product.price}</h3>
        <button className="btn btn-success" onClick={()=>addToCart(product.id) }>add</button>
      </div>
    </div>
  );
};

export default Product;
