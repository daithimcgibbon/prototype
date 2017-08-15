import { connect } from 'react-redux'
import Mixer from '../components/mixer/Mixer'
import { setMixerOsc1, setMixerOsc2, setMixerSubOctave, setMixerNoise } from '../actions'

const MixerContainer = connect(
  state =>
    ({
      mixer: state.mixer
    }),
  dispatch =>
    ({
      onSetMixerOsc1(mixerOsc1) {
        dispatch(setMixerOsc1(mixerOsc1))
      },
      onSetMixerOsc2(mixerOsc2) {
        dispatch(setMixerOsc2(mixerOsc2))
      },
      onSetMixerSubOctave(subOctave) {
        dispatch(setMixerSubOctave(subOctave))
      },
      onSetMixerNoise(noise) {
        dispatch(setMixerNoise(noise))
      }
    })
)(Mixer)

export default MixerContainer
