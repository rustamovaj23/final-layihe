import React from 'react'
import Header from '../../Layout/User/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../Layout/User/Footer/Footer'

const UserRoot = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default UserRoot