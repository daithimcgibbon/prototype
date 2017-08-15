import React from 'react'
import PropTypes from 'prop-types'

const Half = ({half, onSetHalf}) => {
  let _half
  return (
    <div>
      <input defaultValue={half} ref={(input) => _half = input} />
      <button onClick={() => onSetHalf(_half.value === 'true')}>Set Half</button>
    </div>
  )
}

Half.propTypes = {
  half: PropTypes.bool,
  onSetHalf: PropTypes.func
}

export default Half
