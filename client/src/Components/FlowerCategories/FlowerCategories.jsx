import React from "react";
import "./FlowerCategories.css";
import { Link } from "react-router-dom";

const FlowerCategories = ({ currentRoute, categories }) => {
  return (
    <div className="flower-categories">
      <Link className={currentRoute == "all" ? "active" : ""} to="/">
        ALL
      </Link>
      {categories.map((category, index) => (
        <Link
          key={`categoryIndex-${index}`}
          to={`/categories/${category.slug}`}
          className={currentRoute == category.slug ? "active" : ""}
        >
          {category.title}
        </Link>
      ))}
    </div>
  );
};

export default FlowerCategories;
