import React from 'react'
import PropTypes from 'prop-types'

const MixerOsc2 = ({mixerOsc2, onSetMixerOsc2}) => {
  let _mixerOsc2
  return (
    <div>
      <input defaultValue={mixerOsc2} ref={(input) => _mixerOsc2 = input} />
      <button onClick={() => onSetMixerOsc2(parseInt(_mixerOsc2.value))}>Set Mixer Osc2</button>
    </div>
  )
}

MixerOsc2.propTypes = {
  mixerOsc2: PropTypes.number,
  onSetMixerOsc2: PropTypes.func
}

export default MixerOsc2
