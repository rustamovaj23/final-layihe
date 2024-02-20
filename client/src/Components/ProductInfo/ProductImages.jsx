import React from 'react'
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom'
import lgFullScreen from 'lightgallery/plugins/fullscreen'


// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

const ProductImages = ({images}) => {

    const onInit = (e) => {

    }

    return (
        <div className="product-images">
            <div className="left">
                <LightGallery
                    onInit={onInit}
                    speed={500}
                    plugins={[lgZoom, lgFullScreen]}
                >
                    {
                        images.map((image, index) => <a key={`image_index_${index}`}
                                                        data-src={image.url}
                                                        className="gallery-item"
                                                        href={image.url}>
                                <img
                                    src={image.url}
                                    alt=""/>
                            </a>
                        )
                    }
                </LightGallery>
            </div>
            <div className="right">
                <img src={images[0].url} alt=""/>
            </div>
        </div>
    )
}

export default ProductImages