import React from 'react'

const FiorelloTop = ({text, author = ''}) => {
    return (
        <div className="fiorello-left-top">
            <p>{text}</p>
            <p>{author}</p>
        </div>
    )
}
export default FiorelloTop