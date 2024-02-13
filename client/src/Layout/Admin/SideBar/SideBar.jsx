import React from "react";
import { PiHouseLineBold } from "react-icons/pi";
import { BiCategoryAlt } from "react-icons/bi";
import { CiBoxList } from "react-icons/ci";



import "./SideBar.css";

const SideBar = () => {
  return (
    <nav className="sidebar">
      <a className="menu" href="">Menu</a>
      <ul>
        <li>
        <PiHouseLineBold  style={{"color":"white", "fontWeight":"bolder","marginTop":"5px", "fontSize":"20px"}}/>
          <a style={{"marginTop":"4px", "fontSize":"16px"}}  href="#"> Panel</a>
        </li>
        <li>
        <BiCategoryAlt style={{"color":"white", "fontWeight":"bolder","marginTop":"5px", "fontSize":"20px"}}/>
          <a  style={{"marginTop":"4px", "fontSize":"16px"}} href="/admin/categories">Categories</a>
        </li>
        <li>
        <CiBoxList style={{"color":"white", "fontWeight":"bolder","marginTop":"5px", "fontSize":"20px"}}/>
          <a  style={{"marginTop":"4px", "fontSize":"16px"}} href="/admin/products/">Products</a>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
