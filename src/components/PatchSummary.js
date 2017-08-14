import React from 'react'

const PatchSummary = ({stateData}) => (
  <div>
      <h3>Patch Summary</h3>
      <h4>Osc 1</h4>
      <ul>
        <li><b>Frequency: </b>{stateData.osc1.frequency}</li>
        <li><b>Sync: </b>{(stateData.osc1.sync) ? 'true' : 'false'}</li>
        <li><b>Shape: </b>{stateData.osc1.shape}</li>
        <li><b>Pulse Width: </b>{stateData.osc1.pulseWidth}</li>
      </ul>
      <h4>Osc 2</h4>
      <ul>
        <li><b>Frequency: </b>{stateData.osc2.frequency}</li>
        <li><b>Fine: </b>{stateData.osc2.fine}</li>
        <li><b>Shape: </b>{stateData.osc2.shape}</li>
        <li><b>Pulse Width: </b>{stateData.osc2.pulseWidth}</li>
        <li><b>Low Freq: </b>{(stateData.osc2.lowFreq) ? 'true' : 'false'}</li>
        <li><b>Keyboard: </b>{(stateData.osc2.keyboard) ? 'true' : 'false'}</li>
      </ul>
      <h4>Slop</h4>
      <ul>
        <li><b>Slop: </b>{stateData.slop}</li>
      </ul>
      <h4>Mixer</h4>
      <ul>
        <li><b>Osc 1: </b>{stateData.mixer.mixerOsc1}</li>
        <li><b>Osc 2: </b>{stateData.mixer.mixerOsc2}</li>
        <li><b>Sub Octave: </b>{stateData.mixer.subOctave}</li>
        <li><b>Noise: </b>{stateData.mixer.noise}</li>
      </ul>
  </div>
)

export default PatchSummary
