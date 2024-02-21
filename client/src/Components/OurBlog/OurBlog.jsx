import React from "react";
import "./OurBLog.css";

const OurBlog = () => {
    return (
        <div className="home-blog-container">
            <div className="container">
                <div className="top">
                    <h3>
                        From our Blog
                    </h3>
                    <p>
                        A perfect blend of creativity, energy, communication, happiness and love. Let us arrange a smile
                        for you.
                    </p>
                </div>
                <div className="posts">
                    <div className="post">
                        <a className="post-image" href="#">
                            <span className="date">27.04.2018</span>
                            <img
                                src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/blog-feature-img-1.jpg"
                                alt=""/>
                        </a>
                        <h5>
                            <a href="#">Flower Power</a>
                        </h5>
                        <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per</p>
                    </div>
                    <div className="post">
                        <a className="post-image" href="#">
                            <span className="date">03.05.2018</span>
                            <img
                                src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/blog-feature-img-3.jpg"
                                alt=""/>
                        </a>
                        <h5>
                            <a href="#">Local Florists</a>
                        </h5>
                        <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per</p>
                    </div>
                    <div className="post">
                        <a className="post-image" href="#">
                            <span className="date">03.05.2018</span>
                            <img
                                src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/blog-feature-img-4.jpg"
                                alt=""/>
                        </a>
                        <h5>
                            <a href="#">Flower Beauty</a>
                        </h5>
                        <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurBlog;
