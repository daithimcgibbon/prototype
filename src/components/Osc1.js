import React from 'react'
import Frequency from './Frequency.js'
import Sync from './Sync.js'
import Shape from './Shape.js'
import PulseWidth from './PulseWidth.js'

export default class Osc1 extends React.Component {
  constructor(props) {
    super(props)
    this.setFrequency = this.setFrequency.bind(this)
    this.setSync = this.setSync.bind(this)
    this.setShape = this.setShape.bind(this)
    this.setPulseWidth = this.setPulseWidth.bind(this)
  }

  setFrequency(frequency) {
    alert('setting osc 1 frequency ' + frequency)
  }

  setSync(sync) {
    alert('setting osc 1 sync ' + sync)
  }

  setShape(shape) {
    alert('setting osc 1 shape ' + shape)
  }

  setPulseWidth(pulseWidth) {
    alert('setting osc 1 pulseWidth ' + pulseWidth)
  }

  render() {
    const { setFrequency, setSync, setShape, setPulseWidth } = this
    const { frequency, sync, shape, pulseWidth } = this.props.osc1
    return (
      <div>
       <Frequency frequency={frequency} onSetFrequency={setFrequency} />
       <Sync sync={sync} onSetSync={setSync} />
       <Shape shape={shape} onSetShape={setShape} />
       <PulseWidth pulseWidth={pulseWidth} onSetPulseWidth={setPulseWidth} />
     </div>
    )
  }

}
