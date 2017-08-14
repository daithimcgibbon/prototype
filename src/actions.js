import C from './constants'

export const setOsc1Freq = (frequency=0) =>
  ({
    type: C.SET_OSC1_FREQ,
    frequency: frequency
  })

export const setOsc1Sync = (sync=false) =>
  ({
    type: C.SET_OSC1_SYNC,
    sync: sync
  })

export const setOsc1Shape = (shape=0) =>
  ({
    type: C.SET_OSC1_SHAPE,
    shape: shape
  })

export const setOSc1PulseWidth = (pulseWidth=0) =>
  ({
    type: C.SET_OSC1_PW,
    pulseWidth: pulseWidth
  })

export const setOsc2Freq = (frequency=0) =>
  ({
    type: C.SET_OSC2_FREQ,
    frequency: frequency
  })

export const setOsc2Fine = (fine=0) =>
  ({
    type: C.SET_OSC2_FINE,
    fine: fine
  })

export const setOsc2Shape = (shape=0) =>
  ({
    type: C.SET_OSC2_SHAPE,
    shape: shape
  })

export const setOSc2PulseWidth = (pulseWidth=0) =>
  ({
    type: C.SET_OSC2_PW,
    pulseWidth: pulseWidth
  })

export const setOSc2LowFreq = (lowFreq=false) =>
  ({
    type: C.SET_OSC2_LOW_FREQ,
    lowFreq: lowFreq
  })

export const setOSc2Keyboard = (keyboard=false) =>
  ({
    type: C.SET_OSC2_KEYBOARD,
    keyboard: keyboard
  })
