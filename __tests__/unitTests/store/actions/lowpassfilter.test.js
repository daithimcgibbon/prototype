import C from '../../../../src/constants'
import storeFactory from '../../../../src/store'
import { setLowPassCutoff, setLowPassResonance, setLowPassEnvAmount, setLowPassVelocity, setLowPassKeyboard, setLowPassHalf, setLowPassFull } from '../../../../src/actions'

describe("Low Pass Filter Action Creators", () => {

  let store = storeFactory(_prophet6.lowpassfilter)
  store.dispatch(setLowPassCutoff(10))
  it("should set cutoff as 10", () =>
    expect(store.getState().lowpassfilter.cutoff).toBe(10))

  store = storeFactory(_prophet6.lowpassfilter)
  store.dispatch(setLowPassResonance(20))
  it("should set resonance as 20", () =>
    expect(store.getState().lowpassfilter.resonance).toBe(20))

  store = storeFactory(_prophet6.lowpassfilter)
  store.dispatch(setLowPassEnvAmount(30))
  it("should set envAmount as 30", () =>
    expect(store.getState().lowpassfilter.envAmount).toBe(30))

  store = storeFactory(_prophet6.lowpassfilter)
  store.dispatch(setLowPassVelocity(40))
  it("should set velocity as 40", () =>
    expect(store.getState().lowpassfilter.velocity).toBe(40))

  store = storeFactory(_prophet6.lowpassfilter)
  store.dispatch(setLowPassKeyboard(true))
  it("should set keyboard as true", () =>
    expect(store.getState().lowpassfilter.keyboard).toBe(true))

  store = storeFactory(_prophet6.lowpassfilter)
  store.dispatch(setLowPassHalf(true))
  it("should set half as true", () =>
    expect(store.getState().lowpassfilter.half).toBe(true))

  store = storeFactory(_prophet6.lowpassfilter)
  store.dispatch(setLowPassFull(true))
  it("should set full as true", () =>
    expect(store.getState().lowpassfilter.full).toBe(true))

})
