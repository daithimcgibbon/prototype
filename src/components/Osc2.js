import React from 'react'
import Frequency from './Frequency.js'
import Fine from './Fine.js'
import Shape from './Shape.js'
import PulseWidth from './PulseWidth.js'
import LowFreq from './LowFreq'
import Keyboard from './Keyboard'

export default class Osc2 extends React.Component {
  constructor(props) {
    super(props)
    this.setFrequency = this.setFrequency.bind(this)
    this.setFine = this.setFine.bind(this)
    this.setShape = this.setShape.bind(this)
    this.setPulseWidth = this.setPulseWidth.bind(this)
    this.setLowFreq = this.setLowFreq.bind(this)
    this.setKeyboard = this.setKeyboard.bind(this)
  }

  setFrequency(frequency) {
    alert('setting osc 2 frequency ' + frequency)
  }

  setFine(fine) {
    alert('setting osc 2 fine ' + fine)
  }

  setShape(shape) {
    alert('setting osc 2 shape ' + shape)
  }

  setPulseWidth(pulseWidth) {
    alert('setting osc 2 pulseWidth ' + pulseWidth)
  }

  setLowFreq(lowFreq) {
    alert('setting osc2 lowFreq ' + lowFreq)
  }

  setKeyboard(keyboard) {
    alert('setting osc2 keyboard ' + keyboard)
  }

  render() {
    const { setFrequency, setFine, setShape, setPulseWidth, setLowFreq, setKeyboard } = this
    const { frequency, fine, shape, pulseWidth, lowFreq, keyboard } = this.props.osc2
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

}
