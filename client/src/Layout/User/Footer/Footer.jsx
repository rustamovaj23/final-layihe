import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-top row">
                    <div className="top col-lg-3 col-md-6">
                        <div className="customer">
                            <p>CUSTOMER SERVICE</p>
                        </div>
                        <div className="texts">
                            <p>
                                Help & Contact Us
                            </p>
                            <p>
                                Returns & Refunds
                            </p>
                            <p>Online Stores</p>
                            <p>
                                Terms & Conditions
                            </p>
                        </div>
                    </div>
                    <div className="top col-lg-3 col-md-6">
                        <div className="company">
                            <p>COMPANY</p>
                        </div>
                        <div className="texts">
                            <p>About Us</p>
                            <p>Blog</p>
                            <p>Order Tracking</p>
                            <p>FAQ Page</p>
                            <p>Contact Us</p>
                            <p>Login</p>
                        </div>
                    </div>
                    <div className="top col-lg-3 col-md-6">
                        <div className="social">
                            <p>SOCIAL MEDIA</p>
                        </div>
                        <div className="texts">
                            <p>Twitter</p>
                            <p>Instagram</p>
                            <p>Tumblr</p>
                            <p>Pinterest</p>
                        </div>
                    </div>
                    <div className="top col-lg-3 col-md-6">
                        <div className="archive">
                            <p>ARCHIVE</p>
                        </div>
                        <div className="texts">
                            <p>Designer Shoes</p>
                            <p>Pricing</p>
                            <p>Gallery</p>
                            <p>Feature Indexx</p>
                            <p>Login</p>
                            <p>Help & Support</p>
                        </div>
                    </div>
                </div>
                <hr className="footer-hr"/>
                <div className="footer-bottom row">
                    <div className="col-lg-4 col-12">
                        <span>© 2018</span> Qode Interactive <span>, All Rights Reserved</span>
                    </div>
                    <div className="col-lg-4 col-12">
                        <img src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/footer-bottom-1.png"
                             alt=""/>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="row social">
                            <div className="col-6">
                                <p>INSTAGRAM</p>
                            </div>
                            <div className="col-6">
                                <p>FACEBOOK</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
