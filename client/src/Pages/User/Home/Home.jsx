import React from 'react'
import FlowerExperts from '../../../Components/FlowerExperts/FlowerExperts'
import FlowerExpertsPhotos from '../../../Components/FlowerExpertsPhotos/FlowerExpertsPhotos'
import Surprise from '../../../Components/Surprise/Surprise'
import Cards from '../../../Components/Cards/Cards'
import FlowerCategories from '../../../Components/FlowerCategories/FlowerCategories'
import Slide from '../../../Components/Slide/Slide'
import { Parallax } from 'swiper/modules'

const Home = () => {
  return (
    <div>
        <FlowerCategories/>
        <Cards/>
        <Surprise/>
        <FlowerExperts/>
        <FlowerExpertsPhotos/>
         <Slide/>
    </div>
  )
}

export default Home