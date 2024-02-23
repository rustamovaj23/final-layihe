import React from 'react'
import "./Gallery.css"
import Pictures from '../../../Components/Pictures/Pictures'
import PageTitle from "../../../Components/pageTitle/pageTitle";
const Gallery = () => {
    return (
        <div>
            <PageTitle title='Portfolio Gallery'/>
            <Pictures/>
        </div>
    )
}

export default Gallery