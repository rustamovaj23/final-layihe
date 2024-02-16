import React, {useState} from 'react'
import "./Auth.css"
import axios from "axios";
import Loading from '../../Components/Loading/Loading'
import {handleError, handleSuccess} from '../../Helpers/Helpers'

const Auth = () => {
    const [loading, setLoading] = useState(false)
    const [userData, setUserData] = useState({email: null, password: null})


    const onSubmit = (e) => {
        e.preventDefault()
        setLoading(true)

        axios.post('http://localhost:8080/auth/login', userData)
            .then(res => {
                console.log('res', res.data)

                if (res.data.success) {
                    handleSuccess(res.data.message)
                    localStorage.setItem('token', res.data.data.accessToken)
                    setTimeout(() => window.location = '/admin/dashboard', 1000)
                }
            })
            .catch(err => {
                handleError(err)
            })
            .finally(() => setLoading(false))
    }


    return (
        <div className="login-container">
            {
                loading && <Loading/>
            }
            <form onSubmit={onSubmit} className="login-form">
                <h2 style={{"fontWeight": "bold", "fontFamily": "inherit"}}>Login</h2>
                <div className="input-group">
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email" name="email"
                           onChange={e => setUserData({...userData, email: e.target.value})}
                           placeholder="Type your email" required={true}/>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password"
                           onChange={e => setUserData({...userData, password: e.target.value})}
                           placeholder="Type your password" required={true}/>
                </div>
                <p style={{"fontSize": "15px", "paddingLeft": "70px", "cursor": "pointer", "color": "gray"}}>Forgot
                    password?</p>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Auth