import React, {useEffect, useState} from "react";
import CartText from "../../../Components/CartText/CartText";
import CartTable from "../../../Components/CartTable/CartTable";
import CartCoupon from "../../../Components/CartCoupon/CartCoupon";
import CartTotals from "../../../Components/CartTotals/CartTotals";
import './Cart.css'
import {handleError, handleSuccess} from "../../../Helpers/Helpers";

const Cart = () => {
    const [coupon, setCoupon] = useState('')
    const [appliedCoupon, setAppliedCoupon] = useState(false)
    const couponCode = {
        code: 'jale',
        discount: 15 // faiz
    }
    useEffect(() => {
        if (coupon) {
            if (couponCode.code == coupon) {
                setAppliedCoupon(true)
                handleSuccess(`Kupon kodu tətbiq edildi. Endirim : ${couponCode.discount}%`)
            } else {
                setAppliedCoupon(false)
                handleError(`Kupon kodu yanlışdır`)
            }
        }
    }, [coupon])
    return (
        <div className="basket">
            <CartText/>
            <div className="container">
                <CartTable/>
                <CartCoupon setCoupon={setCoupon}/>
                <CartTotals couponCode={couponCode} appliedCoupon={appliedCoupon}/>
            </div>
        </div>
    );
};

export default Cart;
