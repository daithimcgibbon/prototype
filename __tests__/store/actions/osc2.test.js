import C from '../../../src/constants'
import storeFactory from '../../../src/store'
import { setOsc2Freq, setOsc2Fine, setOsc2Shape, setOsc2PulseWidth, setOsc2LowFreq, setOsc2Keyboard } from '../../../src/actions'

describe("Osc2 Action Creators", () => {

  let store = storeFactory(_prophet6.osc2)
  store.dispatch(setOsc2Freq(10))
  it("should set frequency as 10", () =>
    expect(store.getState().osc2.frequency).toBe(10))

  store = storeFactory(_prophet6.osc2)
  store.dispatch(setOsc2Fine(20))
  it("should set fine as 20", () =>
    expect(store.getState().osc2.fine).toBe(20))

  store = storeFactory(_prophet6.osc2)
  store.dispatch(setOsc2Shape(30))
  it("should set shape as 30", () =>
    expect(store.getState().osc2.shape).toBe(30))

  store = storeFactory(_prophet6.osc2)
  store.dispatch(setOsc2PulseWidth(40))
  it("should set pulseWidth as 40", () =>
    expect(store.getState().osc2.pulseWidth).toBe(40))

  store = storeFactory(_prophet6.osc2)
  store.dispatch(setOsc2LowFreq(true))
  it("should set lowFreq as true", () =>
    expect(store.getState().osc2.lowFreq).toBe(true))

  store = storeFactory(_prophet6.osc2)
  store.dispatch(setOsc2Keyboard(true))
  it("should set keyboard as true", () =>
    expect(store.getState().osc2.keyboard).toBe(true))

})
