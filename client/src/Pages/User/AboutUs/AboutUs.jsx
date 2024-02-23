import React from 'react'
import Slide from '../../../Components/Slide/Slide'
import Surprise from "../../../Components/Surprise/Surprise";
import FlowerExperts from "../../../Components/FlowerExperts/FlowerExperts";
import FlowerExpertsPhotos from "../../../Components/FlowerExpertsPhotos/FlowerExpertsPhotos";
import './AboutUs.css'
import PageHeader from "../../../Components/PageHeader/PageHeader";


const AboutUs = () => {
    const pageHeaderTitle = 'About us'
    const pageHeaderText = 'Where flowers are our inspiration'

    const surpriseText = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec.'
    return (
        <div className="about-us-container">
            <PageHeader title={pageHeaderTitle} text={pageHeaderText}/>
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