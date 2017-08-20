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
  <div className='container'>
    <br />
    <br />
    <div className="row">
      <div className="col-md-4">
        <Osc1Container />
      </div>
      <div className="col-md-4">
        <Osc2Container />
      </div>
      <div className="col-md-4">
<       MixerContainer />
      </div>
    </div>
    <br />
    <br />
    <div className="row">
      <div className="col-md-4">
         <HighPassFilterContainer />
      </div>
      <div className="col-md-4">
        <LowPassFilterContainer />
      </div>
      <div className="col-md-4">
        <SlopContainer />
      </div>
    </div>
    <br />
    <br />
    <PatchSummaryContainer />
  </div>
)
