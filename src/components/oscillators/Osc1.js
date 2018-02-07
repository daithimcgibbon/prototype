import React from 'react'
import Frequency from './Frequency'
import Sync from './Sync'
import Shape from './Shape'
import PulseWidth from './PulseWidth'
import SynthKnob from './SynthKnob'

export default (props) => {
  const { frequency, sync, shape, pulseWidth } = props.osc1
  const { onSetFrequency, onSetSync, onSetShape, onSetPulseWidth } = props
  return (
    <div>
      <SynthKnob value={frequency} onChangeValue={onSetFrequency} title={'Frequency'}/>
      {/*
      <Frequency frequency={frequency} onSetFrequency={onSetFrequency} />
      <Sync sync={sync} onSetSync={onSetSync} />
      <Shape shape={shape} onSetShape={onSetShape} />
      <PulseWidth pulseWidth={pulseWidth} onSetPulseWidth={onSetPulseWidth} />
      */}
    </div>
  )
}
