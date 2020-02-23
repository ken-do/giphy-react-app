import { connect } from 'react-redux'
import ImagesList from '../ImagesList'
import { loadImages } from '../../actions/actionCreators'
import _ from 'lodash'

export const scrolledToBottom = (
    documentOffsetHeight,
    windowInnerHeight,
    windowsSrollY,
) => {
    const offsetHeight = documentOffsetHeight || document.body.offsetHeight
    const innerHeight = windowInnerHeight || window.innerHeight
    const scrollY = windowsSrollY || window.scrollY

    if (!offsetHeight || !innerHeight || !scrollY) {
        return false
    }

    return offsetHeight - (innerHeight + scrollY) < 20
}

export const mapStateToProps = state => {
    return {
        images: state.images,
        isLoading: state.fetch.loading,
    }
}

export const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadImages: _.debounce(() => dispatch(loadImages()), 400),
        scrolledToBottom: scrolledToBottom,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImagesList)
