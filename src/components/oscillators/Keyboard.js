import React from 'react'
import PropTypes from 'prop-types'

const Keyboard = ({keyboard, onSetKeyboard}) => {
  let _keyboard
  return (
    <div>
      <input defaultValue={keyboard} ref={(input) => _keyboard = input} />
      <button onClick={() => onSetKeyboard(_keyboard.value === 'true')}>Set Keyboard</button>
    </div>
  )
}

Keyboard.propTypes = {
  keyboard: PropTypes.bool,
  onSetKeyboard: PropTypes.func
}

export default Keyboard
