import React from 'react'
import PropTypes from 'prop-types'

const Velocity = ({velocity, onSetVelocity}) => {
  let _velocity
  return (
    <div>
      <input defaultValue={velocity} ref={(input) => _velocity = input} />
      <button onClick={() => onSetVelocity(_velocity.value === 'true')}>Set Velocity</button>
    </div>
  )
}

Velocity.propTypes = {
  velocity: PropTypes.bool,
  onSetVelocity: PropTypes.func
}

export default Velocity
