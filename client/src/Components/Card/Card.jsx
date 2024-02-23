import React, {useContext} from "react";
import dataContext from "../../Context/Context";
import {Link} from 'react-router-dom'

const Card = ({product}) => {
    const {AddtoBasket} = useContext(dataContext);

    const addToBasket = (e, product) => {
        e.preventDefault()
        AddtoBasket(product)
    }

    return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 product">
            <Link to={`/product/${product.slug}`} className="card">
                <div className="card-photo">
                    <img src={product.images[0].url} alt=""/>
                </div>
                <div className="card-text">
                    <p className="product-name">{product.name}</p>
                    <div className="product-price-add-to-cart">
                        <p className="product-price">${product.price}</p>
                        <button
                            onClick={e => addToBasket(e, product)}>
                            Səbətə at
                        </button>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;
