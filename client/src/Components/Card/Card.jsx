import React, { useContext } from "react";
import "./Card.css";
import dataContext from "../../Context/Context";

const Card = ({ product }) => {
  const { data, setData, handleFav, AddtoBasket, handleMuq } =
    useContext(dataContext);

  return (
    <div className="col-lg-3 col-md-6 mb-4 mr-2" style={{ paddingTop: "30px" }}>
      <div className="card" style={{ width: "38vh" }}>
        <div className="card-photo" style={{ width: "100px" }}>
          <img src={product.images[0].url} alt="" style={{ width: "38vh" }} />
        </div>
        <div className="card-text">
          <a>{product.name}</a>
          <a style={{ color: "#6d6a6a" }}>${product.price}</a>
          <button
            onClick={() => {
              AddtoBasket(product);
            }}
          >
            {" "}
            Səbətə at
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
