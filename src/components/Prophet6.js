import React from 'react'
import Osc1 from './Osc1.js'
import Osc2 from './Osc2.js'

export default ({stateData}) => (
  <div>
      <Osc1 osc1={stateData.osc1}/>
      <br />
      <Osc2 osc2={stateData.osc2}/>
  </div>
)
