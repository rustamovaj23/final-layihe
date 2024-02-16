import React from "react";
import { PiHouseLineBold } from "react-icons/pi";
import { BiCategoryAlt } from "react-icons/bi";
import { CiBoxList } from "react-icons/ci";
import { Link } from "react-router-dom";



import "./SideBar.css";

const SideBar = () => {
  return (
    <nav className="sidebar">
      <a className="menu" href="">Menu</a>
      <ul>
        <li>
        <PiHouseLineBold  style={{"color":"white", "fontWeight":"bolder","marginTop":"5px", "fontSize":"20px"}}/>
          <Link style={{"marginTop":"4px", "fontSize":"16px"}}  to="/admin/dashboard"> Panel</Link>
        </li>
        <li>
        <BiCategoryAlt style={{"color":"white", "fontWeight":"bolder","marginTop":"5px", "fontSize":"20px"}}/>
          <Link  style={{"marginTop":"4px", "fontSize":"16px"}} to="/admin/categories">Categories</Link>
        </li>
        <li>
        <CiBoxList style={{"color":"white", "fontWeight":"bolder","marginTop":"5px", "fontSize":"20px"}}/>
          <Link  style={{"marginTop":"4px", "fontSize":"16px"}} to="/admin/products/">Products</Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
