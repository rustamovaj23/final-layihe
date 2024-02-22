import React from "react";
import SearchHeader from "../../../Components/Search/SearchHeader";
import './Search.css'
import SearchResult from "../../../Components/Search/SearchResult";

const Search = () => {

    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="search-page">
            <SearchHeader/>
            <div className="container mt-5">
                <div className="new-search">
                    <h4>New search:</h4>
                    <form onSubmit={e => onSubmit(e)}>
                        <input type="text" placeholder="Type here"/>
                        <button type="submit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                <path
                                    fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                    strokeWidth="2" d="m5 27l7.5-7.5M28 13a9 9 0 1 1-18 0a9 9 0 0 1 18 0"/>
                            </svg>
                        </button>
                    </form>
                    <div className="new-search-text">
                        <p>
                            If you are not happy with the results below please do another search
                        </p>
                    </div>
                </div>
                <SearchResult/>
            </div>
        </div>
    )
}

export default Search