import React from "react";
import "./MyAccount.css";
import { MdCheckBoxOutlineBlank } from "react-icons/md";


const MyAccount = () => {
  return (
    <div className="my-account">
      <div className="account">
        <p style={{ "font-family": "Playfair Display", fontSize: "55px" }}>
          My Account
        </p>
        <p
          style={{
            "font-family": "Playfair Display",
            fontSize: "17px",
            color: "gray",
          }}
        >
          Where flowers are our inspiration
        </p>
      </div>
      <div className="logins">
      <div className="login-txt">
        <p style={{"fontSize":"40px","font-family": "Playfair Display", "fontWeight":"bold" }}>Login</p>
      </div>
      <div className="inputes">
      <div className="first-inp">
        <p style={{"color":"gray","fontSize":"18px"}}>Username or email address *</p>
        <input className="inputlars" type="text" />
      </div>
      <div className="second-inp">
        <p style={{"color":"gray","fontSize":"18px"}}>Password *</p>
        <input className="inputlars" type="text" />
      </div>
      </div>
      <div className="remember-inp">
      <MdCheckBoxOutlineBlank className="check" style={{"fontSize":"20px"}} />
        <p style={{"color":"gray","fontSize":"18px"}}>Remember me</p>
        <button className="login-btnn">LOG IN</button>
      </div>
      <div className="last-txt">
        <p style={{"color":"gray","fontSize":"18px"}}>Lost your password?</p>
      </div>
      </div>
    </div>
  );
};

export default MyAccount;
