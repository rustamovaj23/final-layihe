import React from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./FirstSlide.css";

const FirstSlide = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>

        </SwiperSlide>
        <SwiperSlide>

        </SwiperSlide>
        <SwiperSlide>

        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default FirstSlide;
