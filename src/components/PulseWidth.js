import React from 'react'
import PropTypes from 'prop-types'

const PulseWidth = ({pulseWidth, onSetPulseWidth}) => {
  let _pulseWidth
  return (
    <div>
      <input defaultValue={pulseWidth} ref={(input) => _pulseWidth = input} />
      <button onClick={() => onSetPulseWidth(_pulseWidth.value)}>Set Pulse Width</button>
    </div>
  )
}

PulseWidth.propTypes = {
  pulseWidth: PropTypes.number,
  onSetPulseWidth: PropTypes.func
}

export default PulseWidth
