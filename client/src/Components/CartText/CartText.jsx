import React from 'react'
import "./CartText.css"

const CartText = () => {
    return (
        <div className="cart-text">
            <div className="container">
                <p style={{"fontSize": "50px", "fontFamily": "Playfair Display"}}>Cart</p>
                <p style={{"color": "gray", "fontSize": "20px", "fontFamily": "Playfair Display"}}>Where flowers are our
                    inspiration</p>
            </div>
        </div>
    )
}

export default CartText