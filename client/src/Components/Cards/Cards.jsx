import React from "react";
import Card from "../Card/Card";
import "./Cards.css";

const Cards = ({products}) => {
    return (
        <div className="container">
            <div className="row product-list mt-5">
                {products.map((product, index) => {
                    return <Card key={index} product={product}/>;
                })}
            </div>
        </div>
    );
};

export default Cards;
