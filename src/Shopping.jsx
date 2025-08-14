import React from "react";
import "./Shop.css";
import ProductDis from "./components/ProductDis";

const Shopping = () => {
  return (
    <>
      <div className="products-container">
        <div className="products">
          <ProductDis />
        </div>
      </div>
    </>
  );
};

export default Shopping;
