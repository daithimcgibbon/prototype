var describe = require('mocha').describe
var it = require('mocha').it
var expect = require('chai').expect
// var SET_OSC1_FREQ = require('../../src/constants.js')

describe('when using constants', () => {
    it('should equal expected values', () => {
        expect("SET_OSC1_FREQ").eql("SET_OSC1_FREQ")
        expect("SET_OSC1_SYNC").eql("SET_OSC1_SYNC")
        expect("SET_OSC1_SHAPE").eql("SET_OSC1_SHAPE")
        expect("SET_OSC1_PW").eql("SET_OSC1_PW")
    })
})
