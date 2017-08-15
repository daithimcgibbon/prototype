import React from 'react'
import PropTypes from 'prop-types'

const MixerOsc2 = ({mixerOsc2, onSetMixerOsc2}) => {
  let _mixerOsc2
  return (
    <div>
      <input defaultValue={mixerOsc2} ref={(input) => _mixerOsc2 = input} />
      <button onClick={() => onSetMixerOsc2(_mixerOsc2.value)}>Set Mixer Osc2</button>
    </div>
  )
}

export default MixerOsc2
