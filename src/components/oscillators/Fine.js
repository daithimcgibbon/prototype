import React from 'react'
import PropTypes from 'prop-types'

const Fine = ({fine, onSetFine}) => {
  let _fine
  return (
    <div>
      <input defaultValue={fine} ref={(input) => _fine = input} />
      <button id='#setFineButton' onClick={() => onSetFine(parseInt(_fine.value))}>Set Fine</button>
    </div>
  )
}

Fine.propTypes = {
  fine: PropTypes.number,
  onSetFine: PropTypes.func
}

export default Fine
