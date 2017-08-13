// var describe = require('mocha').describe
// var it = require('mocha').it
// var expect = require('chai').expect
// var setOsc1Freq = require('../../src/actions.js').setOsc1Freq

describe('when calling setOsc1Freq', () => {
    it('should return frequency === 0 when no parameters are passed', () => {
        expect(setOsc1Freq()).eql({
          type: C.SET_OSC1_FREQ,
          frequency: 0
        })
    })
    it('should return frequency === 10 when parameter value of 10 is passed', () => {
        expect(setOsc1Freq(10)).eql({
          type: C.SET_OSC1_FREQ,
          frequency: 10
        })
    })
})
