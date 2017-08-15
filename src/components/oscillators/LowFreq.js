import React from 'react'
import PropTypes from 'prop-types'

const LowFreq = ({lowFreq, onSetLowFreq}) => {
  let _lowFreq
  return (
    <div>
      <input defaultValue={lowFreq} ref={(input) => _lowFreq = input} />
      <button onClick={() => onSetLowFreq(_lowFreq.value === 'true')}>Set Low Freq</button>
    </div>
  )
}

LowFreq.propTypes = {
  lowFreq: PropTypes.bool,
  onSetLowFreq: PropTypes.func
}

export default LowFreq
