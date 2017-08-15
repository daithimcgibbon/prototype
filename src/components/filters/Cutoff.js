import React from 'react'
import PropTypes from 'prop-types'

const Cutoff = ({cutoff, onSetCutoff}) => {
  let _cutoff
  return (
    <div>
      <input defaultValue={cutoff} ref={(input) => _cutoff = input} />
      <button onClick={() => onSetCutoff(parseInt(_cutoff.value))}>Set Cutoff</button>
    </div>
  )
}

Cutoff.propTypes = {
  cutoff: PropTypes.number,
  onSetCutoff: PropTypes.func
}

export default Cutoff
