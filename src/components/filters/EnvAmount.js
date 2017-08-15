import React from 'react'
import PropTypes from 'prop-types'

const EnvAmount = ({envAmount, onSetEnvAmount}) => {
  let _envAmount
  return (
    <div>
      <input defaultValue={envAmount} ref={(input) => _envAmount = input} />
      <button onClick={() => onSetEnvAmount(_envAmount.value)}>Set Env Amount</button>
    </div>
  )
}

export default EnvAmount
