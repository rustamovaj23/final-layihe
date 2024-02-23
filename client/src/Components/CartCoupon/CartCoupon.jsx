import React, {useState} from "react";

const CartCoupon = ({setCoupon}) => {

    const [code, setCode] = useState('')
    const applyCoupon = (e) => {
        e.preventDefault()
        setCoupon(code)
    }

    return (
        <div className="cart-coupon mt-3">
            <div className="left">
                <form onSubmit={e => applyCoupon(e)}>
                    <input type="text" placeholder="Coupon code" name="code" onChange={e => setCode(e.target.value)}/>
                    <button type="submit">
                        APPLY COUPON
                    </button>
                </form>
            </div>
            <div className="right">
                <button type="button">
                    UPDATE CART
                </button>
            </div>
        </div>
    )
}

export default CartCoupon