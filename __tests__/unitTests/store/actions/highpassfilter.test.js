import C from '../../../../src/constants'
import storeFactory from '../../../../src/store'
import { setHighPassCutoff, setHighPassResonance, setHighPassEnvAmount, setHighPassVelocity, setHighPassKeyboard, setHighPassHalf, setHighPassFull } from '../../../../src/actions'

describe("High Pass Filter Action Creators", () => {

  let store = storeFactory(_prophet6.highpassfilter)
  store.dispatch(setHighPassCutoff(10))
  it("should set cutoff as 10", () =>
    expect(store.getState().highpassfilter.cutoff).toBe(10))

  store = storeFactory(_prophet6.highpassfilter)
  store.dispatch(setHighPassResonance(20))
  it("should set resonance as 20", () =>
    expect(store.getState().highpassfilter.resonance).toBe(20))

  store = storeFactory(_prophet6.highpassfilter)
  store.dispatch(setHighPassEnvAmount(30))
  it("should set envAmount as 30", () =>
    expect(store.getState().highpassfilter.envAmount).toBe(30))

  store = storeFactory(_prophet6.highpassfilter)
  store.dispatch(setHighPassVelocity(40))
  it("should set velocity as 40", () =>
    expect(store.getState().highpassfilter.velocity).toBe(40))

  store = storeFactory(_prophet6.highpassfilter)
  store.dispatch(setHighPassKeyboard(true))
  it("should set keyboard as true", () =>
    expect(store.getState().highpassfilter.keyboard).toBe(true))

  store = storeFactory(_prophet6.highpassfilter)
  store.dispatch(setHighPassHalf(true))
  it("should set half as true", () =>
    expect(store.getState().highpassfilter.half).toBe(true))

  store = storeFactory(_prophet6.highpassfilter)
  store.dispatch(setHighPassFull(true))
  it("should set full as true", () =>
    expect(store.getState().highpassfilter.full).toBe(true))

})
