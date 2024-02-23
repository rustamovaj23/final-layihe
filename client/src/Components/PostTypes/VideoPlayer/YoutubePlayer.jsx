import React from "react";
import './YoutubePlayer.css'

const YoutubePlayer = () => {
    return (
        <iframe src="https://www.youtube.com/embed/K-0cjGCNYfs"
                title="How to make a Japanese Carnation Bouquet" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen></iframe>
    )
}

export default YoutubePlayer