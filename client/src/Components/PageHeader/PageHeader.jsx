import React from "react";
import './PageHeader.css'

const PageHeader = ({title, text}) => {
    return (
        <div className='page-header'>
            <div className="page-header-top">
                <div className="page-header-img">
                    <img
                        src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/p1-title-img.jpg"
                        alt=""
                    />
                </div>
                <div className="top-text">
                    <p>{title}</p>
                    <p>
                        {text}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PageHeader