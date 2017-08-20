import { shallow, mount } from 'enzyme'
import Frequency from '../../../src/components/oscillators/Frequency'

describe("Frequency", () => {

  let frequency = 10
  let mockFunction = (frequency) => {
    expect(frequency).toBe(10)
  }

  it('renders Frequency component with a text box', () => {
    let wrapper = shallow(<Frequency frequency={frequency} onSetFrequency={mockFunction} />)
    expect(wrapper.find('input').length).toBe(1)
  })

  it('renders Frequency component with a button', () => {
    let wrapper = shallow(<Frequency frequency={frequency} onSetFrequency={mockFunction} />)
    expect(wrapper.find('button').length).toBe(1)
  })

  it('passes the value to the function when the button is clicked', () => {
    let wrapper = mount(<Frequency frequency={frequency} onSetFrequency={mockFunction} />)
    wrapper.find('button').simulate('click')
  })

})
