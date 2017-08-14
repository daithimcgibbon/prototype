import { connect } from 'react-redux'
import PatchSummary from '../components/PatchSummary'

const PatchSummaryContainer = connect(
  state =>
    ({
      stateData: state
    }),
  null
)(PatchSummary)

export default PatchSummaryContainer
