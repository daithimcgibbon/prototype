import C from '../../../../src/constants'
import { highpassfilter } from '../../../../src/store/reducers'
import deepFreeze from 'deep-freeze'

const state = {
  cutoff: 0,
  resonance: 0,
  envAmount: 0,
  velocity: false,
  keyboard: false,
  half: false,
  full: false
}

deepFreeze(state)

describe('highpassfilter reducer', () => {

  it('SET_HIGHPASSFILTER_CUTOFF success', () => {
    const action = {
      type: C.SET_HIGHPASSFILTER_CUTOFF,
      cutoff: 10
    }
    deepFreeze(action)
    expect(highpassfilter(state, action)).toEqual({
      cutoff: 10,
      resonance: 0,
      envAmount: 0,
      velocity: false,
      keyboard: false,
      half: false,
      full: false
    })
  })

  it('SET_HIGHPASSFILTER_RESONANCE success', () => {
    const action = {
      type: C.SET_HIGHPASSFILTER_RESONANCE,
      resonance: 20
    }
    deepFreeze(action)
    expect(highpassfilter(state, action)).toEqual({
      cutoff: 0,
      resonance: 20,
      envAmount: 0,
      velocity: false,
      keyboard: false,
      half: false,
      full: false
    })
  })

  it('SET_HIGHPASSFILTER_ENV_AMOUNT success', () => {
    const action = {
      type: C.SET_HIGHPASSFILTER_ENV_AMOUNT,
      envAmount: 30
    }
    deepFreeze(action)
    expect(highpassfilter(state, action)).toEqual({
      cutoff: 0,
      resonance: 0,
      envAmount: 30,
      velocity: false,
      keyboard: false,
      half: false,
      full: false
    })
  })

  it('SET_HIGHPASSFILTER_VELOCITY success', () => {
    const action = {
      type: C.SET_HIGHPASSFILTER_VELOCITY,
      velocity: true
    }
    deepFreeze(action)
    expect(highpassfilter(state, action)).toEqual({
      cutoff: 0,
      resonance: 0,
      envAmount: 0,
      velocity: true,
      keyboard: false,
      half: false,
      full: false
    })
  })

  it('SET_HIGHPASSFILTER_KEYBOARD success', () => {
    const action = {
      type: C.SET_HIGHPASSFILTER_KEYBOARD,
      keyboard: true
    }
    deepFreeze(action)
    expect(highpassfilter(state, action)).toEqual({
      cutoff: 0,
      resonance: 0,
      envAmount: 0,
      velocity: false,
      keyboard: true,
      half: false,
      full: false
    })
  })

  it('SET_HIGHPASSFILTER_HALF success', () => {
    const action = {
      type: C.SET_HIGHPASSFILTER_HALF,
      half: true
    }
    deepFreeze(action)
    expect(highpassfilter(state, action)).toEqual({
      cutoff: 0,
      resonance: 0,
      envAmount: 0,
      velocity: false,
      keyboard: false,
      half: true,
      full: false
    })
  })

  it('SET_HIGHPASSFILTER_FULL success', () => {
    const action = {
      type: C.SET_HIGHPASSFILTER_FULL,
      full: true
    }
    deepFreeze(action)
    expect(highpassfilter(state, action)).toEqual({
      cutoff: 0,
      resonance: 0,
      envAmount: 0,
      velocity: false,
      keyboard: false,
      half: false,
      full: true
    })
  })

})
