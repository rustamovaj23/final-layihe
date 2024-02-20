import React from 'react'
import DescriptionTab from "./DescriptionTab";
import InformationTab from "./InformationTab";
import ReviewsTab from "./ReviewsTab";

const ProductTabs = ({product}) => {
    return (
        <div className="product-tabs">
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <div className="container">
                        <button className="nav-link active" id="product-description-tab" data-bs-toggle="tab"
                                data-bs-target="#product-description" type="button" role="tab"
                                aria-controls="product-description"
                                aria-selected="true">DESCRIPTION
                        </button>
                        <button className="nav-link" id="product-information-tab" data-bs-toggle="tab"
                                data-bs-target="#product-information"
                                type="button" role="tab" aria-controls="product-information"
                                aria-selected="false">ADDITIONAL
                            INFORMATION
                        </button>
                        <button className="nav-link" id="product-reviews-tab" data-bs-toggle="tab"
                                data-bs-target="#product-reviews"
                                type="button" role="tab" aria-controls="product-reviews" aria-selected="false">REVIEWS
                        </button>
                    </div>
                </div>
            </nav>
            <div className="container">
                <div className="tab-content mt-5" id="nav-tabContent">
                    <DescriptionTab product={product}/>
                    <InformationTab/>
                    <ReviewsTab/>
                </div>
            </div>
        </div>
    )
}

export default ProductTabs