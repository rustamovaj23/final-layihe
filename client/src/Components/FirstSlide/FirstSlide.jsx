import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import {Navigation} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import "./FirstSlide.css";

const FirstSlide = () => {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className="slider-imag">
                        <img
                            src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/h3-slider-background.jpg"
                            alt=""
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-imag">
                        <img
                            src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/h3-slider-background-2.jpg"
                            alt=""
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-imag">
                        <img
                            src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/h3-slider-background-3.jpg"
                            alt=""
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default FirstSlide;
