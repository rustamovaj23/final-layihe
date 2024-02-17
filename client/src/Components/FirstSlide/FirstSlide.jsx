import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
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
          <div className="slider-textt">
            <div className="textts-1">
            <p style={{"font-family": "Playfair Display", "fontSize":"45px"}}>Send <span style={{"color":"red","font-family": "Playfair Display"}}>flowers </span> like</p>
            <p style={{"font-family": "Playfair Display", "fontSize":"45px"}}>you mean it.</p>
            </div>
            <div className="textts-2">
              <p style={{"color":"gray","font-family": "Playfair Display"}}>Where flowers are our inspiration to create lasting</p>
              <p style={{"color":"gray","font-family": "Playfair Display"}}>memories. Whatever the occasion, uour flowers will</p>
              <p style={{"color":"gray","font-family": "Playfair Display"}}>make it special cursus a sit amet mauris</p>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-imag">
          <img
            src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/h3-slider-background-2.jpg"
            alt=""
          />
          </div>
          <div className="slider-textt">
            <div className="textts-1">
            <p style={{"font-family": "Playfair Display", "fontSize":"45px"}}>Send <span style={{"color":"red","font-family": "Playfair Display"}}>flowers </span> like</p>
            <p style={{"font-family": "Playfair Display", "fontSize":"45px"}}>you mean it.</p>
            </div>
            <div className="textts-2">
              <p style={{"color":"gray","font-family": "Playfair Display"}}>Where flowers are our inspiration to create lasting</p>
              <p style={{"color":"gray","font-family": "Playfair Display"}}>memories. Whatever the occasion, uour flowers will</p>
              <p style={{"color":"gray","font-family": "Playfair Display"}}>make it special cursus a sit amet mauris</p>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-imag">
          <img
            src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/h3-slider-background-3.jpg"
            alt=""
          />
          </div>
          <div className="slider-textt">
            <div className="textts-1">
            <p style={{"font-family": "Playfair Display", "fontSize":"45px"}}>Send <span style={{"color":"red","font-family": "Playfair Display"}}>flowers </span> like</p>
            <p style={{"font-family": "Playfair Display", "fontSize":"45px"}}>you mean it.</p>
            </div>
            <div className="textts-2">
              <p style={{"color":"gray","font-family": "Playfair Display"}}>Where flowers are our inspiration to create lasting</p>
              <p style={{"color":"gray","font-family": "Playfair Display"}}>memories. Whatever the occasion, uour flowers will</p>
              <p style={{"color":"gray","font-family": "Playfair Display"}}>make it special cursus a sit amet mauris</p>
            </div>
            </div>
          
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default FirstSlide;
