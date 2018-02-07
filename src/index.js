import React from 'react'
import ReactDOM from 'react-dom'
import Prophet6 from './Prophet6'
import storeFactory from './store'
import { Provider } from 'react-redux'

const store = storeFactory()

ReactDOM.render(
  <Provider store={store}>
    <Prophet6 />
  </Provider>,
  document.getElementById( 'app' )
)
