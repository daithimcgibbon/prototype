import { connect } from 'react-redux'
import Osc1 from './Osc1'
import { setOsc1Freq, setOsc1Sync, setOsc1Shape, setOSc1PulseWidth } from '../actions'

const Osc1Container = connect(
  state =>
    ({
      osc1: state.osc1
    }),
  dispatch =>
    ({
      setFrequency(frequency) {
        dispatch(setOsc1Freq(frequency))
      },
      setSync(sync) {
        dispatch(setOsc1Sync(sync))
      },
      setShape(shape) {
        dispatch(setOsc1Shape(shape))
      },
      setPulseWidth(pulseWidth) {
        dispatch(setOSc1PulseWidth(pulseWidth))
      }
    })
)(Osc1)

export default Osc1Container
