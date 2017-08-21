import { shallow, mount } from 'enzyme'
import Noise from '../../../src/components/mixer/Noise'

describe("Noise", () => {

  let value = 10
  let mockFunction = (noise) => {
    expect(noise).toBe(10)
  }

  it('renders Noise component with a text box', () => {
    let wrapper = shallow(<Noise noise={value} onSetMixerNoise={mockFunction} />)
    expect(wrapper.find('input').length).toBe(1)
  })

  it('renders Noise component with a button', () => {
    let wrapper = shallow(<Noise noise={value} onSetMixerNoise={mockFunction} />)
    expect(wrapper.find('button').length).toBe(1)
  })

  it('passes the value to the function when the button is clicked', () => {
    let wrapper = mount(<Noise noise={value} onSetMixerNoise={mockFunction} />)
    wrapper.find('button').simulate('click')
  })

})
