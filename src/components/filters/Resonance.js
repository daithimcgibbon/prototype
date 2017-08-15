import React from 'react'
import PropTypes from 'prop-types'

const Resonance = ({resonance, onSetResonance}) => {
  let _resonance
  return (
    <div>
      <input defaultValue={resonance} ref={(input) => _resonance = input} />
      <button onClick={() => onSetResonance(_resonance.value)}>Set Resonance</button>
    </div>
  )
}

export default Resonance
