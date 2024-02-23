import React, {useContext, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import dataContext from "../../../Context/Context";

const HeaderMenu = () => {
    const {basket} = useContext(dataContext);
    const navigate = useNavigate();

    const [searchQuery, setSearchQuery] = useState('')

    const productCount = basket.length

    const search = (e) => {
        e.preventDefault()
        navigate('/search?query=' + encodeURIComponent(searchQuery)) // Yönlendirme
        setSearchQuery('') // Yönlendirmeden sonra searchQuery'yi temizle
    }

    return (
        <div className="headerLinks">
            <nav>
                <ul>
                    <li>
                        <Link to={"/"}>
                            <div className="headText">
                                <span className="headTextInside">Home</span>
                            </div>
                        </Link>
                    </li>
                    <li className="dropdown">
                        <a
                            href="#"
                            className="dropdown-toggle"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <div className="headText">
                                <span className="headTextInside">Pages</span>
                            </div>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <Link to="/aboutUs" className="dropdown-item">
                                    About us
                                </Link>
                            </li>
                            <li>
                                <Link to="/faqPage" className="dropdown-item">
                                    FAQ Page
                                </Link>
                            </li>
                            <li>
                                <Link to="/contactUs" className="dropdown-item">
                                    Contact us
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a
                            href="#"
                            className="dropdown-toggle"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <div className="headText">
                                <span className="headTextInside">Shop</span>
                            </div>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <Link to="/myAccount" className="dropdown-item">
                                    My account
                                </Link>
                            </li>
                            <li>
                                <Link to="/portfolio" className="dropdown-item">
                                    Portfolio
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a
                            href="#"
                            className="dropdown-toggle"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <div className="headText">
                                <span className="headTextInside">Post types</span>
                            </div>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <Link to="/gallery" className="dropdown-item">
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link to="/link" className="dropdown-item">
                                    Link
                                </Link>
                            </li>
                            <li>
                                <Link to="/quote" className="dropdown-item">
                                    Quote
                                </Link>
                            </li>
                            <li>
                                <Link to="/audio" className="dropdown-item">
                                    Audio
                                </Link>
                            </li>
                            <li>
                                <Link to="/videos" className="dropdown-item">
                                    Videos
                                </Link>
                            </li>
                            <li>
                                <Link to="/standart" className="dropdown-item">
                                    Standart
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown search">
                        <a
                            href="#"
                            className="dropdown-toggle"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <div className="headText">
                                <span className="headTextInside">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path
                                        fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                        strokeWidth="2" d="m5 27l7.5-7.5M28 13a9 9 0 1 1-18 0a9 9 0 0 1 18 0"/></svg>
                                </span>
                            </div>
                        </a>
                        <div className="dropdown-menu">
                            <form onSubmit={e => search(e)}>
                                <input type="text" value={searchQuery} placeholder="Search" onChange={e => setSearchQuery(e.target.value)}/>
                                <button type="submit">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                        <path
                                            fill="none" stroke="currentColor" strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2" d="m5 27l7.5-7.5M28 13a9 9 0 1 1-18 0a9 9 0 0 1 18 0"/>
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </li>
                    <li id="cart-link">
                        <Link to={"/cart"} className="position-relative">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                <path fill="currentColor"
                                      d="M6 22q-.825 0-1.412-.587T4 20V8q0-.825.588-1.412T6 6h2q0-1.65 1.175-2.825T12 2q1.65 0 2.825 1.175T16 6h2q.825 0 1.413.588T20 8v12q0 .825-.587 1.413T18 22zm0-2h12V8h-2v2q0 .425-.288.713T15 11q-.425 0-.712-.288T14 10V8h-4v2q0 .425-.288.713T9 11q-.425 0-.712-.288T8 10V8H6zm4-14h4q0-.825-.587-1.412T12 4q-.825 0-1.412.588T10 6M6 20V8z"/>
                            </svg>
                            <div className="headText">
                                <span className="headTextInside">Cart</span>
                            </div>
                            {
                                productCount > 0 && <span
                                    className="product-count position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {productCount}
                            </span>
                            }
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default HeaderMenu;
