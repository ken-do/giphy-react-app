import React from 'react'

const ImageFullScreen = (props) => {
  return (
    <div className='ImageFullScreen'>
      <img className='giphy-image-fullscreen' src={props.images.downsized.url} height={props.images.downsized.height} width={props.images.downsized.width} />
      <button className='close-btn' onClick={props.onClick}>
        <span className='triangle' />
      </button>
    </div>
  )
}

export default ImageFullScreen
