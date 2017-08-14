import React from 'react'
import PropTypes from 'prop-types'

const lowFreq = ({lowFreq, onSetLowFreq}) => {
  let _lowFreq
  return (
    <div>
      <input defaultValue={lowFreq} ref={(input) => _lowFreq = input} />
      <button onClick={() => onSetLowFreq(_lowFreq.value)}>Set Low Freq</button>
    </div>
  )
}

lowFreq.propTypes = {
  lowFreq: PropTypes.bool,
  onSetLowFreq: PropTypes.func
}

export default lowFreq
