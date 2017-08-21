import { shallow, mount } from 'enzyme'
import MixerOsc2 from '../../../src/components/mixer/MixerOsc2'

describe("MixerOsc2", () => {

  let value = 10
  let mockFunction = (mixerOsc2) => {
    expect(mixerOsc2).toBe(10)
  }

  it('renders MixerOsc2 component with a text box', () => {
    let wrapper = shallow(<MixerOsc2 mixerOsc2={value} onSetMixerOsc2={mockFunction} />)
    expect(wrapper.find('input').length).toBe(1)
  })

  it('renders MixerOsc2 component with a button', () => {
    let wrapper = shallow(<MixerOsc2 mixerOsc2={value} onSetMixerOsc2={mockFunction} />)
    expect(wrapper.find('button').length).toBe(1)
  })

  it('passes the value to the function when the button is clicked', () => {
    let wrapper = mount(<MixerOsc2 mixerOsc2={value} onSetMixerOsc2={mockFunction} />)
    wrapper.find('button').simulate('click')
  })

})
