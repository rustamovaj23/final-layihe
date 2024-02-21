import React from 'react'
import AboutUsImage from '../../../Components/AboutUsImage/AboutUsImage'
import Slide from '../../../Components/Slide/Slide'
import Surprise from "../../../Components/Surprise/Surprise";
import FlowerExperts from "../../../Components/FlowerExperts/FlowerExperts";
import FlowerExpertsPhotos from "../../../Components/FlowerExpertsPhotos/FlowerExpertsPhotos";
import './AboutUs.css'


const AboutUs = () => {

    const surpriseText = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec.'
    return (
        <div className="about-us-container">
            <AboutUsImage/>
            <Surprise surpriseText={surpriseText}/>
            <div className="about-experts">
                <FlowerExperts/>
                <FlowerExpertsPhotos/>
            </div>
            <Slide/>
        </div>
    )
}

export default AboutUs