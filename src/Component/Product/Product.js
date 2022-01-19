import React from "react";
import "./Product.css";

const Product = (props) => {
  console.log(props.product);

  const { strMealThumb } = props.product;
  return (
    <>
      <div className="product__card">
        <img src={strMealThumb} alt="" />
      </div>
    </>
  );
};

export default Product;
