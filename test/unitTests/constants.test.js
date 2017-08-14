import C from '../../src/constants'

describe('constants', () => {

  it('should 10 strings', () => {
    expect(Object.keys(C).length).toEqual(10)
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
  })

})
