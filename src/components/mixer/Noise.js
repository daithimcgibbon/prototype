import React from 'react'
import PropTypes from 'prop-types'

const Noise = ({noise, onSetMixerNoise}) => {
  let _noise
  return (
    <div>
      <input defaultValue={noise} ref={(input) => _noise = input} />
      <button onClick={() => onSetMixerNoise(parseInt(_noise.value))}>Set Noise</button>
    </div>
  )
}

Noise.propTypes = {
  noise: PropTypes.number,
  onSetMixerNoise: PropTypes.func
}

export default Noise
