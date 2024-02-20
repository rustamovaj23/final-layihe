import React from "react";
import {Link} from "react-router-dom";
import HeaderMenu from "./HeaderMenu";


const RightMenu = () => {
    return (
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="right-menu"
             aria-labelledby="right-menuLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="right-menuLabel">
                    <img
                        src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/h2-logo-1.png"
                        alt=""
                    />
                </h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <HeaderMenu/>
            </div>
        </div>
    );
};

export default RightMenu;
