import React, {useContext} from "react";
import "./Card.css";
import dataContext from "../../Context/Context";
import {Link} from 'react-router-dom'

const Card = ({product}) => {
    const {AddtoBasket} = useContext(dataContext);

    return (
        <div className="col-lg-3 col-md-6 mb-4 mr-2 product" style={{paddingTop: "30px"}}>
            <Link to={`/product/${product.slug}`} className="card" style={{width: "38vh"}}>
                <div className="card-photo" style={{width: "100px"}}>
                    <img src={product.images[0].url} alt="" style={{width: "38vh"}}/>
                </div>
                <div className="card-text">
                    <p className="product-name">{product.name}</p>
                    <p className="product-price" style={{color: "#6d6a6a"}}>${product.price}</p>
                    <button
                        onClick={() => {
                            AddtoBasket(product);
                        }}
                    >
                        {" "}
                        Səbətə at
                    </button>
                </div>
            </Link>
        </div>
    );
};

export default Card;
