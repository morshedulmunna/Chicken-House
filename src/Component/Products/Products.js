import React from "react";
import "./Products.css";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section className="container products">
      <h1>Discover</h1>
      <div className="eating__time">
        <Link to="/all">All</Link>
        <Link to="/breakfast">Breakfast</Link>
        <Link to="/lunch">Lunch</Link>
        <Link to="/dinner">Dinner</Link>
      </div>
      <hr />

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
        <div className="product">
          <h2>Products 1</h2>
        </div>
      </div>
    </section>
  );
};

export default Products;
