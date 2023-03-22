import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import Product from "./Product";
import "./product.css";

const Shop = () => {
  const { products } = useContext(ShopContext);

  return (
    <>
          
      <div className="shop bg-info">
        
        {products.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </>
  );
};

export default Shop;
