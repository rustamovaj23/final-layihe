import React from "react";
import "./FourPhotos.css";

const FourPhotos = () => {
  return (
   <div className="four-all">
     <div className="four-photos-all">
      <div className="flowers">
        <div className="flower">
          <p style={{ color: "black", fontSize: "35px" }}>Flower Experts</p>
        </div>
        <div className="flow">
          <p style={{ color: "#8b8b8b", fontSize: "20px" }}>
            A perfect blend of creativity, energy, communication, happiness
          </p>
          <p style={{ color: "#8b8b8b", fontSize: "20px" }}>
            and love. Let us arrange a smile for you.
          </p>
        </div>
      </div>
      <div className='all'>
        <div className='photo'>
        <div className='image'><img src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/h3-team-img-1.png" alt="" /></div>
        <p>CRYSTAL BROOKS</p>
        <p style={{"color":"#6d6a6a"}}>Florist</p>
        </div>
        <div className='photo'>
        <div className='image'><img src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/h3-team-img-2.png" alt="" /></div>
        <p>SHIRLEY HARRIS</p>
        <p style={{"color":"#6d6a6a"}}>Manager</p>
        </div>
        <div className='photo'>
        <div className='image'><img src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/h3-team-img-3.png" alt="" /></div>
        <p>BEVERLY CLARK</p>
        <p style={{"color":"#6d6a6a"}}>Florist</p>
        </div>
        <div className='photo'>
        <div className='image'><img src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/h3-team-img-4.png" alt="" /></div>
        <p>AMANDA WATKINS</p>
        <p style={{"color":"#6d6a6a"}}>Florist</p>
        </div>
    </div>
    </div>
   </div>
  );
};

export default FourPhotos;
