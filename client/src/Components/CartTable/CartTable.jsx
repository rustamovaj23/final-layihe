import React, {useContext} from "react";
import dataContext from "../../Context/Context";
import {Link} from 'react-router-dom'

const CartTable = () => {
    const {basket, decreaseBtn, increaseBtn, removeFromBasket} =
        useContext(dataContext);
    return (
        <table className="table cart-table mt-5">
            <thead>
            <tr>
                <th>PRODUCT</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>SUBTOTAL</th>
            </tr>
            </thead>
            <tbody className="cart-products">
            {basket.map((item, index) => (
                <tr className="cart-product" key={index}>
                    <td className="product-info align-middle">
                        <button type="button" className="removeFromBasketBtn"
                                onClick={() => removeFromBasket(item.id)}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                        <div className="image">
                            <img src={item.product.images[0].url} alt=""/>
                        </div>
                        <div className="product-name">
                            <Link to={`/product/${item.product.slug}`}>{item.product.name}</Link>
                        </div>
                    </td>
                    <td className="align-middle">
                        ${item.product.price}
                    </td>
                    <td className="align-middle">
                        <div className="quantity">
                            <div className="left">
                                <span>Quantity</span>
                            </div>
                            <div className="right">
                                <button type="button" onClick={() => decreaseBtn(item.id)}
                                        className="decrease"
                                        disabled={item.count == 1 ? true : false}
                                >
                                    <i className="fa-solid fa-caret-left"></i>
                                </button>
                                <span>{item.count}</span>
                                <button type="button" className="increase"
                                        onClick={() => increaseBtn(item.id)}
                                        disabled={item.count + 1 == item.product.quantity}
                                >
                                    <i className="fa-solid fa-caret-right"></i>
                                </button>
                            </div>
                        </div>
                    </td>
                    <td className="align-middle">${item.totalPrice}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default CartTable