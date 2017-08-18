import { connect } from 'react-redux'
import Osc2 from '../components/oscillators/Osc2'
import { setOsc2Freq, setOsc2Fine, setOsc2Shape, setOSc2PulseWidth, setOSc2LowFreq, setOSc2Keyboard } from '../actions'

const Osc2Container = connect(
  state =>
    ({
      osc2: state.osc2
    }),
  dispatch =>
    ({
      onSetFrequency(frequency) {
        dispatch(setOsc2Freq(frequency))
      },
      onSetFine(fine) {
        console.log('container fine: ' + fine)
        dispatch(setOsc2Fine(fine))
      },
      onSetShape(shape) {
        dispatch(setOsc2Shape(shape))
      },
      onSetPulseWidth(pulseWidth) {
        dispatch(setOsc2PulseWidth(pulseWidth))
      },
      onSetLowFreq(lowFreq) {
        dispatch(setOsc2LowFreq(lowFreq))
      },
      onSetKeyboard(keyboard) {
        dispatch(setOsc2Keyboard(keyboard))
      }
    })
)(Osc2)

export default Osc2Container
