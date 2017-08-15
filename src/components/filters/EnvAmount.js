import React from 'react'
import PropTypes from 'prop-types'

const EnvAmount = ({envAmount, onSetEnvAmount}) => {
  let _envAmount
  return (
    <div>
      <input defaultValue={envAmount} ref={(input) => _envAmount = input} />
      <button onClick={() => onSetEnvAmount(parseInt(_envAmount.value))}>Set Env Amount</button>
    </div>
  )
}

EnvAmount.propTypes = {
  envAmount: PropTypes.number,
  onSetEnvAmount: PropTypes.func
}

export default EnvAmount
