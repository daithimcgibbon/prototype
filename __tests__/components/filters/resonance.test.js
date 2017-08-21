import { shallow, mount } from 'enzyme'
import Resonance from '../../../src/components/filters/Resonance'

describe("Resonance", () => {

  let value = 10
  let mockFunction = (resonance) => {
    expect(resonance).toBe(10)
  }

  it('renders Resonance component with a text box', () => {
    let wrapper = shallow(<Resonance resonance={value} onSetResonance={mockFunction} />)
    expect(wrapper.find('input').length).toBe(1)
  })

  it('renders Resonance component with a button', () => {
    let wrapper = shallow(<Resonance resonance={value} onSetResonance={mockFunction} />)
    expect(wrapper.find('button').length).toBe(1)
  })

  it('passes the value to the function when the button is clicked', () => {
    let wrapper = mount(<Resonance resonance={value} onSetResonance={mockFunction} />)
    wrapper.find('button').simulate('click')
  })

})
