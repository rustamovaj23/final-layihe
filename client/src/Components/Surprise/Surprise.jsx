import React from "react";
import "./Surprise.css"


const Surprise = ({surpriseText}) => {
    return (
        <div className="all-video-text">
            <div className="container">
                <div className="right-side-video">
                    <video controls>
                        <source src='/assets/flow.mp4' type="video/mp4"/>
                    </video>
                </div>
                <div className="left-side-text">
                    <div className="right-side-text-top">
                        <p>Surprise Your <span>Valentine!</span>
                            <br/>
                            Let us arrange a smile.</p>
                    </div>
                    <div className="middle-bottom">
                        <div className="right-side-text-middle">
                            <p>{surpriseText}</p>
                        </div>
                        <div className="one-two-three">
                            <div className="right-side-text-bottom">
                                <img
                                    src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/h1-custom-icon.png"
                                    alt=""/>
                                <p>Hand picked just for you.</p>
                            </div>
                            <div className="right-side-text-bottom">
                                <img
                                    src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/h1-custom-icon.png"
                                    alt=""/>
                                <p>Unique flower arrangements</p>
                            </div>
                            <div className="right-side-text-bottom">
                                <img
                                    src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/h1-custom-icon.png"
                                    alt=""/>
                                <p>Best way to say you care.</p>
                            </div>
                        </div>
                    </div>
                    <img className="bottom-image"
                         src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/h2-sign-img.png" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Surprise;
