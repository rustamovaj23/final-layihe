import React from 'react'
import Header from '../../Layout/User/Header/Header'
import RightMenu from '../../Layout/User/Header/RightMenu'
import {Outlet} from 'react-router-dom'
import Footer from '../../Layout/User/Footer/Footer'
import ScrollToTop from "../../Helpers/ScrollToTop";

const UserRoot = () => {
    return (
        <>
            <Header/>
            <RightMenu/>
            <ScrollToTop/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default UserRoot