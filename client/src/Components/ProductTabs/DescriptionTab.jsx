import React from 'react'

const DescriptionTab = ({product}) => {
    return (
        <div className="tab-pane fade show active" id="product-description" role="tabpanel"
             aria-labelledby="product-description-tab"
             tabIndex="0">
            <h3>
                {product.name}
            </h3>
            <div className="description">
                {
                    product.description
                }
            </div>
        </div>
    )
}

export default DescriptionTab