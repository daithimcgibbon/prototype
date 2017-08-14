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

export const setSlop = (slop=0) =>
  ({
    type: C.SET_SLOP,
    slop: slop
  })

export const setMixerOsc1 = (mixerOsc1=0) =>
  ({
    type: C.SET_MIXER_OSC1,
    mixerOsc1: mixerOsc1
  })

export const setMixerOsc2 = (mixerOsc2=0) =>
  ({
    type: C.SET_MIXER_OSC2,
    mixerOsc2: mixerOsc2
  })

export const setMixerSubOctave = (subOctave=0) =>
  ({
    type: C.SET_MIXER_SUB_OCTAVE,
    subOctave: subOctave
  })

export const setMixerNoise = (noise=0) =>
  ({
    type: C.SET_MIXER_NOISE,
    noise: noise
  })
