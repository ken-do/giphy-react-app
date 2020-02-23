import React, { useEffect, useState } from 'react'
import withImage from './HOC/withImage'
import Spinner from './Spinner'
import ImageBox from './ImageBox'

const ImageFullScreen = React.lazy(() => import('./ImageFullScreen'))

const ImagesList = props => {
    let images, FullScreenImage

    const [fullScreenImageId, setFullScreenImageId] = useState('')

    const showFullScreen = (e, id) => {
        e.preventDefault()
        document.body.classList.add('full-screen')
        setFullScreenImageId(id)
    }

    const closeFullScreen = e => {
        e.preventDefault()
        document.body.classList.remove('full-screen')
        setFullScreenImageId('')
    }

    const loadImagesOnScroll = e => {
        if (props.scrolledToBottom()) {
            props.loadImages()
        }
    }

    const addScrollListener = () => {
        window.addEventListener('scroll', loadImagesOnScroll, true)
    }

    const [imagesFetched, setImagesFetched] = useState(false)
    useEffect(() => {
        if (!images && !imagesFetched) {
            props.loadImages()
            addScrollListener()
            setImagesFetched(true)
        }
    })

    if (props.images && props.images.length) {
        images = props.images.map(item => {
            const Image = withImage(ImageBox, item, e =>
                showFullScreen(e, item.id),
            )
            return <Image key={item.id} />
        })

        if (fullScreenImageId) {
            const fullScreenImageItem = props.images.find(
                item => item.id === fullScreenImageId,
            )
            const Image = withImage(
                ImageFullScreen,
                fullScreenImageItem,
                closeFullScreen,
            )
            FullScreenImage = <Image />
        }
    }

    return (
        <>
            <div className="ImagesList">{images}</div>
            {FullScreenImage}
            <Spinner show={props.isLoading} />
        </>
    )
}

export default ImagesList
