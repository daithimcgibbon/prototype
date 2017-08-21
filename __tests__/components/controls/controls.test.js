import { shallow, mount } from 'enzyme'
import SaveButton from '../../../src/components/controls/SaveButton'

describe("SaveButton", () => {

  let value = 10
  let mockFunction = () => {
    value = 20
  }

  it('renders SaveButton component', () => {
    let wrapper = shallow(<SaveButton save={mockFunction} />)
    expect(wrapper.find('button').length).toBe(1)
  })

  it('passes the function which gets called when the button is clicked', () => {
    let wrapper = shallow(<SaveButton save={mockFunction} />)
    wrapper.find('button').simulate('click')
    expect(value).toBe(20)
  })

})
