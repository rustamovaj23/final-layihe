import React, {useState, useEffect} from "react";
import "./Login.css";
import PageTitle from "../../../Components/pageTitle/pageTitle";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {handleError, handleSuccess} from "../../../Helpers/Helpers";
import {useAuth} from "../../../Context/AuthContext";
import Loading from "../../../Components/Loading/Loading";


const Login = () => {
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const navigate = useNavigate()

    const {login} = useAuth()

    const onSubmit = (e) => {
        e.preventDefault()
        setLoading(true)

        axios.post('http://localhost:8080/auth/login', user)
            .then(res => {
                if (res.data.success) {
                    handleSuccess(res.data.message)
                    login(res.data.data.accessToken, res.data.data.user)
                    setTimeout(() => navigate('/'), 1000)
                }
            })
            .catch(err => {
                handleError(err)
            })
            .finally(() => setLoading(false))
    }

    return (
        <div className="my-account">
            {
                loading && <Loading/>
            }
            <PageTitle title='My Account' description='Where flowers are our inspiration'/>
            <div className="container">
                <form onSubmit={onSubmit} className="logins">
                    <div className="login-txt">
                        <p>Login</p>
                    </div>
                    <div className="inputes">
                        <div className="first-inp">
                            <p>Username or email address *</p>
                            <input className="inputlars" type="text"
                                   onChange={e => setUser({...user, username: e.target.value})}/>
                        </div>
                        <div className="second-inp">
                            <p>Password *</p>
                            <input className="inputlars" type="text"
                                   onChange={e => setUser({...user, password: e.target.value})}/>
                        </div>
                    </div>
                    <div className="remember-inp">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Remember me
                            </label>
                        </div>
                        <button type="submit" className="login-btnn">LOG IN</button>
                    </div>
                    <div className="last-txt">
                        <p><a href="#">Lost your password?</a></p>
                        <p>Don't have an account? <Link to="/register">Sign up</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
