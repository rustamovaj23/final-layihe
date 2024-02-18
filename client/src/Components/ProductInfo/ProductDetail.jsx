import React from 'react'

const ProductDetail = () => {
    return (
        <div className="product-detail">
            <h2 className="product-name">
                Majesty Palm
            </h2>
            <p className="product-price">$259</p>
            <div className="product-description">
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in
                erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut
                imperdiet nisi. Proin condimentum fermentum nunc.
            </div>
            <div className="add-to-basket">
                <div className="quantity">
                    <div className="left">
                        <span>Quantity</span>
                    </div>
                    <div className="right">
                        <button type="button" className="decrease">
                            <i className="fa-solid fa-caret-left"></i>
                        </button>
                        <span>15</span>
                        <button type="button" className="increase">
                            <i className="fa-solid fa-caret-right"></i>
                        </button>
                    </div>
                </div>
                <button className="add-to-basket-btn" type="button">
                    ADD TO CART
                </button>
            </div>
            <ul className="product-properties">
                <li>
                    <span className="key">Quantity: </span>
                    <span className="value">156</span>
                </li>
                <li>
                    <span className="key">Category: </span>
                    <span className="value">Winter</span>
                </li>
                <li>
                    <span className="key">Tags: </span>
                    <span className="value">Llilies, Roses</span>
                </li>
            </ul>
        </div>
    )
}

export default ProductDetail