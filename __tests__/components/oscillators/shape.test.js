import { shallow, mount } from 'enzyme'
import Shape from '../../../src/components/oscillators/Shape'

describe("Shape", () => {

  let shape = 10
  let mockFunction = (shape) => {
    expect(shape).toBe(10)
  }

  it('renders Shape component with a text box', () => {
    let wrapper = shallow(<Shape shape={shape} onSetShape={mockFunction} />)
    expect(wrapper.find('input').length).toBe(1)
  })

  it('renders Shape component with a button', () => {
    let wrapper = shallow(<Shape shape={shape} onSetShape={mockFunction} />)
    expect(wrapper.find('button').length).toBe(1)
  })

  it('passes the value to the function when the button is clicked', () => {
    let wrapper = mount(<Shape shape={shape} onSetShape={mockFunction} />)
    wrapper.find('button').simulate('click')
  })

})
