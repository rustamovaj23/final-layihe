import React from 'react'
import ProductImages from './ProductImages'
import ProductDetail from './ProductDetail'

const ProductInfo = ({product}) => {
    return (
        <div className="product-info">
            <div className="left">
                <ProductImages images={product.images}/>
            </div>
            <div className="right">
                <ProductDetail product={product}/>
            </div>
        </div>
    )
}

export default ProductInfo