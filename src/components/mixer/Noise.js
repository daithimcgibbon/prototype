import React from 'react'
import PropTypes from 'prop-types'

const Noise = ({noise, onSetMixerNoise}) => {
  let _noise
  return (
    <div>
      <input defaultValue={noise} ref={(input) => _noise = input} />
      <button onClick={() => onSetMixerNoise(_noise.value)}>Set Noise</button>
    </div>
  )
}

export default Noise
