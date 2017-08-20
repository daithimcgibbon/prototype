import { shallow, mount } from 'enzyme'
import Fine from '../../../src/components/oscillators/Fine'

describe("Fine", () => {

  let fine = 10
  let mockFunction = (fine) => {
    expect(fine).toBe(10)
  }

  it('renders Fine component with a text box', () => {
    let wrapper = shallow(<Fine fine={fine} onSetFine={mockFunction} />)
    expect(wrapper.find('input').length).toBe(1)
  })

  it('renders Fine component with a button', () => {
    let wrapper = shallow(<Fine fine={fine} onSetFine={mockFunction} />)
    expect(wrapper.find('button').length).toBe(1)
  })

  it('passes the value to the function when the button is clicked', () => {
    let wrapper = mount(<Fine fine={fine} onSetFine={mockFunction} />)
    wrapper.find('button').simulate('click')
  })

})
