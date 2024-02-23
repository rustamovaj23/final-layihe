import React from 'react'
import "./LoadMoreBtn.css"

const LoadMoreBtn = ({loadMore}) => {
    return (
        <div className='load-more-btn'>
            <div className='load-btn'>
                <button onClick={() => loadMore()} type="button">LOAD MORE</button>
            </div>
        </div>
    )
}

export default LoadMoreBtn