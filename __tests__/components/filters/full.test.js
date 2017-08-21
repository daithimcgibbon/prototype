import { shallow, mount } from 'enzyme'
import Full from '../../../src/components/filters/Full'

describe("Full", () => {

  let value = true
  let mockFunction = (full) => {
    expect(full).toBe(true)
  }

  it('renders Full component with a text box', () => {
    let wrapper = shallow(<Full full={value} onSetFull={mockFunction} />)
    expect(wrapper.find('input').length).toBe(1)
  })

  it('renders Full component with a button', () => {
    let wrapper = shallow(<Full full={value} onSetFull={mockFunction} />)
    expect(wrapper.find('button').length).toBe(1)
  })

  it('passes the value to the function when the button is clicked', () => {
    let wrapper = mount(<Full full={value} onSetFull={mockFunction} />)
    wrapper.find('button').simulate('click')
  })

})
