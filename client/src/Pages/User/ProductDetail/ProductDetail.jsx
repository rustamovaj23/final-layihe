import React from "react";
import './ProductDetail.css'
import ProductText from "../../../Components/ProductText/ProductText";
import ProductInfo from "../../../Components/ProductInfo/ProductInfo";

const ProductDetail = () => {
    return (
        <div className="product-detail-page">
            <ProductText/>
            <div className="container">
                <div className="product">
                    <ProductInfo/>
                    <div className="product-tabs"></div>
                </div>
                <div className="related-products">

                </div>
            </div>
        </div>
    )
}
export default ProductDetail