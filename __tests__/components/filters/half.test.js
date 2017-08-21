import { shallow, mount } from 'enzyme'
import Half from '../../../src/components/filters/Half'

describe("Half", () => {

  let value = true
  let mockFunction = (half) => {
    expect(half).toBe(true)
  }

  it('renders Half component with a text box', () => {
    let wrapper = shallow(<Half half={value} onSetHalf={mockFunction} />)
    expect(wrapper.find('input').length).toBe(1)
  })

  it('renders Half component with a button', () => {
    let wrapper = shallow(<Half half={value} onSetHalf={mockFunction} />)
    expect(wrapper.find('button').length).toBe(1)
  })

  it('passes the value to the function when the button is clicked', () => {
    let wrapper = mount(<Half half={value} onSetHalf={mockFunction} />)
    wrapper.find('button').simulate('click')
  })

})
