import React from "react";
import "./Surprise.css"
import videoFlow from "../../assets/flow.mp4";


const Surprise = () => {
  return (
    <div className="all-video-text">
      <div className="right-side-video">
      <video width="500" height="290" controls>
          <source src={videoFlow} type="video/mp4" />
          <source src={videoFlow} type="video/ogg" />
        </video>
      </div>
      <div className="left-side-text">
        <div className="right-side-text-top">
        <p style={{"fontSize":"40px", "fontFamily":"Playfair Display", "margin": "0"}}>Surprise Your <span style={{"color":"red", "fontFamily":"Playfair Display"}}>Valentine!</span></p>
        <p style={{"fontSize":"40px", "fontFamily":"Playfair Display"}}>Let us arrange a smile.</p>
        </div>
<div className="middle-bottom">
<div className="right-side-text-middle">
          <p style={{"color":"gray", "fontSize":"20px", "fontFamily":"Playfair Display"}}>Where flowers are our inspiration to create lasting</p>
          <p style={{"color":"gray", "fontSize":"20px", "fontFamily":"Playfair Display"}}>memories. Whatever the occasion...</p>
        </div>
       <div className="one-two-three">
       <div className="right-side-text-bottom">
          <img style={{"width":"19px", "height":"20px"}} src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/h1-custom-icon.png" alt="" />
          <p style={{"color":"gray", "fontSize":"20px", "fontFamily":"Playfair Display"}}>Hand picked just for you.</p>
        </div>
        <div className="right-side-text-bottom">
          <img style={{"width":"19px", "height":"20px"}} src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/h1-custom-icon.png" alt="" />
          <p style={{"color":"gray", "fontSize":"20px", "fontFamily":"Playfair Display"}}>Unique flower arrangements</p>
        </div>
        <div className="right-side-text-bottom">
          <img style={{"width":"19px", "height":"20px"}} src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/h1-custom-icon.png" alt="" />
          <p style={{"color":"gray", "fontSize":"20px", "fontFamily":"Playfair Display"}}>Best way to say you care.</p>
        </div>
</div>
       </div>
      </div>
    </div>
  );
};

export default Surprise;
