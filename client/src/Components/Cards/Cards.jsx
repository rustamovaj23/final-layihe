import React, { useContext } from "react";
import Card from "../Card/Card";

const Cards = ({products}) => {
  return (
    <div className="container">
      <div className="row product-list">
        {products.map((product, index) => {
          return <Card key={index} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Cards;
