import React from "react";
import "./Video.css";
import videoFlow from "../../assets/flow.mp4";
const Video = () => {
  return (
    <div className="all">
      <div className="right-side">
        <div className="right-top">
          <p style={{ color: "black", fontSize: "40px" }}>
            We take <span style={{ color: "red" }}>flowers</span> personally
          </p>
          <p style={{ color: "black", fontSize: "40px" }}>
            {" "}
            & we bring you happiness
          </p>
        </div>
        <div className="bottoms">
          <div className="right-middle">
            <p style={{ color: "gray", fontSize: "20px" }}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
            <p style={{ color: "gray", fontSize: "20px" }}>
              Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
            </p>
            <p style={{ color: "gray", fontSize: "20px" }}>
              natoque penatibus et magnis dis parturient montes, nascetur
            </p>
            <p style={{ color: "gray", fontSize: "20px" }}>
              ridiculus mus. Donec quam felis, ultricies nec.
            </p>
          </div>
          <div className="right-bottom">
            <img
              src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/h2-sign-img.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="left-side">
        <video width="500" height="290" controls>
          <source src={videoFlow} type="video/mp4" />
          <source src={videoFlow} type="video/ogg" />
        </video>
      </div>
    </div>
  );
};

export default Video;
