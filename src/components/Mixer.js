import React from 'react'
import MixerOsc1 from './MixerOsc1'
import MixerOsc2 from './MixerOsc2'
import SubOctave from './SubOctave'
import Noise from './Noise'

export default (props) => {
  const { mixerOsc1, mixerOsc2, subOctave, noise } = props.mixer
  const { onSetMixerOsc1, onSetMixerOsc2, onSetMixerSubOctave, onSetMixerNoise } = props
  return (
    <div>
      <MixerOsc1 mixerOsc1={mixerOsc1} onSetMixerOsc1={onSetMixerOsc1} />
      <MixerOsc2 mixerOsc2={mixerOsc2} onSetMixerOsc2={onSetMixerOsc2} />
      <SubOctave subOctave={subOctave} onSetMixerSubOctave={onSetMixerSubOctave} />
      <Noise noise={noise} onSetMixerNoise={onSetMixerNoise} />
    </div>
  )
}
