import { shallow, mount } from 'enzyme'
import EnvAmount from '../../../src/components/filters/EnvAmount'

describe("EnvAmount", () => {

  let value = 10
  let mockFunction = (envAmount) => {
    expect(envAmount).toBe(10)
  }

  it('renders EnvAmount component with a text box', () => {
    let wrapper = shallow(<EnvAmount envAmount={value} onSetEnvAmount={mockFunction} />)
    expect(wrapper.find('input').length).toBe(1)
  })

  it('renders EnvAmount component with a button', () => {
    let wrapper = shallow(<EnvAmount envAmount={value} onSetEnvAmount={mockFunction} />)
    expect(wrapper.find('button').length).toBe(1)
  })

  it('passes the value to the function when the button is clicked', () => {
    let wrapper = mount(<EnvAmount envAmount={value} onSetEnvAmount={mockFunction} />)
    wrapper.find('button').simulate('click')
  })

})
