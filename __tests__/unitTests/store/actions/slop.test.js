import C from '../../../../src/constants'
import storeFactory from '../../../../src/store'
import { setSlop } from '../../../../src/actions'

describe("Slop Action Creators", () => {

  let store
  const slop = 0
  window.localStorage = {}
  console.groupCollapsed = jest.fn()
  console.log = jest.fn()
  console.groupEnd = jest.fn()

  afterAll(() => global.localStorage['prophet6-store'] = false)

  store = storeFactory({slop})
  store.dispatch(setSlop(10))
  it("should set slop as 10", () =>
    expect(store.getState().slop).toBe(10))

})
