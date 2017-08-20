import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import HighPassFilterContainer from '../../src/containers/HighPassFilterContainer'
import Cutoff from '../../src/components/filters/Cutoff'
import { setHighPassCutoff } from '../../src/actions'
import C from '../../src/constants'

const fakeStoreFactory = (state) => {
  return {
    default: () => {},
    subscribe: () => {},
    dispatch: (action) => {
      expect(action).toEqual({ cutoff: 0, type: C.SET_HIGHPASSFILTER_CUTOFF })
    },
    getState: () => {
      return {
        ...state
      }
    }
  }
}

describe("Cutoff", () => {

  const store = fakeStoreFactory(_prophet6)
  const wrapper = mount(
    <Provider store={store}>
      <HighPassFilterContainer />
    </Provider>
  )

  let highPassFilterContainerWrapper = wrapper.find(HighPassFilterContainer)
  let cutoffWrapper = highPassFilterContainerWrapper.find(Cutoff)

  it('should render a HighPassFilterContainer')
    expect(wrapper.find(HighPassFilterContainer).length).toBe(1)

  it('should render a Cutoff component inside the HighPassFilterContainer')
    expect(highPassFilterContainerWrapper.find(Cutoff).length).toBe(1)

  it('it should render a Cutoff component with a cutoff prop of 0')
    expect(cutoffWrapper.prop('cutoff')).toBe(0)

  it('it should render a Cutoff component with a onSetCutoff function prop')
    expect(cutoffWrapper.prop('onSetCutoff')).toBeTruthy()

  it('should call setHighPassCutoff action when button clicked')
    cutoffWrapper.find('button').simulate('click')

})
