import { shallow, mount } from 'enzyme'
import Keyboard from '../../../src/components/filters/Keyboard'

describe("Keyboard", () => {

  let value = false
  let mockFunction = (keyboard) => {
    expect(keyboard).toBe(false)
  }

  it('renders Keyboard component with a text box', () => {
    let wrapper = shallow(<Keyboard keyboard={value} onSetKeyboard={mockFunction} />)
    expect(wrapper.find('input').length).toBe(1)
  })

  it('renders Keyboard component with a button', () => {
    let wrapper = shallow(<Keyboard keyboard={value} onSetKeyboard={mockFunction} />)
    expect(wrapper.find('button').length).toBe(1)
  })

  it('passes the value to the function when the button is clicked', () => {
    let wrapper = mount(<Keyboard keyboard={value} onSetKeyboard={mockFunction} />)
    wrapper.find('button').simulate('click')
  })

})
