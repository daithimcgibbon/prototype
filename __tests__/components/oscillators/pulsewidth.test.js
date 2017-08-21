import { shallow, mount } from 'enzyme'
import PulseWidth from '../../../src/components/oscillators/PulseWidth'

describe("PulseWidth", () => {

  let pulseWidth = 10
  let mockFunction = (pulseWidth) => {
    expect(pulseWidth).toBe(10)
  }

  it('renders PulseWidth component with a text box', () => {
    let wrapper = shallow(<PulseWidth pulseWidth={pulseWidth} onSetPulseWidth={mockFunction} />)
    expect(wrapper.find('input').length).toBe(1)
  })

  it('renders PulseWidth component with a button', () => {
    let wrapper = shallow(<PulseWidth pulseWidth={pulseWidth} onSetPulseWidth={mockFunction} />)
    expect(wrapper.find('button').length).toBe(1)
  })

  it('passes the value to the function when the button is clicked', () => {
    let wrapper = mount(<PulseWidth pulseWidth={pulseWidth} onSetPulseWidth={mockFunction} />)
    wrapper.find('button').simulate('click')
  })

})
