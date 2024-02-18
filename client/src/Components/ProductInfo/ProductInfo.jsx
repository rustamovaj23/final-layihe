import React from 'react'
import ProductImages from './ProductImages'
import ProductDetail from './ProductDetail'

const ProductInfo = () => {
    return (
        <div className="product-info">
            <div className="left">
                <ProductImages/>
            </div>
            <div className="right">
                <ProductDetail/>
            </div>
        </div>
    )
}

export default ProductInfo