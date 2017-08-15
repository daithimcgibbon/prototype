import React from 'react'
import PropTypes from 'prop-types'

const Resonance = ({resonance, onSetResonance}) => {
  let _resonance
  return (
    <div>
      <input defaultValue={resonance} ref={(input) => _resonance = input} />
      <button onClick={() => onSetResonance(parseInt(_resonance.value))}>Set Resonance</button>
    </div>
  )
}

Resonance.propTypes = {
  resonance: PropTypes.number,
  onSetResonance: PropTypes.func
}

export default Resonance
