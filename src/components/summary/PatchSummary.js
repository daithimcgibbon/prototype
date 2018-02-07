import React from 'react'

const PatchSummary = ({stateData}) => (
  <div className='container'>
    <h4>Osc 1</h4>
    <ul>
      <li><b>Frequency: </b>{stateData.osc1.frequency}</li>
    </ul>
  </div>
)

export default PatchSummary
