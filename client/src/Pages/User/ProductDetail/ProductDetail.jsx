import React, {useEffect, useState} from "react";
import './ProductDetail.css'
import ProductText from "../../../Components/ProductText/ProductText";
import ProductInfo from "../../../Components/ProductInfo/ProductInfo";
import ProductTabs from "../../../Components/ProductTabs/ProductTabs";
import {useParams} from "react-router";
import Axios from "../../../Helpers/Axios";
import {handleError} from "../../../Helpers/Helpers";
import {isEmpty} from "lodash";
import Cards from "../../../Components/Cards/Cards";

const ProductDetail = () => {
    const [loading, setLoading] = useState(false);
    const [relatedProductLoading, setRelatedProductLoading] = useState(false);
    const [product, setProduct] = useState({});
    const [products, setProducts] = useState([]);
    const {slug} = useParams();

    useEffect(() => {
        setLoading(true)
        Axios.get('products/get_by_slug/' + slug)
            .then(res => {
                if (res.data.success) {

                    setProduct(res.data.data.product)
                }
            })
            .catch(err => handleError(err))
            .finally(() => setLoading(false))
        setRelatedProductLoading(true)


        Axios.get('products/get_related_products/' + slug)
            .then(res => {
                if (res.data.success) {
                    setProducts(res.data.data.products)
                }
            })
            .catch(err => handleError(err))
            .finally(() => setRelatedProductLoading(false))
    }, [slug])


    return (
        <div className="product-detail-page">
            <ProductText/>
            {
                loading && <div className="d-flex justify-content-center mt-3 mb-3">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
            {
                (!loading && !isEmpty(product)) &&
                <div className="product-container">
                    <div className="container">
                        <div className="product">
                            <ProductInfo product={product}/>
                        </div>
                    </div>
                    <ProductTabs product={product}/>
                </div>
            }
            <hr/>
            <div className="related-products">
                <div className="container mt-5">
                    <h5>
                        RELATED PRODUCTS
                    </h5>
                    {
                        relatedProductLoading && <div className="d-flex justify-content-center mt-3 mb-3">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    }
                    {
                        (!relatedProductLoading && products && products.length > 0) && <Cards products={products}/>
                    }

                </div>
            </div>
        </div>
    )
}
export default ProductDetail