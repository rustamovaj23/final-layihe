import React, {useState} from "react";
import axios from "axios"
import "./GetInTouch.css";
import {handleError, handleSuccess} from "../../Helpers/Helpers";
import Loading from "../Loading/Loading";

const GetInTouch = () => {
    const initialMailData = {
        full_name: '',
        email: '',
        phone: '',
        message: ''
    }
    const [loading, setLoading] = useState(false)
    const [mailData, setMailData] = useState(initialMailData)
    const sendMail = async (e) => {
        e.preventDefault()
        setLoading(true)
        axios.post("http://localhost:8080/auth/sendMail", mailData)
            .then(res => {
                if (res.data.success) {
                    handleSuccess(res.data.message)
                    setMailData(initialMailData)
                }
            })
            .catch(err => handleError(err))
            .finally(() => setLoading(false))
    }
    return (
        <div className="photo-and-mail">
            {
                loading && <Loading/>
            }
            <div className="container">
                <div className="square-photo">
                    <div className="phot">
                        <img
                            src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/contact-img-1.png"
                            alt=""
                        />
                    </div>
                    <div className="three-texts">
                        <p>
                            We take <span>flowers</span> personally, <br/> with your thoughts in hand…</p>
                    </div>
                    <div className="four-texts">
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            Aenean commodo ligula eget dolor. Aenean massa. Cum
                            sociis natoque penatibus et magnis dis parturient montes,
                            nascetur ridiculus mus. Donec quam felis, ultricies nec.
                        </p>
                    </div>
                    <div className="btm">
                        <img
                            src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/h2-sign-img.png"
                            alt=""
                        />
                    </div>
                </div>
                <form onSubmit={sendMail} className="mail">
                    <div className="touch-text">
                        <p>Get in Touch!</p>
                    </div>
                    <div className="two-text">
                        <p>Class aptent taciti sociosqu ad litora torquent per
                            conubia nostr.
                            Mauris in erat justullam ac urna eu felis dapib</p>
                    </div>
                    <div className="inputs">
                        <input type="text" name="" id="" placeholder="Your Full Name..."
                               value={mailData.full_name}
                               onChange={e => setMailData({...mailData, full_name: e.target.value})}/>
                        <input type="text" name="" id="" placeholder="Email"
                               value={mailData.email}
                               onChange={e => setMailData({...mailData, email: e.target.value})}/>
                        <input type="text" name="" id="" placeholder="Phone"
                               value={mailData.phone}
                               onChange={e => setMailData({...mailData, phone: e.target.value})}/>
                        <textarea name="messagge" id="messagge" cols="30" rows="10"
                                  value={mailData.message}
                                  onChange={e => setMailData({...mailData, message: e.target.value})}
                                  placeholder="Write Something..."></textarea>
                    </div>
                    <div className="send-button">
                        <button type="submit">SEND MESSAGE</button>
                    </div>
                </form>
            </div>
        </div>
    )
        ;
};

export default GetInTouch;
