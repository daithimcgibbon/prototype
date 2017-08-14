import C from '../../../../src/constants'
import { slop } from '../../../../src/store/reducers'
import deepFreeze from 'deep-freeze'

const state = 0

deepFreeze(state)

describe('slop reducer', () => {

  it('SET_SLOP success', () => {
    const action = {
      type: C.SET_SLOP,
      slop: 10
    }
    deepFreeze(action)
    expect(slop(state, action)).toEqual(10)
  })

})
