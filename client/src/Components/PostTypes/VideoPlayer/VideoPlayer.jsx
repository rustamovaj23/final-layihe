import React from "react";
import './VideoPlayer.css'
const VideoPlayer = () => {
    return (
        <video
               autoPlay={true}
               muted={true}
               controls
        >
            <source src="/assets/flow.mp4" type="video/mp4"/>
        </video>
    )
}

export default VideoPlayer