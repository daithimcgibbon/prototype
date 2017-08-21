import { shallow, mount } from 'enzyme'
import SubOctave from '../../../src/components/mixer/SubOctave'

describe("SubOctave", () => {

  let value = 10
  let mockFunction = (subOctave) => {
    expect(subOctave).toBe(10)
  }

  it('renders SubOctave component with a text box', () => {
    let wrapper = shallow(<SubOctave subOctave={value} onSetMixerSubOctave={mockFunction} />)
    expect(wrapper.find('input').length).toBe(1)
  })

  it('renders SubOctave component with a button', () => {
    let wrapper = shallow(<SubOctave subOctave={value} onSetMixerSubOctave={mockFunction} />)
    expect(wrapper.find('button').length).toBe(1)
  })

  it('passes the value to the function when the button is clicked', () => {
    let wrapper = mount(<SubOctave subOctave={value} onSetMixerSubOctave={mockFunction} />)
    wrapper.find('button').simulate('click')
  })

})
