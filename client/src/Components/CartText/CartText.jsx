import React from 'react'
import "./CartText.css"

const CartText = () => {
  return (
    <div className='cart-text'>
        <p style={{"fontSize":"50px", "font-family": "Playfair Display"}}>Cart</p>
        <p style={{"color":"gray", "fontSize":"20px", "font-family": "Playfair Display"}}>Where flowers are our inspiration</p>
    </div>
  )
}

export default CartText