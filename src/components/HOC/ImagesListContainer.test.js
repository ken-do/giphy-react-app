import { mapStateToProps, mapDispatchToProps, scrolledToBottom } from './ImagesListContainer'
import configureMockStore from 'redux-mock-store'

const mockStore = configureMockStore()

describe('ImagesListContainer', () => {
  describe('mapStateToProps', () => {
    it('should return a list of images from the global state', () => {
      const mockState = { images: [], fetch: { loading: false } }
      const mockProps = { images: [], isLoading: false }
      expect(mapStateToProps(mockState)).toEqual(mockProps)
    })
  })

  describe('mapDispatchToProps', () => {
    const store = mockStore({})

    it('should have a loadImages function in the returned object', () => {
      const props = mapDispatchToProps(store.dispatch)
      expect(props.loadImages).toBeInstanceOf(Function)
    })

    it('should have a scrolledToBottom function in the returned object', () => {
      const props = mapDispatchToProps(store.dispatch)
      expect(props.scrolledToBottom).toBeInstanceOf(Function)
    })
  })

  describe('scrolledToBottom', () => {
    it('should return true if a user has scrolled to a bottom of document', () => {
      expect(scrolledToBottom(1500, 750, 745)).toEqual(true)
    })

    it('should return false if a user has not scrolled to a bottom of document', () => {
      expect(scrolledToBottom(1500, 750, 600)).toEqual(false)
    })
  })
})
