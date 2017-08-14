import React from 'react'
import PropTypes from 'prop-types'

const Sync = ({sync, onSetSync}) => {
  let _sync
  return (
    <div>
      <input defaultValue={sync} ref={(input) => _sync = input} />
      <button onClick={() => onSetSync(_sync.value)}>Set Sync</button>
    </div>
  )
}

Sync.propTypes = {
  sync: PropTypes.bool,
  onSetSync: PropTypes.func
}

export default Sync
