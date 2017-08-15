import { createStore, combineReducers, applyMiddleware } from 'redux'
import { osc1, osc2, slop, mixer, highpassfilter, lowpassfilter } from './reducers'
import stateData from './initialState'

const logger = store => next => action => {
    let result
    console.groupCollapsed("dispatching", action.type)
    console.log('prev state', store.getState())
    console.log('action', action)
    result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
}

const saver = store => next => action => {
    let result = next(action)
    localStorage['prophet6-store'] = JSON.stringify(store.getState())
    return result
}

const storeFactory = (initialState=stateData) =>
    applyMiddleware(logger, saver)(createStore)(
        combineReducers({osc1, osc2, slop, mixer, highpassfilter, lowpassfilter}),
        (localStorage['prophet6-store']) ?
            JSON.parse(localStorage['prophet6-store']) :
            stateData
    )

export default storeFactory
