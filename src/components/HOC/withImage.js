import React, { Component } from 'react'

const withImage = (WrappedComponent, item, onClick) => {
  return class extends Component {
    render () {
      return <WrappedComponent url={item.url} images={item.images} onClick={onClick} />
    }
  }
}

export default withImage
