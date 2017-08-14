import { connect } from 'react-redux'
import Slop from '../components/Slop'
import { setSlop } from '../actions'

const SlopContainer = connect(
  state =>
    ({
      slop: state.slop
    }),
  dispatch =>
    ({
      onSetSlop(slop) {
        dispatch(setSlop(slop))
      }
    })
)(Slop)

export default SlopContainer
