import React, {useEffect} from 'react'
import {Outlet} from 'react-router-dom'
import "./AdminRoot.css"
import SideBar from '../../Layout/Admin/SideBar/SideBar'
import Header from '../../Layout/Admin/Header/Header'
import Footer from '../../Layout/Admin/Footer/Footer'
import Axios from "../../Helpers/Axios";
import {useAuth} from "../../Context/AuthContext";


const AdminRoot = () => {
    const {setIsLoggedIn} = useAuth()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            window.location = '/admin'
        } else {
            Axios.get('http://localhost:8080/auth/user')
                .then(res => {
                    if (res.data.success) {
                        setIsLoggedIn(true)
                    }
                })
                .catch(err => {
                    console.log('err', err)
                    window.location = '/admin'
                })
        }
    }, [])

    return (
        <>
            <div className="layout-wrapper">
                <div className="sideBar">
                    <SideBar/>
                </div>
                <div className="content-wrapper">
                    <Header/>
                    <div className="page-content">
                        <Outlet/>
                    </div>
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default AdminRoot