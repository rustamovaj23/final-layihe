import React from "react";
import "./MyAccount.css";
import PageTitle from "../../../Components/pageTitle/pageTitle";


const MyAccount = () => {
    return (
        <div className="my-account">
            <PageTitle title='My Account' description='Where flowers are our inspiration'/>
            <div className="container">
                <div className="logins">
                    <div className="login-txt">
                        <p>Login</p>
                    </div>
                    <div className="inputes">
                        <div className="first-inp">
                            <p>Username or email address *</p>
                            <input className="inputlars" type="text"/>
                        </div>
                        <div className="second-inp">
                            <p>Password *</p>
                            <input className="inputlars" type="text"/>
                        </div>
                    </div>
                    <div className="remember-inp">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Remember me
                            </label>
                        </div>
                        <button className="login-btnn">LOG IN</button>
                    </div>
                    <div className="last-txt">
                        <p>Lost your password?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyAccount;
