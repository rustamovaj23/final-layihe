import React from "react";
import "./GetInTouch.css";

const GetInTouch = () => {
  return (
    <div className="photo-and-mail">
      <div className="square-photo">
        <div className="phot">
          <img
            src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/contact-img-1.png"
            alt=""
          />
        </div>
        <div className="three-texts">
          <p style={{ fontSize: "40px" }}>
            We take{" "}
            <span style={{ color: "red", fontSize: "40px" }}>flowers</span>{" "}
            personally,
          </p>
          <p style={{ fontSize: "40px" }}>with your thoughts in</p>
          <p style={{ fontSize: "40px" }}>hand…</p>
        </div>
        <div className="four-texts">
          <p style={{ color: "gray", fontSize: "20px" }}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </p>
          <p style={{ color: "gray", fontSize: "20px" }}>
            Aenean commodo ligula eget dolor. Aenean massa. Cum
          </p>
          <p style={{ color: "gray", fontSize: "20px" }}>
            sociis natoque penatibus et magnis dis parturient montes,
          </p>
          <p style={{ color: "gray", fontSize: "20px" }}>
            nascetur ridiculus mus. Donec quam felis, ultricies nec.
          </p>
        </div>
        <div className="btm">
          <img
            src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/h2-sign-img.png"
            alt=""
          />
        </div>
      </div>
      <div className="mail">
        <div className="touch-text">
          <p style={{"fontSize":"40px"}}>Get in Touch!</p>
        </div>
        <div className="two-text">
            <p style={{ color: "gray", fontSize: "17px" }}>Class aptent taciti sociosqu ad litora torquent per conubia nostr.</p>
            <p style={{ color: "gray", fontSize: "17px" }}>Mauris in erat justullam ac urna eu felis dapib</p>
        </div>
        <div className="inputs">
            <input  type="text" name="" id="" placeholder="Your Full Name..."/>
            <input type="text" name="" id="" placeholder="Email"/>
            <input type="text" name="" id="" placeholder="Phone"/>
            <textarea name="" id="" cols="30" rows="10" placeholder="Write Something..."></textarea>
        </div>
        <div className="send-button">
            <button>SEND MESSAGE</button>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
