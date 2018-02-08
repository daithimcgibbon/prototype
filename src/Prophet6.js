import React from 'react'
import Osc1Container from './containers/Osc1Container'
import Osc2Container from './containers/Osc2Container'
import PatchSummaryContainer from './containers/PatchSummaryContainer'
import SlopContainer from './containers/SlopContainer'
import MixerContainer from './containers/MixerContainer'
import HighPassFilterContainer from './containers/HighPassFilterContainer'
import LowPassFilterContainer from './containers/LowPassFilterContainer'
import SaveButtonContainer from './containers/SaveButtonContainer'

export default () => (
  <div className="container">
    <div className="row">
      <div className="col-md-5">
        <Osc1Container />
      </div>
      <PatchSummaryContainer />
    </div>
  </div>
)
