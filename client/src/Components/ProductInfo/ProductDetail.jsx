import React, {useContext, useState} from 'react'
import dataContext from "../../Context/Context";

const ProductDetail = ({product}) => {
    const [quantity, setQuantity] = useState(1)
    const {AddtoBasket} = useContext(dataContext);

    const increase = () => {
        if (quantity + 1 <= product.quantity)
            setQuantity(quantity + 1)
    }

    const decrease = () => {
        if (quantity - 1 >= 0) {
            setQuantity(quantity - 1)
        }
    }


    return (
        <div className="product-detail">
            <h2 className="product-name">
                {product.name}
            </h2>
            <p className="product-price">${product.price}</p>
            <div className="product-description">
                {product.description}
            </div>
            <div className="add-to-basket">
                <div className="quantity">
                    <div className="left">
                        <span>Quantity</span>
                    </div>
                    <div className="right">
                        <button type="button" className="decrease"
                                onClick={() => decrease()}
                                disabled={quantity - 1 <= 0}
                        >
                            <i className="fa-solid fa-caret-left"></i>
                        </button>
                        <span>{quantity}</span>
                        <button type="button" className="increase"
                                onClick={() => increase()}
                                disabled={quantity + 1 > product.quantity}
                        >
                            <i className="fa-solid fa-caret-right"></i>
                        </button>
                    </div>
                </div>
                <button className="add-to-basket-btn" type="button"
                        onClick={() => AddtoBasket(product, quantity)}
                >
                    ADD TO CART
                </button>
            </div>
            <ul className="product-properties">
                <li>
                    <span className="key">Quantity: </span>
                    <span className="value">{product.quantity}</span>
                </li>
                <li>
                    <span className="key">Category: </span>
                    <span className="value">{product.category.title}</span>
                </li>
                <li>
                    <span className="key">Tags: </span>
                    <span className="value">
                        {
                            product.tags.map((tag, index) => <span key={`tag_index_${index}`}>{tag.value}, </span>)
                        }
                    </span>
                </li>
            </ul>
        </div>
    )
}

export default ProductDetail