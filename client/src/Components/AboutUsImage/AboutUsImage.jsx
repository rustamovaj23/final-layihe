import React from 'react'
import "./AboutUsImage.css"

const AboutUsImage = () => {
  return (
        <div className='about-us'>
        <div className="about-us-top">
        <div className="about-us-img">
          <img
            src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/p1-title-img.jpg"
            alt=""
          />
        </div>
        <div className="top-text">
          <p style={{ color: "black", fontSize: "55px" }}>About Us</p>
          <p style={{ color: "#6d6a6a", fontSize: "20px" }}>
            Where flowers are our inspiration
          </p>
        </div>
      </div>
    </div>

  )
}

export default AboutUsImage