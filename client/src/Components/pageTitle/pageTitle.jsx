import React from "react";

import './pageTitle.css'

const pageTitle = ({title, description = ''}) => {
    return (
        <div className="page-title">
            <div className="container">
                <h2>
                    {title}
                </h2>
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default pageTitle