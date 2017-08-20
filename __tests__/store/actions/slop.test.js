import C from '../../../src/constants'
import storeFactory from '../../../src/store'
import { setSlop } from '../../../src/actions'

describe("Slop Action Creators", () => {

  let store = storeFactory(_prophet6.slop)
  store.dispatch(setSlop(10))
  it("should set slop as 10", () =>
    expect(store.getState().slop).toBe(10))

})
