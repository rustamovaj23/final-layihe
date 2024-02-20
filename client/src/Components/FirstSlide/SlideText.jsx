import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import {Navigation} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import "./FirstSlide.css";

const SlideText = () => {
    return (
        <>
            <div className="slider-textt">
                <div className="textts-1">
                    <p>
                        Send <span>flowers</span> like
                        <br/>
                        you mean it.
                    </p>
                </div>
                <div className="textts-2">
                    <p>
                        Where flowers are our inspiration to create lasting memories. Whatever the occasion, our
                        flowers will make it special cursus a sit amet mauris.
                    </p>
                </div>
                <div className="image">
                    <img src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/h2-sign-img.png" alt=""/>
                </div>
            </div>
        </>
    );
};

export default SlideText;
