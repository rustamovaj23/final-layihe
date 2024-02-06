import React from 'react'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { RiShoppingBagLine } from "react-icons/ri";
import "./Header.css"



const Header = () => {
  return (
    <div className='user-header'>
        <div className='fiorello'>
            <span style={{"color":"red", "fontSize":'50px'}}>FIOR</span>ELLO
        </div>
        <div className='links'>
            <ul>
                <li>
                    <Link  to={"/"}>HOME</Link>
                    <Link to={"/faqPage"}>FAQ PAGE</Link>
                    <Link>SHOP</Link>
                    <Link to={"/portfolio"}>PORTFOLIO</Link>
                    <Link>BLOG</Link>
                    <Link>ELEMENTS</Link>
                </li>
            </ul>
        </div>
        <div>
        <CiSearch />
        <RiShoppingBagLine />

        </div>

    </div>
  )
}

export default Header