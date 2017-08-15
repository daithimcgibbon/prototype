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

export const setHighPassCutoff = (cutoff=0) =>
  ({
    type: C.SET_HIGHPASSFILTER_CUTOFF,
    cutoff: cutoff
  })

export const setHighPassResonance = (resonance=0) =>
  ({
    type: C.SET_HIGHPASSFILTER_RESONANCE,
    resonance: resonance
  })

export const setHighPassEnvAmount = (envAmount=0) =>
  ({
    type: C.SET_HIGHPASSFILTER_ENV_AMOUNT,
    envAmount: envAmount
  })

export const setHighPassVelocity = (velocity=false) =>
  ({
    type: C.SET_HIGHPASSFILTER_VELOCITY,
    velocity: velocity
  })

export const setHighPassKeyboard = (keyboard=false) =>
  ({
    type: C.SET_HIGHPASSFILTER_KEYBOARD,
    keyboard: keyboard
  })

export const setHighPassHalf = (half=false) =>
  ({
    type: C.SET_HIGHPASSFILTER_HALF,
    half: half
  })

export const setHighPassFull = (full=false) =>
  ({
    type: C.SET_HIGHPASSFILTER_FULL,
    full: full
  })

export const setLowPassCutoff = (cutoff=0) =>
  ({
    type: C.SET_LOWPASSFILTER_CUTOFF,
    cutoff: cutoff
  })

export const setLowPassResonance = (resonance=0) =>
  ({
    type: C.SET_LOWPASSFILTER_RESONANCE,
    resonance: resonance
  })

export const setLowPassEnvAmount = (envAmount=0) =>
  ({
    type: C.SET_LOWPASSFILTER_ENV_AMOUNT,
    envAmount: envAmount
  })

export const setLowPassVelocity = (velocity=false) =>
  ({
    type: C.SET_LOWPASSFILTER_VELOCITY,
    velocity: velocity
  })

export const setLowPassKeyboard = (keyboard=false) =>
  ({
    type: C.SET_LOWPASSFILTER_KEYBOARD,
    keyboard: keyboard
  })

export const setLowPassHalf = (half=false) =>
  ({
    type: C.SET_LOWPASSFILTER_HALF,
    half: half
  })

export const setLowPassFull = (full=false) =>
  ({
    type: C.SET_LOWPASSFILTER_FULL,
    full: full
  })
