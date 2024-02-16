import React from 'react'
import "./Header.css"
import { MdAccountCircle } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";



const Header = () => {
  return (
<div className="all-admin-header">
<div className='background'>
<div className='admin-header'> 
    <MdAccountCircle style={{"color":"white", "fontSize":"26px"}}/>
<div className='p-icon-dropdown'>
<a href="#"  type="button" data-bs-toggle="dropdown" aria-expanded="false" className="dropdown-toggle" style={{"color":"white", "fontWeight":"bold", "fontFamily":"sans-serif"}}>Jala Rustamova</a>
<ul className="dropdown-menu">
  <li>
    <a href="#" className="dropdown-item">Exit</a>
  </li>
</ul>
    {/* <IoIosArrowDown style={{"fontWeight":"bolder", "color":"white"}}/> */}
</div>
    </div>
</div>
</div>
  )
}

export default Header