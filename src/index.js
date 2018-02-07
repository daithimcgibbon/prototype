import React from 'react'
import ReactDOM from 'react-dom'
import Prophet6 from './Prophet6'
import storeFactory from './store'
import { Provider } from 'react-redux'
// import Knob from './components/canvas/Knob'

const store = storeFactory()

ReactDOM.render(
  <Provider store={store}>
    <Prophet6 />
  </Provider>,
  document.getElementById( 'app' )
)

// ReactDOM.render(
//   <Knob />,
//   document.getElementById( 'app' )
// )
