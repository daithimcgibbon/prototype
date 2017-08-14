import React from 'react'
import ReactDOM from 'react-dom'
import Prophet6 from './components/Prophet6.js'
import storeFactory from './store'
import { setOsc1Freq, setOsc2Freq } from './actions'

const store = storeFactory(true)

ReactDOM.render(
  <Prophet6 stateData={store.getState()}/>,
  document.getElementById( 'app' )
)
