import { connect } from 'react-redux'
import Osc1 from '../components/oscillators/Osc1'
import { setOsc1Freq, setOsc1Sync, setOsc1Shape, setOSc1PulseWidth } from '../actions'

const Osc1Container = connect(
  state =>
    ({
      osc1: state.osc1
    }),
  dispatch =>
    ({
      onSetFrequency(frequency) {
        dispatch(setOsc1Freq(frequency))
      },
      onSetSync(sync) {
        dispatch(setOsc1Sync(sync))
      },
      onSetShape(shape) {
        dispatch(setOsc1Shape(shape))
      },
      onSetPulseWidth(pulseWidth) {
        dispatch(setOSc1PulseWidth(pulseWidth))
      }
    })
)(Osc1)

export default Osc1Container
