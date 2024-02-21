import React from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';

import "./Slide.css"

const Slide = () => {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className='image'>
                        <img style={{"width": "100px"}}
                             src="	https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/testimonial-img-1.png"
                             alt=""/>
                    </div>
                    <div className='image-middle'>
                        <p style={{"color": "gray", "fontSize": "22px"}}>Lorem ipsum dolor sit amet, consectetuer</p>
                        <p style={{"color": "gray", "fontSize": "22px"}}>adipiscing elit. Aenean commodo ligula
                            eget.</p>
                    </div>
                    <div className='image-bottom'>
                        <span style={{"color": "black", "fontSize": "15px"}}>JASMINE WHITE</span>
                        <span style={{"color": "gray", "fontSize": "15px"}}>Florist</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='image'>
                        <img src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/testimonial-img-2.png"
                             alt=""/>
                    </div>
                    <div className='image-middle'>
                        <p style={{"color": "gray", "fontSize": "22px"}}>Nullam dictum felis eu pede mollis pretium.</p>
                        <p style={{"color": "gray", "fontSize": "22px"}}> Integer tincidunt. Cras dapibus lingua. </p>
                    </div>
                    <div className='image-bottom'>
                        <span style={{"color": "black", "fontSize": "15px"}}>Anna Barnes</span>
                        <span style={{"color": "gray", "fontSize": "15px"}}>Florist</span>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}


export default Slide