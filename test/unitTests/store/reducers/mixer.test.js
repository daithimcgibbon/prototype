import C from '../../../../src/constants'
import { mixer } from '../../../../src/store/reducers'
import deepFreeze from 'deep-freeze'

const state = {
  mixerOsc1: 0,
  mixerOsc2: 0,
  subOctave: 0,
  noise: 0
}

deepFreeze(state)

describe('mixer reducer', () => {

  it('SET_MIXER_OSC1 success', () => {
    const action = {
      type: C.SET_MIXER_OSC1,
      mixerOsc1: 10
    }
    deepFreeze(action)
    expect(mixer(state, action)).toEqual({
      mixerOsc1: 10,
      mixerOsc2: 0,
      subOctave: 0,
      noise: 0
    })
  })

  it('SET_MIXER_OSC2 success', () => {
    const action = {
      type: C.SET_MIXER_OSC2,
      mixerOsc2: 20
    }
    deepFreeze(action)
    expect(mixer(state, action)).toEqual({
      mixerOsc1: 0,
      mixerOsc2: 20,
      subOctave: 0,
      noise: 0
    })
  })

  it('SET_MIXER_SUB_OCTAVE success', () => {
    const action = {
      type: C.SET_MIXER_SUB_OCTAVE,
      subOctave: 30
    }
    deepFreeze(action)
    expect(mixer(state, action)).toEqual({
      mixerOsc1: 0,
      mixerOsc2: 0,
      subOctave: 30,
      noise: 0
    })
  })

  it('SET_MIXER_NOISE success', () => {
    const action = {
      type: C.SET_MIXER_NOISE,
      noise: 40
    }
    deepFreeze(action)
    expect(mixer(state, action)).toEqual({
      mixerOsc1: 0,
      mixerOsc2: 0,
      subOctave: 0,
      noise: 40
    })
  })

})
