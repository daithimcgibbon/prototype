import { connect } from 'react-redux'
import HighPassFilter from '../components/filters/HighPassFilter'
import { setHighPassCutoff, setHighPassResonance, setHighPassEnvAmount, setHighPassVelocity, setHighPassKeyboard, setHighPassFull, setHighPassHalf } from '../actions'

const HighPassFilterContainer = connect(
  state =>
    ({
      highpassfilter: state.highpassfilter
    }),
  dispatch =>
    ({
      onSetCutoff(cutoff) {
        dispatch(setHighPassCutoff(cutoff))
      },
      onSetResonance(resonance) {
        dispatch(setHighPassResonance(resonance))
      },
      onSetEnvAmount(envAmount) {
        dispatch(setHighPassEnvAmount(envAmount))
      },
      onSetVelocity(velocity) {
        dispatch(setHighPassVelocity(velocity))
      },
      onSetKeyboard(keyboard) {
        dispatch(setHighPassKeyboard(keyboard))
      },
      onSetHalf(half) {
        dispatch(setHighPassHalf(half))
      },
      onSetFull(full) {
        dispatch(setHighPassFull(full))
      }
    })
)(HighPassFilter)

export default HighPassFilterContainer
