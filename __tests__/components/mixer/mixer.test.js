import { shallow, mount } from 'enzyme'
import Mixer from '../../../src/components/mixer/Mixer'

describe("Mixer", () => {

  const onSetMixerOsc1 = (mixerOsc1) => {
    expect(mixerOsc1).toBe(0)
  }

  const onSetMixerOsc2 = (mixerOsc2) => {
    expect(mixerOsc2).toBe(0)
  }

  const onSetMixerNoise = (noise) => {
    expect(noise).toBe(0)
  }

  const onSetMixerSubOctave = (subOctave) => {
    expect(subOctave).toBe(0)
  }

  const wrapper = mount(
    <Mixer mixer={_prophet6.mixer}
      onSetMixerOsc1={onSetMixerOsc1}
      onSetMixerOsc2={onSetMixerOsc2}
      onSetMixerNoise={onSetMixerNoise}
      onSetMixerSubOctave={onSetMixerSubOctave}
    />)

  it('renders Mixer component and sub components', () => {
    expect(wrapper.find('MixerOsc1').length).toBe(1)
    expect(wrapper.find('MixerOsc2').length).toBe(1)
    expect(wrapper.find('Noise').length).toBe(1)
    expect(wrapper.find('SubOctave').length).toBe(1)
  })

  it('renders a MixerOsc1 component with an onSetMixerOsc1 function', () => {
    const mixerOsc1Wrapper = wrapper.find('MixerOsc1')
    mixerOsc1Wrapper.find('button').simulate('click')
  })

  it('renders a MixerOsc2 component with an onSetMixerOsc2 function', () => {
    const mixerOsc2Wrapper = wrapper.find('MixerOsc2')
    mixerOsc2Wrapper.find('button').simulate('click')
  })

  it('renders a Noise component with an onSetMixerNoise function', () => {
    const noiseWrapper = wrapper.find('Noise')
    noiseWrapper.find('button').simulate('click')
  })

  it('renders a SubOctave component with an onSetMixerSubOctave function', () => {
    const subOctaveWrapper = wrapper.find('SubOctave')
    subOctaveWrapper.find('button').simulate('click')
  })

})
