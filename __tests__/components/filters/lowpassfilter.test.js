import { shallow, mount } from 'enzyme'
import HighPassFilter from '../../../src/components/filters/HighPassFilter'

describe("HighPassFilter", () => {

  const onSetCutoff = (cutoff) => {
    expect(cutoff).toBe(0)
  }

  const onSetResonance = (resonance) => {
    expect(resonance).toBe(0)
  }

  const onSetEnvAmount = (envAmount) => {
    expect(envAmount).toBe(0)
  }

  const onSetVelocity = (velocity) => {
    expect(velocity).toBe(false)
  }

  const onSetKeyboard = (keyboard) => {
    expect(keyboard).toBe(false)
  }

  const onSetHalf = (half) => {
    expect(half).toBe(false)
  }

  const onSetFull = (full) => {
    expect(full).toBe(false)
  }

  const wrapper = mount(
    <HighPassFilter highpassfilter={_prophet6.highpassfilter}
      onSetCutoff={onSetCutoff}
      onSetResonance={onSetResonance}
      onSetEnvAmount={onSetEnvAmount}
      onSetVelocity={onSetVelocity}
      onSetKeyboard={onSetKeyboard}
      onSetHalf={onSetHalf}
      onSetFull={onSetFull}
    />)

  it('renders HighPassFilter component and sub components', () => {
    expect(wrapper.find('Cutoff').length).toBe(1)
    expect(wrapper.find('Resonance').length).toBe(1)
    expect(wrapper.find('EnvAmount').length).toBe(1)
    expect(wrapper.find('Velocity').length).toBe(1)
    expect(wrapper.find('Keyboard').length).toBe(1)
    expect(wrapper.find('Half').length).toBe(1)
    expect(wrapper.find('Full').length).toBe(1)
  })

  it('renders a Cutoff component with an onSetCutoff function', () => {
    const cutoffWrapper = wrapper.find('Cutoff')
    cutoffWrapper.find('button').simulate('click')
  })

  it('renders a Resonance component with an onSetResonance function', () => {
    const resonanceWrapper = wrapper.find('Resonance')
    resonanceWrapper.find('button').simulate('click')
  })

  it('renders a EnvAmount component with an onSetEnvAmount function', () => {
    const envAmountWrapper = wrapper.find('EnvAmount')
    envAmountWrapper.find('button').simulate('click')
  })

  it('renders a Velocity component with an onSetVelocity function', () => {
    const velocityWrapper = wrapper.find('Velocity')
    velocityWrapper.find('button').simulate('click')
  })

  it('renders a Keyboard component with an onSetKeyboard function', () => {
    const keyboardWrapper = wrapper.find('Keyboard')
    keyboardWrapper.find('button').simulate('click')
  })

  it('renders a Half component with an onSetHalf function', () => {
    const halfWrapper = wrapper.find('Half')
    halfWrapper.find('button').simulate('click')
  })

  it('renders a Full component with an onSetFull function', () => {
    const fullWrapper = wrapper.find('Full')
    fullWrapper.find('button').simulate('click')
  })

})
