import { shallow, mount } from 'enzyme'
import LowFreq from '../../../../src/components/oscillators/LowFreq'

describe("LowFreq", () => {

  let lowFreq = false
  let mockFunction = (lowFreq) => {
    expect(lowFreq).toBe(false)
  }

  it('renders LowFreq component with a text box', () => {
    let wrapper = shallow(<LowFreq lowFreq={lowFreq} onSetLowFreq={mockFunction} />)
    expect(wrapper.find('input').length).toBe(1)
  })

  it('renders LowFreq component with a button', () => {
    let wrapper = shallow(<LowFreq lowFreq={lowFreq} onSetLowFreq={mockFunction} />)
    expect(wrapper.find('button').length).toBe(1)
  })

  it('passes the value to the function when the button is clicked', () => {
    let wrapper = mount(<LowFreq lowFreq={lowFreq} onSetLowFreq={mockFunction} />)
    wrapper.find('button').simulate('click')
  })

})
