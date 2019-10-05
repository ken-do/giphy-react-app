import React, { Fragment, Component } from 'react'
import withImage from './HOC/withImage'
import Spinner from './Spinner'
import ImageBox from './ImageBox'

const ImageFullScreen = React.lazy(() => import('./ImageFullScreen'));

export default class ImagesList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      fullScreenImageId: '',
    }


    this.loadImagesOnScroll = this.loadImagesOnScroll.bind(this)
    this.addScrollListener = this.addScrollListener.bind(this)
    this.showFullScreen = this.showFullScreen.bind(this)
    this.closeFullScreen = this.closeFullScreen.bind(this)
  }

  loadImagesOnScroll (e) {
    if (this.props.scrolledToBottom()) {
      this.props.loadImages()
    }
  }

  addScrollListener () {
    window.addEventListener('scroll', this.loadImagesOnScroll, true)
  }

  showFullScreen (e, id) {
    e.preventDefault()
    document.body.classList.add('full-screen')
    this.setState({
      fullScreenImageId: id
    })
  }

  closeFullScreen (e) {
    e.preventDefault()
    document.body.classList.remove('full-screen')
    this.setState({
      fullScreenImageId: ''
    })
  }

  componentDidMount (props) {
    this.props.loadImages()
    this.addScrollListener()
  }

  render () {
    let images, FullScreenImage

    if (this.props.images && this.props.images.length) {
      images = this.props.images.map(item => {
        const Image = withImage(ImageBox, item, (e) => this.showFullScreen(e, item.id))
        return <Image key={item.id} />
      }
      )

      if (this.state.fullScreenImageId) {
        const fullScreenImageItem = (this.props.images.find(item => item.id === this.state.fullScreenImageId))
        const Image = withImage(ImageFullScreen, fullScreenImageItem, this.closeFullScreen)
        FullScreenImage = <Image />
      }
    }

    return (
      <Fragment>
        <div className='ImagesList'>
          {images}
        </div>
        {FullScreenImage}
        <Spinner show={this.props.isLoading} />
      </Fragment>

    )
  }
}
