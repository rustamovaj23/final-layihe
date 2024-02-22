import React from 'react'
import "./Flowers.css"

const Flowers = () => {
    return (
        <div className="portfolio-standart">
            <div className="container">
                <div className="flowers">
                    <div className="flower">
                        <img
                            src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/port-gallery-img-1.jpg"/>
                        <a href="#" className="flower-name">
                            Flower power
                        </a>
                        <div className="categories">
                            <a href="#">Floristics /</a>
                            <a href="#">Flowers</a>
                        </div>
                    </div>
                    <div className="flower">
                        <img
                            src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/port-gallery-img-2.jpg"/>
                        <a href="#" className="flower-name">
                            Floristry shops
                        </a>
                        <div className="categories">
                            <a href="#">Floristry /</a>
                            <a href="#">Herbs</a>
                        </div>
                    </div>
                    <div className="flower">
                        <img
                            src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/port-gallery-img-3.jpg"/>
                        <a href="#" className="flower-name">
                            English Garden
                        </a>
                        <div className="categories">
                            <a href="#">Floristics /</a>
                            <a href="#">Flowers</a>
                        </div>
                    </div>
                    <div className="flower">
                        <img
                            src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/port-gallery-img-6.jpg"/>
                        <a href="#" className="flower-name">
                            Floriculture
                        </a>
                        <div className="categories">
                            <a href="#">Floristry /</a>
                            <a href="#">Herbs</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Flowers