import { connect } from 'react-redux'
import PatchSummary from '../components/summary/PatchSummary'

const PatchSummaryContainer = connect(
  state =>
    ({
      stateData: state
    }),
  null
)(PatchSummary)

export default PatchSummaryContainer
