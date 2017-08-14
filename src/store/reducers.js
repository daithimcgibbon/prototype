import C from '../constants'

export const osc1 = (state={}, action) => {
  switch(action.type) {
    case C.SET_OSC1_FREQ:
      return {
        ...state,
        frequency: action.frequency
      }
    case C.SET_OSC1_SYNC:
      return {
        ...state,
        sync: action.sync
      }
    case C.SET_OSC1_SHAPE:
      return {
        ...state,
        shape: action.shape
      }
    case C.SET_OSC1_PW:
      return {
        ...state,
        pulseWidth: action.pulseWidth
      }
    default:
      return state
  }
}

export const osc2 = (state={}, action) => {
  switch(action.type) {
    case C.SET_OSC2_FREQ:
      return {
        ...state,
        frequency: action.frequency
      }
    case C.SET_OSC2_FINE:
      return {
        ...state,
        fine: action.fine
      }
    case C.SET_OSC2_SHAPE:
      return {
        ...state,
        shape: action.shape
      }
    case C.SET_OSC2_PW:
      return {
        ...state,
        pulseWidth: action.pulseWidth
      }
    case C.SET_OSC2_LOW_FREQ:
      return {
        ...state,
        lowFreq: action.lowFreq
      }
    case C.SET_OSC2_KEYBOARD:
      return {
        ...state,
        keyboard: action.keyboard
      }
    default:
      return state
  }
}

export const slop = (state={}, action) => {
  switch(action.type) {
    case C.SET_SLOP:
      return action.slop
    default:
      return state
  }
}

export const mixer = (state={}, action) => {
  switch(action.type) {
    case C.SET_MIXER_OSC1:
      return {
        ...state,
        mixerOsc1: action.mixerOsc1
      }
    case C.SET_MIXER_OSC2:
      return {
        ...state,
        mixerOsc2: action.mixerOsc2
      }
    case C.SET_MIXER_SUB_OCTAVE:
      return {
        ...state,
        subOctave: action.subOctave
      }
    case C.SET_MIXER_NOISE:
      return {
        ...state,
        noise: action.noise
      }
    default:
      return state
  }
}
