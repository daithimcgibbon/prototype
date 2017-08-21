import { shallow, mount } from 'enzyme'
import Sync from '../../../src/components/oscillators/Sync'

describe("Sync", () => {

  let sync = true
  let mockFunction = (sync) => {
    expect(sync).toBe(true)
  }

  it('renders Sync component with a text box', () => {
    let wrapper = shallow(<Sync sync={sync} onSetSync={mockFunction} />)
    expect(wrapper.find('input').length).toBe(1)
  })

  it('renders Sync component with a button', () => {
    let wrapper = shallow(<Sync sync={sync} onSetSync={mockFunction} />)
    expect(wrapper.find('button').length).toBe(1)
  })

  it('passes the value to the function when the button is clicked', () => {
    let wrapper = mount(<Sync sync={sync} onSetSync={mockFunction} />)
    wrapper.find('button').simulate('click')
  })

})
