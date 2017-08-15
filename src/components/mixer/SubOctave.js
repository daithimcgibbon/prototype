import React from 'react'
import PropTypes from 'prop-types'

const SubOctave = ({subOctave, onSetMixerSubOctave}) => {
  let _subOctave
  return (
    <div>
      <input defaultValue={subOctave} ref={(input) => _subOctave = input} />
      <button onClick={() => onSetMixerSubOctave(_subOctave.value)}>Set Sub Octave</button>
    </div>
  )
}

export default SubOctave
