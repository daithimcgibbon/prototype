import { connect } from 'react-redux'
import LowPassFilter from '../components/filters/LowPassFilter'
import { setLowPassCutoff, setLowPassResonance, setLowPassEnvAmount, setLowPassVelocity, setLowPassKeyboard, setLowPassFull, setLowPassHalf } from '../actions'

const LowPassFilterContainer = connect(
  state =>
    ({
      lowpassfilter: state.lowpassfilter
    }),
  dispatch =>
    ({
      onSetCutoff(cutoff) {
        console.log(cutoff)
        dispatch(setLowPassCutoff(cutoff))
      },
      onSetResonance(resonance) {
        dispatch(setLowPassResonance(resonance))
      },
      onSetEnvAmount(envAmount) {
        dispatch(setLowPassEnvAmount(envAmount))
      },
      onSetVelocity(velocity) {
        dispatch(setLowPassVelocity(velocity))
      },
      onSetKeyboard(keyboard) {
        dispatch(setLowPassKeyboard(keyboard))
      },
      onSetHalf(half) {
        dispatch(setLowPassHalf(half))
      },
      onSetFull(full) {
        dispatch(setLowPassFull(full))
      }
    })
)(LowPassFilter)

export default LowPassFilterContainer
