import React from 'react'
import PropTypes from 'prop-types'
import Knob from 'react-canvas-uiknob'

const SynthKnob = ({value, onChangeValue, title}) => {
  return (
    <Knob
      min={0}
      max={10}
      width={100}
      fgColor={'#000'}
      angleOffset={180}
      displayInput={true}
      value={value}
      title={title}
      onChange={(value) => onChangeValue(parseInt(value))}
    />
  )
}

SynthKnob.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func
}

export default SynthKnob
