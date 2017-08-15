import React from 'react'
import Osc1Container from './containers/Osc1Container'
import Osc2Container from './containers/Osc2Container'
import PatchSummaryContainer from './containers/PatchSummaryContainer'
import SlopContainer from './containers/SlopContainer'
import MixerContainer from './containers/MixerContainer'
import HighPassFilterContainer from './containers/HighPassFilterContainer'
import LowPassFilterContainer from './containers/LowPassFilterContainer'

export default () => (
  <div>
    <table width='100%'>
      <tbody>
        <tr>
          <td>
            <Osc1Container />
            <br />
            <MixerContainer />
          </td>
          <td>
            <Osc2Container />
            <br />
            <HighPassFilterContainer />
          </td>
          <td>
            <SlopContainer />
            <br />
            <LowPassFilterContainer />
          </td>
        </tr>
      </tbody>
    </table>
    <PatchSummaryContainer />
  </div>
)
