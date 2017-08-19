import { shallow, mount } from 'enzyme'
import Slop from '../../../../src/components/slop/Slop'

describe("Slop", () => {

  let slop = 10
  let mockFunction = (slop) => {
    expect(slop).toBe(10)
  }

  it('renders Slop component with a text box', () => {
    let wrapper = shallow(<Slop slop={slop} onSetSlop={mockFunction} />)
    expect(wrapper.find('input').length).toBe(1)
  })

  it('renders Slop component with a button', () => {
    let wrapper = shallow(<Slop slop={slop} onSetSlop={mockFunction} />)
    expect(wrapper.find('button').length).toBe(1)
  })

  it('passes the value to the function when the button is clicked', () => {
    let wrapper = mount(<Slop slop={slop} onSetSlop={mockFunction} />)
    wrapper.find('button').simulate('click')
  })

})
