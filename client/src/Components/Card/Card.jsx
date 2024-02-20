import React, {useContext} from "react";
import dataContext from "../../Context/Context";
import {Link} from 'react-router-dom'

const Card = ({product}) => {
    const {AddtoBasket} = useContext(dataContext);

    return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 product">
            <Link to={`/product/${product.slug}`} className="card">
                <div className="card-photo">
                    <img src={product.images[0].url} alt=""/>
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
