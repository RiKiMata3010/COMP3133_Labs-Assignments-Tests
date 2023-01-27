const assert = require('chai').assert;
const add = require ('../app').add
const mul = require ('../app').mul
const div = require ('../app').div
const sub = require ('../app').sub

describe('Addition', function(){
    it('function should add values', function(){
        let result = add(7, 7);
        assert.equal(result, 14)
    })
    it('function should add values', function(){
        let result = add(7, 7);
        assert.equal(result, 13)
    })
})
describe('Subtraction', function(){
    it('function should subtract values', function(){
        let result = sub(7, 7);
        assert.equal(result, 0)
    })
    it('function should subtract values', function(){
        let result = sub(7, 7);
        assert.equal(result, 1)
    })
})
describe('Multiplication', function(){
    it('function should multiply values', function(){
        let result = mul(7, 7);
        assert.equal(result, 49)
    })
    it('function should multiply values', function(){
        let result = mul(7, 7);
        assert.equal(result, 38)
    })
})
describe('Division', function(){
    it('function should subtract values', function(){
        let result = div(7, 7);
        assert.equal(result, 1)
    })
    it('function should add values', function(){
        let result = div(7, 7);
        assert.equal(result, 2)
    })
})