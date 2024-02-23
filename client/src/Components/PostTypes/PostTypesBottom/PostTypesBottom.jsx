import React from "react";
import {FaRegComment} from "react-icons/fa6";

const PostTypesBottom = () => {
    return (
        <div>
            <div className="fiorello-left-fifth">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis dolor, malesuada
                    non leo a, vehicula ornare nibh. Integer eget bibendum nulla, nec hendrerit magna. Nunc
                    vitae ipsum interdum, varius magna ut, sollicitudin nunc. Pellentesque habitant morbi
                    tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum aliquam
                    condimentum ligula sit amet imperdiet. Sed facilisis ipsum nulla, at auctor mauris
                    imperdiet at. Nam placerat vulputate libero at fermentum. Nullam ut lacus ac elit luctus
                    tempor ut nec turpis. Quisque fermentum feugiat neque, ut ultrices nisi. Praesent eu
                    euismod mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida
                    euismod efficitur. Aenean ut purus quis arcu suscipit viverra non ornare nunc. Donec
                    bibendum at</p>
            </div>
            <div className="fiorello-left-ttt">
                <p>03.05.2018</p>
                <p>BY SHIRLEY BURKE</p>
                <p><FaRegComment style={{"fontSize": "16px", "marginRight": "5px"}}/> 2</p>
            </div>
        </div>
    )
}
export default PostTypesBottom