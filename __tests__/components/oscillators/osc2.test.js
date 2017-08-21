import { shallow, mount } from 'enzyme'
import Osc1 from '../../../src/components/oscillators/Osc2'

describe("Osc2", () => {

  const onSetFrequency = (frequency) => {
    expect(frequency).toBe(0)
  }

  const onSetFine = (fine) => {
    expect(fine).toBe(0)
  }

  const onSetShape = (shape) => {
    expect(shape).toBe(0)
  }

  const onSetPulseWidth = (pulseWidth) => {
    expect(pulseWidth).toBe(0)
  }

  const onSetLowFreq = (lowFreq) => {
    expect(lowFreq).toBe(false)
  }

  const onSetKeyboard = (keyboard) => {
    expect(keyboard).toBe(false)
  }

  const wrapper = mount(
    <Osc1 osc2={_prophet6.osc2}
      onSetFrequency={onSetFrequency}
      onSetFine={onSetFine}
      onSetShape={onSetShape}
      onSetPulseWidth={onSetPulseWidth}
      onSetLowFreq={onSetLowFreq}
      onSetKeyboard={onSetKeyboard}
    />)

  it('renders Osc1 component with Osc2 components', () => {
    expect(wrapper.find('Frequency').length).toBe(1)
    expect(wrapper.find('Fine').length).toBe(1)
    expect(wrapper.find('Shape').length).toBe(1)
    expect(wrapper.find('PulseWidth').length).toBe(1)
    expect(wrapper.find('LowFreq').length).toBe(1)
    expect(wrapper.find('Keyboard').length).toBe(1)
  })

  it('renders a Frequency component with an onSetFrequency function', () => {
    const frequencyWrapper = wrapper.find('Frequency')
    frequencyWrapper.find('button').simulate('click')
  })

  it('renders a Fine component with an onSetFine function', () => {
    const fineWrapper = wrapper.find('Fine')
    fineWrapper.find('button').simulate('click')
  })

  it('renders a Shape component with an onSetShape function', () => {
    const shapeWrapper = wrapper.find('Shape')
    shapeWrapper.find('button').simulate('click')
  })

  it('renders a PulseWidth component with an onSetPulseWidth function', () => {
    const pulseWidthWrapper = wrapper.find('PulseWidth')
    pulseWidthWrapper.find('button').simulate('click')
  })

  it('renders a LowFreq component with an onSetLowFreq function', () => {
    const lowFreqWrapper = wrapper.find('LowFreq')
    lowFreqWrapper.find('button').simulate('click')
  })

  it('renders a Keyboard component with an onSetKeyboard function', () => {
    const keyboardWrapper = wrapper.find('Keyboard')
    keyboardWrapper.find('button').simulate('click')
  })

})
