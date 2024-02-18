import React, {useContext} from "react";
import dataContext from "../../Context/Context";

const CartTotals = ({couponCode, appliedCoupon}) => {
    const {basket} =
        useContext(dataContext);

    const totalOrderAmount = basket.reduce(
        (total, item) => total + item.totalPrice,
        0
    );

    let discountedAmount = totalOrderAmount

    if (appliedCoupon) {
        discountedAmount = parseFloat(totalOrderAmount * (100 - couponCode.discount) / 100)
    }


    return (
        <div className="cart-totals mt-5">
            <h2>Cart totals</h2>
            <div className="table-responsive total-table">
                <table className="table">
                    <tbody>
                    <tr>
                        <th>SUBTOTAL</th>
                        <td>${totalOrderAmount}</td>
                    </tr>
                    <tr>
                        <th>SHIPPING</th>
                        <td>Enter your address to view shipping options. <br/>
                            Calculate shipping
                        </td>
                    </tr>
                    <tr>
                        <th>TOTAL</th>
                        <td>
                            <div className="total-price">${discountedAmount}</div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <a className="checkout-link" href="#">PROCEED TO CHECKOUT</a>
        </div>
    )
}

export default CartTotals