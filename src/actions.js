import C from './constants.js'

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
