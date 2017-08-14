import { connect } from 'react-redux'
import Osc2 from './Osc2'
import { setOsc2Freq, setOsc2Fine, setOsc2Shape, setOSc2PulseWidth, setOSc2LowFreq, setOSc2Keyboard } from '../actions'

const Osc2Container = connect(
  state =>
    ({
      osc2: state.osc2
    }),
  dispatch =>
    ({
      setFrequency(frequency) {
        dispatch(setOsc2Freq(frequency))
      },
      setFine(fine) {
        console.log('container fine: ' + fine)
        dispatch(setOsc2Fine(fine))
      },
      setShape(shape) {
        dispatch(setOsc2Shape(shape))
      },
      setPulseWidth(pulseWidth) {
        dispatch(setOSc2PulseWidth(pulseWidth))
      },
      setLowFreq(lowFreq) {
        dispatch(setOSc2LowFreq(lowFreq))
      },
      setKeyboard(keyboard) {
        dispatch(setOSc2Keyboard(keyboard))
      }
    })
)(Osc2)

export default Osc2Container
