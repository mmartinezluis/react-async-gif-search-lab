import React from 'react'

const GifList = props => {
    // console.log(props)
    return(
        <ul>
            {props.images.map(image => <img key={image} src={image} alt='gif'/>)}
        </ul>
    )
}

export default GifList

