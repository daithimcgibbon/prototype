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
    <div className="container border border-dark rounded p-4">
      <div className="row">
        <div className="col-3 text-center">
          <SynthKnob value={frequency} onChangeValue={onSetFrequency} />
        </div>
        <div className="col-3 text-center ">
          <SynthKnob value={sync} onChangeValue={onSetSync} />
        </div>
        <div className="col-3 text-center ">
          <SynthKnob value={shape} onChangeValue={onSetShape} />
        </div>
        <div className="col-3 text-center">
          <SynthKnob value={pulseWidth} onChangeValue={onSetPulseWidth} />
        </div>
      </div>
      <div className="row">
        <div className="col-3 text-center ">
          <p className="small">Frequency</p>
        </div>
        <div className="col-3 text-center ">
          <p className="small">Sync</p>
        </div>
        <div className="col-3 text-center ">
          <p className="small">Shape</p>
        </div>
        <div className="col-3 text-center ">
          <p className="small">Pulse Width</p>
        </div>
      </div>
    </div>
  )
}
