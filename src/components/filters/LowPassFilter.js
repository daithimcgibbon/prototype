import React from 'react'
import Cutoff from './Cutoff'
import Resonance from './Resonance'
import EnvAmount from './EnvAmount'
import Velocity from './Velocity'
import Keyboard from './Keyboard'
import Half from './Half'
import Full from './Full'

export default (props) => {
  const { cutoff, resonance, envAmount, velocity, keyboard, half, full } = props.lowpassfilter
  const { onSetCutoff, onSetResonance, onSetEnvAmount, onSetVelocity, onSetKeyboard, onSetHalf, onSetFull } = props
  return (
    <div>
      <Cutoff cutoff={cutoff} onSetCutoff={onSetCutoff} />
      <Resonance resonance={resonance} onSetResonance={onSetResonance} />
      <EnvAmount envAmount={envAmount} onSetEnvAmount={onSetEnvAmount} />
      <Velocity velocity={velocity} onSetVelocity={onSetVelocity} />
      <Keyboard keyboard={keyboard} onSetKeyboard={onSetKeyboard} />
      <Half half={half} onSetHalf={onSetHalf} />
      <Full full={full} onSetFull={onSetFull} />
    </div>
  )
}
