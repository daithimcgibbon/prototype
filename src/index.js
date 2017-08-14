import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import initialState from './initialState.json'
import C from './constants.js'
import { osc1, osc2 } from './reducers.js'
import Prophet6 from './components/Prophet6.js'
import { setOsc1Freq } from './actions.js'

const store = createStore(
  combineReducers( { osc1, osc2 } ),
  (localStorage['redux-store']) ?
    JSON.parse(localStorage['redux-store']) :
    initialState
)

store.subscribe(() => localStorage['redux-store'] = JSON.stringify(store.getState()))
store.subscribe(() => console.log('state', store.getState()) )

// store.dispatch(setOsc1Freq(60))

ReactDOM.render(
  <Prophet6 />,
  document.getElementById( 'app' )
)
