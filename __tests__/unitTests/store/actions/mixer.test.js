import C from '../../../../src/constants'
import storeFactory from '../../../../src/store'
import { setMixerOsc1, setMixerOsc2, setMixerSubOctave, setMixerNoise } from '../../../../src/actions'

describe("Mixer Action Creators", () => {

  let store
  const mixer = {
    mixerOsc1: 0,
    mixerOsc2: 0,
    subOctave: 0,
    noise: 0
  }
  window.localStorage = {}
  console.groupCollapsed = jest.fn()
  console.log = jest.fn()
  console.groupEnd = jest.fn()

  afterAll(() => global.localStorage['prophet6-store'] = false)

  store = storeFactory(mixer)
  store.dispatch(setMixerOsc1(10))
  it("should set osc1 as 10", () =>
    expect(store.getState().mixer.mixerOsc1).toBe(10))

  store = storeFactory(mixer)
  store.dispatch(setMixerOsc2(20))
  it("should set osc2 as 20", () =>
    expect(store.getState().mixer.mixerOsc2).toBe(20))

  store = storeFactory(mixer)
  store.dispatch(setMixerSubOctave(30))
  it("should set subOctave as 30", () =>
    expect(store.getState().mixer.subOctave).toBe(30))

  store = storeFactory(mixer)
  store.dispatch(setMixerNoise(40))
  it("should set noise as 40", () =>
    expect(store.getState().mixer.noise).toBe(40))

})
