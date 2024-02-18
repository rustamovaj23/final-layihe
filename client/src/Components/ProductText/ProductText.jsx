import React from 'react'
import "./ProductText.css"

const ProductText = () => {
    return (
        <div className="product-text">
            <div className="container">
                <p style={{"fontSize": "50px", "fontFamily": "Playfair Display"}}>Product List</p>
                <p style={{"color": "gray", "fontSize": "20px", "fontFamily": "Playfair Display"}}>
                    Where flowers are our inspiration
                </p>
            </div>
        </div>
    )
}

export default ProductText