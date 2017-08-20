import C from '../../../src/constants'
import { osc1 } from '../../../src/store/reducers'
import deepFreeze from 'deep-freeze'

const state = {
  frequency: 0,
  sync: false,
  shape: 0,
  pulseWidth: 0
}

deepFreeze(state)

describe('osc1 reducer', () => {

  it('SET_OSC1_FREQ success', () => {
    const action = {
      type: C.SET_OSC1_FREQ,
      frequency: 10
    }
    deepFreeze(action)
    expect(osc1(state, action)).toEqual({
      frequency: 10,
      sync: false,
      shape: 0,
      pulseWidth: 0
    })
  })

  it('SET_OSC1_SYNC success', () => {
    const action = {
      type: C.SET_OSC1_SYNC,
      sync: true
    }
    deepFreeze(action)
    expect(osc1(state, action)).toEqual({
      frequency: 0,
      sync: true,
      shape: 0,
      pulseWidth: 0
    })
  })

  it('SET_OSC1_SHAPE success', () => {
    const action = {
      type: C.SET_OSC1_SHAPE,
      shape: 20
    }
    deepFreeze(action)
    expect(osc1(state, action)).toEqual({
      frequency: 0,
      sync: false,
      shape: 20,
      pulseWidth: 0
    })
  })

  it('SET_OSC1_PW success', () => {
    const action = {
      type: C.SET_OSC1_PW,
      pulseWidth: 30
    }
    deepFreeze(action)
    expect(osc1(state, action)).toEqual({
      frequency: 0,
      sync: false,
      shape: 0,
      pulseWidth: 30
    })
  })

})
