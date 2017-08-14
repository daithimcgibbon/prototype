import React from 'react'
import Frequency from './Frequency'
import Sync from './Sync'
import Shape from './Shape'
import PulseWidth from './PulseWidth'

export default (props) => {
  const { frequency, sync, shape, pulseWidth } = props.osc1
  const { setFrequency, setSync, setShape, setPulseWidth } = props
  return (
    <div>
      <Frequency frequency={frequency} onSetFrequency={setFrequency} />
      <Sync sync={sync} onSetSync={setSync} />
      <Shape shape={shape} onSetShape={setShape} />
      <PulseWidth pulseWidth={pulseWidth} onSetPulseWidth={setPulseWidth} />
    </div>
  )
}
