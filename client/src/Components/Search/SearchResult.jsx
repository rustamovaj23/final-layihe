import React from "react";
import {Link} from "react-router-dom";


const SearchResult = ({products}) => {
    return (
        <div className="search-result">
            {
                products.map(product => <div key={product.id} className="product-item">
                    <div className="product-image">
                        <Link to={`/product/${product.slug}`}>
                            <img src={product.images[0].url}
                                 alt=""/>
                        </Link>
                    </div>
                    <div className="product-content">
                        <div className="product-name">
                            <Link to={`/product/${product.slug}`}>
                                <h5>{product.name}</h5>
                            </Link>
                        </div>
                        <div className="product-description">
                            {product.description}
                        </div>
                        <div className="read-more">
                            <Link to={`/product/${product.slug}`}>Read more</Link>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default SearchResult