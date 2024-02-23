import React, {useEffect, useState} from "react";
import SearchHeader from "../../../Components/Search/SearchHeader";
import './Search.css'
import SearchResult from "../../../Components/Search/SearchResult";
import {useNavigate, useLocation} from "react-router-dom";
import Axios from "../../../Helpers/Axios";
import {handleError} from "../../../Helpers/Helpers";
import Loading from "../../../Components/Loading/Loading";

const Search = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search);
    const queryParamValue = queryParams.get('query'); // parametreyi al
    const [searchQuery, setSearchQuery] = useState('')
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log('get products')
        setLoading(true)
        Axios.post("products/search", {
            query: queryParamValue
        })
            .then((res) => {
                if (res.data.success) {
                    setProducts(res.data.data.products);
                }
            })
            .catch(err => handleError(err))
            .finally(() => setLoading(false))
    }, [queryParamValue]);

    const onSubmit = (e) => {
        e.preventDefault()
        navigate('/search?query=' + encodeURIComponent(searchQuery)) // Yönlendirme
    }

    return (
        <div className="search-page">
            {loading && <Loading/>}
            <SearchHeader query={queryParamValue}/>
            <div className="container mt-5">
                <div className="new-search">
                    <h4>New search:</h4>
                    <form onSubmit={e => onSubmit(e)}>
                        <input type="text" placeholder="Type here" onChange={e => setSearchQuery(e.target.value)}/>
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
                <SearchResult products={products}/>
            </div>
        </div>
    )
}

export default Search