import { shallow, mount } from 'enzyme'
import Cutoff from '../../../src/components/filters/Cutoff'

describe("Cutoff", () => {

  let value = 10
  let mockFunction = (cutoff) => {
    expect(cutoff).toBe(10)
  }

  it('renders Cutoff component with a text box', () => {
    let wrapper = shallow(<Cutoff cutoff={value} onSetCutoff={mockFunction} />)
    expect(wrapper.find('input').length).toBe(1)
  })

  it('renders Cutoff component with a button', () => {
    let wrapper = shallow(<Cutoff cutoff={value} onSetCutoff={mockFunction} />)
    expect(wrapper.find('button').length).toBe(1)
  })

  it('passes the value to the function when the button is clicked', () => {
    let wrapper = mount(<Cutoff cutoff={value} onSetCutoff={mockFunction} />)
    wrapper.find('button').simulate('click')
  })

})
