import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";



const ProductDis = () => {
    const {searchProduct,addToCart} = useContext(ShopContext);
  return (
    <>
      {searchProduct.length > 0 ?  (searchProduct.map((item,index) => {
         return <div className="product-card" key={index} >
          <img src={item.image} alt="Product" />
          <div className="price">${item.price}</div>
          <div className="old-price">${item.oldP}</div>
          <button className="add-btn" onClick={() => addToCart(item.id)} >ADD TO CART</button>
        </div>
      })) : <h1>No Product Found</h1> }
    </>
  );
};

export default ProductDis;
