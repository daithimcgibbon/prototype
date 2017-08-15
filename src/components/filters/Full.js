import React from 'react'
import PropTypes from 'prop-types'

const Full = ({full, onSetFull}) => {
  let _full
  return (
    <div>
      <input defaultValue={full} ref={(input) => _full = input} />
      <button onClick={() => onSetFull(_full.value)}>Set Full</button>
    </div>
  )
}

export default Full
