import React from 'react'
import "./Card.css"

const Card = ({item}) => {
  return (
    <div className='col-lg-3 col-md-6 mb-4 mr-2' style={{"paddingTop":"30px"}}>
        <div className="card" style={{"width":"38vh"}}>
            <div className="card-photo" style={{"width":"100px"}}>
                <img src={item.image} alt="" style={{"width":"38vh"}}/>
            </div>
            <div className="card-text">
                <a>{item.name}</a>
                <a style={{"color":"#6d6a6a"}}>${item.price}</a>
            </div>
        </div>

    </div>
  )
}

export default Card