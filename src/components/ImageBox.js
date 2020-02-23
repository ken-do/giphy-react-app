import React from 'react'

const ImageBox = props => {
    return (
        <a className="ImageBox" href={props.url} onClick={props.onClick}>
            <img
                className="giphy-image"
                src={props.images.fixed_height_downsampled.url}
                height={props.images.fixed_height_downsampled.height}
                width={props.images.fixed_height_downsampled.width}
            />
        </a>
    )
}

export default ImageBox
