import React from 'react'
import deepFreeze from 'deep-freeze'
import prophet6 from '../src/store/initialState'

global.React = React
global._prophet6 = deepFreeze(prophet6)
global.window.localStorage = {}
global.console.groupCollapsed = jest.fn()
global.console.log = jest.fn()
global.console.groupEnd = jest.fn()
