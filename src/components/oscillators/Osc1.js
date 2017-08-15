import React from 'react'
import Frequency from './Frequency'
import Sync from './Sync'
import Shape from './Shape'
import PulseWidth from './PulseWidth'

export default (props) => {
  const { frequency, sync, shape, pulseWidth } = props.osc1
  const { onSetFrequency, onSetSync, onSetShape, onSetPulseWidth } = props
  return (
    <div>
      <Frequency frequency={frequency} onSetFrequency={onSetFrequency} />
      <Sync sync={sync} onSetSync={onSetSync} />
      <Shape shape={shape} onSetShape={onSetShape} />
      <PulseWidth pulseWidth={pulseWidth} onSetPulseWidth={onSetPulseWidth} />
    </div>
  )
}
