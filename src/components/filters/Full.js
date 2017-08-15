import React from 'react'
import PropTypes from 'prop-types'

const Full = ({full, onSetFull}) => {
  let _full
  return (
    <div>
      <input defaultValue={full} ref={(input) => _full = input} />
      <button onClick={() => onSetFull(_full.value === 'true')}>Set Full</button>
    </div>
  )
}

Full.propTypes = {
  full: PropTypes.bool,
  onSetFull: PropTypes.func
}

export default Full
