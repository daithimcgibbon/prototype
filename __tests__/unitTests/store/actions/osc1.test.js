import C from '../../../../src/constants'
import storeFactory from '../../../../src/store'
import { setOsc1Freq, setOsc1Sync, setOsc1Shape, setOSc1PulseWidth } from '../../../../src/actions'

describe("Osc1 Action Creators", () => {

  let store = storeFactory(_prophet6.osc1)
  store.dispatch(setOsc1Freq(10))
  it("should set frequency as 10", () =>
    expect(store.getState().osc1.frequency).toBe(10))

  store = storeFactory(_prophet6.osc1)
  store.dispatch(setOsc1Sync(true))
  it("should set sync as true", () =>
    expect(store.getState().osc1.sync).toBe(true))

  store = storeFactory(_prophet6.osc1)
  store.dispatch(setOsc1Shape(20))
  it("should set shape as 20", () =>
    expect(store.getState().osc1.shape).toBe(20))

  store = storeFactory(_prophet6.osc1)
  store.dispatch(setOSc1PulseWidth(30))
  it("should set pulseWidth as 30", () =>
    expect(store.getState().osc1.pulseWidth).toBe(30))

})
