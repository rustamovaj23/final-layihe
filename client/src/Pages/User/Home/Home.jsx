import React from 'react'
import FlowerExperts from '../../../Components/FlowerExperts/FlowerExperts'
import FlowerExpertsPhotos from '../../../Components/FlowerExpertsPhotos/FlowerExpertsPhotos'
import Surprise from '../../../Components/Surprise/Surprise'

const Home = () => {
  return (
    <div>
        <Surprise/>
        <FlowerExperts/>
        <FlowerExpertsPhotos/>
    </div>
  )
}

export default Home