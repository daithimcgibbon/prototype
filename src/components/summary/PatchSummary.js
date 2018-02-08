import React from 'react'

const PatchSummary = ({stateData}) => (
  <div className='container'>
    <h4>Osc 1</h4>
    <ul>
      <li><b>Frequency: </b>{stateData.osc1.frequency}</li>
      <li><b>Sync: </b>{stateData.osc1.sync}</li>
      <li><b>Shape: </b>{stateData.osc1.shape}</li>
      <li><b>Pulse Width: </b>{stateData.osc1.pulseWidth}</li>
    </ul>
  </div>
)

export default PatchSummary
