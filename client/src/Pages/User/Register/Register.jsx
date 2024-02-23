import React, {useState} from "react";
import PageTitle from "../../../Components/pageTitle/pageTitle";
import {Link, useNavigate} from "react-router-dom";
import Loading from "../../../Components/Loading/Loading";
import axios from "../../../Helpers/Axios";
import {handleError, handleSuccess} from "../../../Helpers/Helpers";
import {useAuth} from '../../../Context/AuthContext';

const Register = () => {
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState({
        username: '',
        email: '',
        firstname: '',
        lastname: '',
        phone: '',
        address: '',
        password: ''
    })
    const navigate = useNavigate()
    const {login} = useAuth();

    const register = (e) => {
        e.preventDefault()
        setLoading(true)
        axios.post('auth/register', user)
            .then(res => {
                if (res.data.success) {
                    handleSuccess(res.data.message)
                    login(res.data.data.accessToken, res.data.data.user)
                    setTimeout(() => navigate('/'), 1000)
                }
            })
            .catch(err => handleError(err))
            .finally(() => setLoading(false))
    }

    return (
        <div className="my-account">
            <PageTitle title='Register' description='Where flowers are our inspiration'/>
            {
                loading && <Loading/>
            }
            <div className="container">
                <div className="logins">
                    <div className="login-txt">
                        <p>Register</p>
                    </div>
                    <form onSubmit={register} className="inputes">
                        <div className="first-inp">
                            <p>Username *</p>
                            <input className="inputlars" type="text"
                                   onChange={e => setUser({...user, username: e.target.value})}/>
                        </div>
                        <div className="first-inp">
                            <p>E-mail *</p>
                            <input className="inputlars" type="email"
                                   onChange={e => setUser({...user, email: e.target.value})}/>
                        </div>
                        <div className="first-inp">
                            <p>Firstname *</p>
                            <input className="inputlars" type="text"
                                   onChange={e => setUser({...user, firstname: e.target.value})}/>
                        </div>
                        <div className="first-inp">
                            <p>Lastname *</p>
                            <input className="inputlars" type="text"
                                   onChange={e => setUser({...user, lastname: e.target.value})}/>
                        </div>
                        <div className="first-inp">
                            <p>Phone *</p>
                            <input className="inputlars" type="number"
                                   onChange={e => setUser({...user, phone: e.target.value})}/>
                        </div>
                        <div className="first-inp">
                            <p>Address *</p>
                            <input className="inputlars" type="text"
                                   onChange={e => setUser({...user, address: e.target.value})}/>
                        </div>
                        <div className="second-inp">
                            <p>Password *</p>
                            <input className="inputlars" type="text"
                                   onChange={e => setUser({...user, password: e.target.value})}/>
                        </div>
                        <div className="remember-inp">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Remember me
                                </label>
                            </div>
                            <button type="submit" className="login-btnn">Sign up</button>
                        </div>
                        <div className="last-txt">
                            <p><a href="#">Lost your password?</a></p>
                            <p>Do you have an account? <Link to="/login">Sign in</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
