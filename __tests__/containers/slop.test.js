import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import SlopContainer from '../../src/containers/SlopContainer'
import Slop from '../../src/components/slop/Slop'
import { setSlop } from '../../src/actions'
import C from '../../src/constants'

const fakeStoreFactory = (state) => {
  return {
    default: () => {},
    subscribe: () => {},
    dispatch: (action) => {
      expect(action).toEqual({ slop: 0, type: C.SET_SLOP })
    },
    getState: () => {
      return {
        ...state
      }
    }
  }
}

describe("Slop", () => {

  const store = fakeStoreFactory(_prophet6)
  const wrapper = mount(
    <Provider store={store}>
      <SlopContainer />
    </Provider>
  )

  let slopContainerWrapper = wrapper.find(SlopContainer)
  let slopWrapper = slopContainerWrapper.find(Slop)

  it('should render a SlopContainer')
    expect(wrapper.find(SlopContainer).length).toBe(1)

  it('should render a Slop component inside the SlopContainer')
    expect(slopContainerWrapper.find(Slop).length).toBe(1)

  it('it should render a Slop component with a slop prop of 0')
    expect(slopWrapper.prop('slop')).toBe(0)

  it('it should render a Slop component with a onSetSlop function prop')
    expect(slopWrapper.prop('onSetSlop')).toBeTruthy()

  it('should call setSlop action when button clicked')
    slopWrapper.find('button').simulate('click')

})
