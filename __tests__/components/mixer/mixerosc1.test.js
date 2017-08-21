import { shallow, mount } from 'enzyme'
import MixerOsc1 from '../../../src/components/mixer/MixerOsc1'

describe("MixerOsc1", () => {

  let value = 10
  let mockFunction = (mixerOsc1) => {
    expect(mixerOsc1).toBe(10)
  }

  it('renders MixerOsc1 component with a text box', () => {
    let wrapper = shallow(<MixerOsc1 mixerOsc1={value} onSetMixerOsc1={mockFunction} />)
    expect(wrapper.find('input').length).toBe(1)
  })

  it('renders MixerOsc1 component with a button', () => {
    let wrapper = shallow(<MixerOsc1 mixerOsc1={value} onSetMixerOsc1={mockFunction} />)
    expect(wrapper.find('button').length).toBe(1)
  })

  it('passes the value to the function when the button is clicked', () => {
    let wrapper = mount(<MixerOsc1 mixerOsc1={value} onSetMixerOsc1={mockFunction} />)
    wrapper.find('button').simulate('click')
  })

})
