import React from 'react'
import PropTypes from 'prop-types'

const Velocity = ({velocity, onSetVelocity}) => {
  let _velocity
  return (
    <div>
      <input defaultValue={velocity} ref={(input) => _velocity = input} />
      <button onClick={() => onSetVelocity(_velocity.value)}>Set Velocity</button>
    </div>
  )
}

export default Velocity
