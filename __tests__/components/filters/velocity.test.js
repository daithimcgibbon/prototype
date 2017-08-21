import { shallow, mount } from 'enzyme'
import Velocity from '../../../src/components/filters/Velocity'

describe("Velocity", () => {

  let value = true
  let mockFunction = (velocity) => {
    expect(velocity).toBe(true)
  }

  it('renders Velocity component with a text box', () => {
    let wrapper = shallow(<Velocity velocity={value} onSetVelocity={mockFunction} />)
    expect(wrapper.find('input').length).toBe(1)
  })

  it('renders Velocity component with a button', () => {
    let wrapper = shallow(<Velocity velocity={value} onSetVelocity={mockFunction} />)
    expect(wrapper.find('button').length).toBe(1)
  })

  it('passes the value to the function when the button is clicked', () => {
    let wrapper = mount(<Velocity velocity={value} onSetVelocity={mockFunction} />)
    wrapper.find('button').simulate('click')
  })

})
