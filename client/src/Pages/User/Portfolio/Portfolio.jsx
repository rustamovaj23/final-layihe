import React from 'react'
import "./Portfolio.css"
import Standart from '../../../Components/Standart/Standart'
import Names from '../../../Components/Names/Names'
import Flowers from '../../../Components/Flowers/Flowers'
import LoadMoreBtn from '../../../Components/LoadMoreBtn/LoadMoreBtn'

const Portfolio = () => {
  return (
    <div>
        <Standart/>
        <Names/>
        <Flowers/>
        <LoadMoreBtn/>
    </div>
  )
}

export default Portfolio