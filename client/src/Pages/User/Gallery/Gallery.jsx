import React from 'react'
import "./Gallery.css"
import PortfolioGallery from '../../../Components/PortfolioGallery/PortfolioGallery'
import Pictures from '../../../Components/Pictures/Pictures'

const Gallery = () => {
  return (
    <div>
      <PortfolioGallery/>
      <Pictures/>
    </div>
  )
}

export default Gallery