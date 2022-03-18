import React, { useEffect, useState } from "react";
import "./Products.css";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
      .then((res) => res.json())
      .then((data) => setProducts(data.meals));
  }, []);

  return (
    <section className="container wrapper">
      <div className="product__item">
        {products.map((product) => (
          <Product key={product.idMeal} product={product}></Product>
        ))}
      </div>
    </section>
  );
};

export default Products;
