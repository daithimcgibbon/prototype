import React from 'react'
import PropTypes from 'prop-types'

const Keyboard = ({keyboard, onSetKeyboard}) => {
  let _keyboard
  return (
    <div>
      <input defaultValue={keyboard} ref={(input) => _keyboard = input} />
      <button onClick={() => onSetKeyboard(_keyboard.value)}>Set Keyboard</button>
    </div>
  )
}

export default Keyboard
