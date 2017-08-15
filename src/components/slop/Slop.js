import React from 'react'
import PropTypes from 'prop-types'

const Slop = ({slop, onSetSlop}) => {
  let _slop
  return (
    <div>
      <input defaultValue={slop} ref={(input) => _slop = input} />
      <button onClick={() => onSetSlop(parseInt(_slop.value))}>Set Slop</button>
    </div>
  )
}

Slop.propTypes = {
  slop: PropTypes.number,
  onSetSlop: PropTypes.func
}

export default Slop
