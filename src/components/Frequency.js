import React from 'react'
import PropTypes from 'prop-types'

const Frequency = ({frequency, onSetFrequency}) => {
  let _frequency
  return (
    <div>
      <input defaultValue={frequency} ref={ (input) => _frequency = input}/>
      <button onClick={() => onSetFrequency(_frequency.value)}>Set Frequency</button>
    </div>
  )
}

// Frequency.propTypes = {
//   frequency: PropTypes.number,
//   onSetFrequency: PropTypes.func
// }

export default Frequency
