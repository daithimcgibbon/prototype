import React from 'react'
import Frequency from './Frequency'
import Fine from './Fine'
import Shape from './Shape'
import PulseWidth from './PulseWidth'
import LowFreq from './LowFreq'
import Keyboard from './Keyboard'

export default (props) => {
  const { frequency, fine, shape, pulseWidth, lowFreq, keyboard } = props.osc2
  const { onSetFrequency, onSetFine, onSetShape, onSetPulseWidth, onSetLowFreq, onSetKeyboard } = props
  return (
    <div>
      <Frequency frequency={frequency} onSetFrequency={onSetFrequency} />
      <Fine fine={fine} onSetFine={onSetFine} />
      <Shape shape={shape} onSetShape={onSetShape} />
      <PulseWidth pulseWidth={pulseWidth} onSetPulseWidth={onSetPulseWidth} />
      <LowFreq lowFreq={lowFreq} onSetLowFreq={onSetLowFreq} />
      <Keyboard keyboard={keyboard} onSetKeyboard={onSetKeyboard} />
    </div>
  )
}
