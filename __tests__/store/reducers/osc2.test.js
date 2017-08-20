import C from '../../../src/constants'
import { osc2 } from '../../../src/store/reducers'
import deepFreeze from 'deep-freeze'

const state = {
  frequency: 0,
  fine: 0,
  shape: 0,
  pulseWidth: 0,
  lowFreq: false,
  keyboard: false
}

deepFreeze(state)

describe('osc2 reducer', () => {

  it('SET_OSC1_FREQ success', () => {
    const action = {
      type: C.SET_OSC2_FREQ,
      frequency: 10
    }
    deepFreeze(action)
    expect(osc2(state, action)).toEqual({
      frequency: 10,
      fine: 0,
      shape: 0,
      pulseWidth: 0,
      lowFreq: false,
      keyboard: false
    })
  })

  it('SET_OSC2_FINE success', () => {
    const action = {
      type: C.SET_OSC2_FINE,
      fine: 20
    }
    deepFreeze(action)
    expect(osc2(state, action)).toEqual({
      frequency: 0,
      fine: 20,
      shape: 0,
      pulseWidth: 0,
      lowFreq: false,
      keyboard: false
    })
  })

  it('SET_OSC2_SHAPE success', () => {
    const action = {
      type: C.SET_OSC2_SHAPE,
      shape: 30
    }
    deepFreeze(action)
    expect(osc2(state, action)).toEqual({
      frequency: 0,
      fine: 0,
      shape: 30,
      pulseWidth: 0,
      lowFreq: false,
      keyboard: false
    })
  })

  it('SET_OSC2_PW success', () => {
    const action = {
      type: C.SET_OSC2_PW,
      pulseWidth: 40
    }
    deepFreeze(action)
    expect(osc2(state, action)).toEqual({
      frequency: 0,
      fine: 0,
      shape: 0,
      pulseWidth: 40,
      lowFreq: false,
      keyboard: false
    })
  })

  it('SET_OSC2_LOW_FREQ', () => {
    const action = {
      type: C.SET_OSC2_LOW_FREQ,
      lowFreq: true
    }
    deepFreeze(action)
    expect(osc2(state, action)).toEqual({
      frequency: 0,
      fine: 0,
      shape: 0,
      pulseWidth: 0,
      lowFreq: true,
      keyboard: false
    })
  })

  it('SET_OSC2_KEYBOARD', () => {
    const action = {
      type: C.SET_OSC2_KEYBOARD,
      keyboard: true
    }
    deepFreeze(action)
    expect(osc2(state, action)).toEqual({
      frequency: 0,
      fine: 0,
      shape: 0,
      pulseWidth: 0,
      lowFreq: false,
      keyboard: true
    })
  })

})
