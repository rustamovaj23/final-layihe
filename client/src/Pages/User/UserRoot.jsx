import React, {useEffect} from 'react'
import Header from '../../Layout/User/Header/Header'
import RightMenu from '../../Layout/User/Header/RightMenu'
import {Outlet} from 'react-router-dom'
import Footer from '../../Layout/User/Footer/Footer'
import ScrollToTop from "../../Helpers/ScrollToTop";
import {useAuth} from "../../Context/AuthContext";
import Axios from "../../Helpers/Axios";

const UserRoot = () => {

    const {login} = useAuth()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            Axios.get('http://localhost:8080/auth/user')
                .then(res => {
                    if (res.data.success) {
                        login(token, res.data.data.user)
                    }
                })
                .catch(err => {
                    console.log('err', err)
                })
        }

    }, [])

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