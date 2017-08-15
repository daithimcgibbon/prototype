import React from 'react'
import PropTypes from 'prop-types'

const SubOctave = ({subOctave, onSetMixerSubOctave}) => {
  let _subOctave
  return (
    <div>
      <input defaultValue={subOctave} ref={(input) => _subOctave = input} />
      <button onClick={() => onSetMixerSubOctave(parseInt(_subOctave.value))}>Set Sub Octave</button>
    </div>
  )
}

SubOctave.propTypes = {
  subOctave: PropTypes.number,
  onSetMixerSubOctave: PropTypes.func
}

export default SubOctave
