import React from 'react'

const InformationTab = () => {
    return (
        <div className="tab-pane fade" id="product-information" role="tabpanel"
             aria-labelledby="product-information-tab"
             tabIndex="0">
            <ul>
                <li>
                    <span className="key">Weight: </span>
                    <span className="value">1kg</span>
                </li>
                <li>
                    <span className="key">Dimensions: </span>
                    <span className="value">30 × 30 × 50 cm</span>
                </li>
            </ul>
        </div>
    )
}

export default InformationTab