import React from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { RiShoppingBagLine } from "react-icons/ri";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="headerBox">
          <div className="row h-100 align-items-center">
            <div className="col-lg-4">
              <div className="headerLeftLogo">
                <Link to={"/"}>
                  <img
                    src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/h2-logo-1.png"
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg-8">
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
                      <ul class="dropdown-menu">
                        <li>
                          <a class="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <div className="headText">
                          <span className="headTextInside">Shop</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <div className="headText">
                          <span className="headTextInside">Portfolio</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <div className="headText">
                          <span className="headTextInside">Post Types</span>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </nav>
                <Link to={"admin"}>Admin Panel</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
