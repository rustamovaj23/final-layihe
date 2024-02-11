import React from 'react'
import "./Auth.css"
import { FaRegUser } from "react-icons/fa6";


const Auth = () => {
  return (
    <div className="login-container">
    <form className="login-form">
      <h2 style={{"fontWeight":"bold", "fontFamily":"inherit"}}>Login</h2>
      <div className="input-group">
        <label htmlFor="username">Username:</label>
        <input  type="text" id="username" name="username" placeholder="Type your email" />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="Type your password" />
      </div>
      <p style={{"fontSize":"15px", "paddingLeft":"70px", "cursor":"pointer", "color":"gray"}}>Forgot password?</p>
      <button type="submit">Login</button>
    </form>
  </div>
  )
}

export default Auth