import React from 'react'
import PropTypes from 'prop-types'

const MixerOsc1 = ({mixerOsc1, onSetMixerOsc1}) => {
  let _mixerOsc1
  return (
    <div>
      <input defaultValue={mixerOsc1} ref={(input) => _mixerOsc1 = input} />
      <button onClick={() => onSetMixerOsc1(_mixerOsc1.value)}>Set Mixer Osc1</button>
    </div>
  )
}

export default MixerOsc1
