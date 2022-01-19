import React, { useEffect, useState } from "react";
import "./Products.css";
import { Link } from "react-router-dom";
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
      <div className="discover">
        <h1>Discover</h1>
        <div className="eating__time">
          <Link to="/all">All</Link>
          <Link to="/breakfast">Breakfast</Link>
          <Link to="/lunch">Lunch</Link>
          <Link to="/dinner">Dinner</Link>
        </div>
        <hr />
      </div>

      <div className="product__wrapper">
        <div className="filter">
          <div className="right">
            <p>Burger</p>
            <p>Soup</p>
            <p>Fish</p>
            <p>Cold Drink</p>
            <p>Salad</p>
            <p>Fruits</p>
          </div>
          <div className="left">
            <p>Healthy</p>
            <p>Summer</p>
            <p>Less Gluten</p>
            <p>Veggie</p>
            <p>Meat</p>
            <p>Fast</p>
          </div>
        </div>
        <div className="product__item">
          {products.map((product) => (
            <Product key={product.idMeal} product={product}></Product>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
