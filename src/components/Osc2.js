import React from 'react'
import Frequency from './Frequency'
import Fine from './Fine'
import Shape from './Shape'
import PulseWidth from './PulseWidth'
import LowFreq from './LowFreq'
import Keyboard from './Keyboard'

export default (props) => {
  const { frequency, fine, shape, pulseWidth, lowFreq, keyboard } = props.osc2
  const { setFrequency, setFine, setShape, setPulseWidth, setLowFreq, setKeyboard } = props
  return (
    <div>
      <Frequency frequency={frequency} onSetFrequency={setFrequency} />
      <Fine fine={fine} onSetFine={setFine} />
      <Shape shape={shape} onSetShape={setShape} />
      <PulseWidth pulseWidth={pulseWidth} onSetPulseWidth={setPulseWidth} />
      <LowFreq lowFreq={lowFreq} onSetLowFreq={setLowFreq} />
      <Keyboard keyboard={keyboard} onSetKeyboard={setKeyboard} />
    </div>
  )
}
