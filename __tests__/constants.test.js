import C from '../src/constants'

describe('constants', () => {

  it('should 10 strings', () => {
    expect(Object.keys(C).length).toEqual(29)
  })

  it('should contain correct values', () => {
    const constantArray = Object.keys(C)
    expect(constantArray[0]).toEqual("SET_OSC1_FREQ")
    expect(constantArray[1]).toEqual("SET_OSC1_SYNC")
    expect(constantArray[2]).toEqual("SET_OSC1_SHAPE")
    expect(constantArray[3]).toEqual("SET_OSC1_PW")
    expect(constantArray[4]).toEqual("SET_OSC2_FREQ")
    expect(constantArray[5]).toEqual("SET_OSC2_FINE")
    expect(constantArray[6]).toEqual("SET_OSC2_SHAPE")
    expect(constantArray[7]).toEqual("SET_OSC2_PW")
    expect(constantArray[8]).toEqual("SET_OSC2_LOW_FREQ")
    expect(constantArray[9]).toEqual("SET_OSC2_KEYBOARD")
    expect(constantArray[10]).toEqual("SET_SLOP")
    expect(constantArray[11]).toEqual("SET_MIXER_OSC1")
    expect(constantArray[12]).toEqual("SET_MIXER_OSC2")
    expect(constantArray[13]).toEqual("SET_MIXER_SUB_OCTAVE")
    expect(constantArray[14]).toEqual("SET_MIXER_NOISE")
    expect(constantArray[15]).toEqual("SET_HIGHPASSFILTER_CUTOFF")
    expect(constantArray[16]).toEqual("SET_HIGHPASSFILTER_RESONANCE")
    expect(constantArray[17]).toEqual("SET_HIGHPASSFILTER_ENV_AMOUNT")
    expect(constantArray[18]).toEqual("SET_HIGHPASSFILTER_VELOCITY")
    expect(constantArray[19]).toEqual("SET_HIGHPASSFILTER_KEYBOARD")
    expect(constantArray[20]).toEqual("SET_HIGHPASSFILTER_HALF")
    expect(constantArray[21]).toEqual("SET_HIGHPASSFILTER_FULL")
  })

})
