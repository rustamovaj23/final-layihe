import React from "react";

import './SearchHeader.css'

const SearchHeader = ({query}) => {
    return (
        <div className="search-header">
            <div className="container">
                <h2>
                    Search results for: {query}
                </h2>
            </div>
        </div>
    )
}

export default SearchHeader