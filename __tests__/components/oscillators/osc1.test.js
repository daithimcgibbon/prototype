import { shallow, mount } from 'enzyme'
import Osc1 from '../../../src/components/oscillators/Osc1'

describe("Osc1", () => {

  const onSetFrequency = (frequency) => {
    expect(frequency).toBe(0)
  }

  const onSetSync = (sync) => {
    expect(sync).toBe(false)
  }

  const onSetShape = (shape) => {
    expect(shape).toBe(0)
  }

  const onSetPulseWidth = (pulseWidth) => {
    expect(pulseWidth).toBe(0)
  }

  const wrapper = mount(
    <Osc1 osc1={_prophet6.osc1}
      onSetFrequency={onSetFrequency}
      onSetSync={onSetSync}
      onSetShape={onSetShape}
      onSetPulseWidth={onSetPulseWidth}
    />)

  it('renders Osc1 component with Frequency, Sync, Shape and PulseWidth components', () => {
    expect(wrapper.find('Frequency').length).toBe(1)
    expect(wrapper.find('Sync').length).toBe(1)
    expect(wrapper.find('Shape').length).toBe(1)
    expect(wrapper.find('PulseWidth').length).toBe(1)
  })

  it('renders a Frequency component with an onSetFrequency function', () => {
    const frequencyWrapper = wrapper.find('Frequency')
    frequencyWrapper.find('button').simulate('click')
  })

  it('renders a Sync component with an onSetSync function', () => {
    const syncWrapper = wrapper.find('Sync')
    syncWrapper.find('button').simulate('click')
  })

  it('renders a Shape component with an onSetShape function', () => {
    const shapeWrapper = wrapper.find('Shape')
    shapeWrapper.find('button').simulate('click')
  })

  it('renders a PulseWidth component with an onSetPulseWidth function', () => {
    const pulseWidthWrapper = wrapper.find('PulseWidth')
    pulseWidthWrapper.find('button').simulate('click')
  })

})
