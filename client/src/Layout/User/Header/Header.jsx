import React from "react";
import {Link} from "react-router-dom";
import HeaderMenu from './HeaderMenu'
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="headerBox">
                    <div className="row h-100 align-items-center">
                        <div className="col-lg-4 col-11">
                            <div className="headerLeftLogo">
                                <Link to={"/"}>
                                    <img
                                        src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/h2-logo-1.png"
                                        alt=""
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-8 headerLinks-col">
                            <HeaderMenu/>
                        </div>
                        <div className="col-1">
                            <button className="btn toggle-right-menu" type="button" data-bs-toggle="offcanvas"
                                    data-bs-target="#right-menu" aria-controls="right-menu">
                                <i className="fa-solid fa-bars"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
