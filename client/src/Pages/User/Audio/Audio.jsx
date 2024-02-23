import React from 'react'
import PageTitle from "../../../Components/pageTitle/pageTitle";
import RightBar from '../../../Components/PostTypes/RightBar/RightBar'
import FiorelloSecond from '../../../Components/PostTypes/FiorelloSecond/FiorelloSecond'
import FiorelloThird from "../../../Components/PostTypes/FiorelloThrid/FiorelloThird";
import FiorelloForth from "../../../Components/PostTypes/FiorelloForth/FiorelloForth";
import PostTypesImages from "../../../Components/PostTypes/PostTypesImages/PostTypesImages";
import PostTypesBottom from "../../../Components/PostTypes/PostTypesBottom/PostTypesBottom";
import PostTypesComments from "../../../Components/PostTypes/PostTypesComments/PostTypesComments";
import VideoPlayer from "../../../Components/PostTypes/VideoPlayer/VideoPlayer";


const Audio = () => {
    return (
        <div className="all-link-page">
            <PageTitle title="Fiorello" description="Where flowers are our inspiration"/>
            <div className="container">
                <div className="row">
                    <div className="fiorello-left col-lg-9 col-12">
                        <VideoPlayer/>
                        <h3>The Sound of Flowers</h3>
                        <FiorelloSecond/>
                        <FiorelloThird/>
                        <FiorelloForth/>
                        <PostTypesImages/>
                        <PostTypesBottom/>
                        <hr/>
                        <PostTypesComments/>
                    </div>
                    <RightBar/>
                </div>
            </div>
        </div>
    )
}

export default Audio