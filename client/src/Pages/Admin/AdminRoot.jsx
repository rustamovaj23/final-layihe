import React from 'react'
import { Outlet } from 'react-router-dom'
import "./AdminRoot.css"
import SideBar from '../../Layout/Admin/SideBar/SideBar'
import Header from '../../Layout/Admin/Header/Header'
import Footer from '../../Layout/Admin/Footer/Footer'

const AdminRoot = () => {
  return (
    <>
    <div className="layout-wrapper">
      <div className="sideBar">
        <SideBar/>
      </div>
      <div className="content-wrapper">
        <Header/>
        <div className="page-content">
          <Outlet />
        </div>
        <Footer/>
      </div>
    </div>
    </>
  )
}

export default AdminRoot