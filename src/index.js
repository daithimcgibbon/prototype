import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import initialState from './initialState.json'
import C from './constants.js'
import { osc1, osc2 } from './reducers.js'
import Prophet6 from './components/Prophet6.js'

const store = createStore(
  combineReducers( { osc1, osc2 } ),
  initialState
)
// console.log( store.getState() )

store.dispatch({
  type: C.SET_OSC1_PW,
  pulseWidth: 55
})

// console.log( store.getState() )

store.dispatch({
  type: C.SET_OSC2_LOW_FREQ,
  lowFreq: true
})

console.log( 'udpate=' + store.getState().osc1.pulseWidth )

ReactDOM.render(
  <Prophet6 />,
  document.getElementById( 'app' )
)
