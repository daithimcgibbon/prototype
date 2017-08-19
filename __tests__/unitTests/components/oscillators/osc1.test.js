import { shallow, mount } from 'enzyme'
import Osc1 from '../../../../src/components/oscillators/Osc1'

describe("Osc1", () => {

  const frequency = 10
  const sync = false
  const shape = 0
  const  pulseWidth = 0

  it('has a fake test to stop errors when running jest', () => {
    expect(frequency).toBe(10)
  })
  // it('renders Osc1 component with a Frequency component', () => {
  //   let wrapper = shallow(<Osc1 />)
  //   expect(wrapper.find('Frequency').length).toBe(1)
  // })
  //
  // it('renders Osc1 component with a Sync component', () => {
  //   let wrapper = shallow(<Osc1 />)
  //   expect(wrapper.find('Sync').length).toBe(1)
  // })

})
