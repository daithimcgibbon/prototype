import React from 'react'
import PropTypes from 'prop-types'
import Knob from 'react-canvas-uiknob'

const SynthKnob = ({value, onChangeValue}) => {
  return (
      <Knob
        min={0}
        max={10}
        width={60}
        height={60}
        fgColor={'#000'}
        angleOffset={180}
        displayInput={true}
        value={value}
        onChange={(value) => onChangeValue(parseInt(value))}
        onChangeEnd={() => onChangeValue(parseInt(value))}
      />
  )
}

SynthKnob.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func
}

export default SynthKnob
