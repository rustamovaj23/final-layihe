import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="top">
          <div className="customer">
            <p>CUSTOMER SERVICE</p>
          </div>
          <div className="texts">
            <p style={{ color: "#8b8b8b", fontSize: "15px" }}>
              Help & Contact Us
            </p>
            <p style={{ color: "#8b8b8b", fontSize: "15px" }}>
              Returns & Refunds
            </p>
            <p style={{ color: "#8b8b8b", fontSize: "15px" }}>Online Stores</p>
            <p style={{ color: "#8b8b8b", fontSize: "15px" }}>
              Terms & Conditions
            </p>
          </div>
        </div>
        <div className="top">
          <div className="company">
            <p>COMPANY</p>
          </div>
          <div className="texts">
            <p style={{ color: "#8b8b8b", fontSize: "15px" }}>About Us</p>
            <p style={{ color: "#8b8b8b", fontSize: "15px" }}>Blog</p>
            <p style={{ color: "#8b8b8b", fontSize: "15px" }}>Order Tracking</p>
            <p style={{ color: "#8b8b8b", fontSize: "15px" }}>FAQ Page</p>
            <p style={{ color: "#8b8b8b", fontSize: "15px" }}>Contact Us</p>
            <p style={{ color: "#8b8b8b", fontSize: "15px" }}>Login</p>
          </div>
        </div>
        <div className="top">
          <div className="social">
            <p>SOCIAL MEDIA</p>
          </div>
          <div className="texts">
            <p style={{ color: "#8b8b8b", fontSize: "15px" }}>Twitter</p>
            <p style={{ color: "#8b8b8b", fontSize: "15px" }}>Instagram</p>
            <p style={{ color: "#8b8b8b", fontSize: "15px" }}>Tumblr</p>
            <p style={{ color: "#8b8b8b", fontSize: "15px" }}>Pinterest</p>
          </div>
        </div>
        <div className="top">
          <div className="archive">
            <p>ARCHIVE</p>
          </div>
          <div className="texts">
            <p style={{ color: "#8b8b8b", fontSize: "15px" }}>Designer Shoes</p>
            <p style={{ color: "#8b8b8b", fontSize: "15px" }}>Pricing</p>
            <p style={{ color: "#8b8b8b", fontSize: "15px" }}>Gallery</p>
            <p style={{ color: "#8b8b8b", fontSize: "15px" }}>Feature Indexx</p>
            <p style={{ color: "#8b8b8b", fontSize: "15px" }}>Login</p>
            <p style={{ color: "#8b8b8b", fontSize: "15px" }}>Help & Support</p>
          </div>
        </div>
      </div>
      <hr className="footer-hr"/>
      <div className="footer-bottom">
        <div className="2018">
        <span style={{"color":"#8b8b8b"}}>© 2018</span> Qode Interactive <span style={{"color":"#8b8b8b"}}>, All Rights Reserved</span>
        </div>
        <div className="img">
        <img src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/footer-bottom-1.png" alt="" />
        </div>
        <div className="ins-face">
            <p style={{ color: "#8b8b8b", fontSize: "15px" }}>INSTAGRAM</p>
            <p style={{ color: "#8b8b8b", fontSize: "15px" }}>FACEBOOK</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
