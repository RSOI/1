const assert = require('assert');
const reduce = require('../modules/reduce')

describe('Testing reducer module', function () {
  it('Should return empty string', function () {
    assert.equal(reduce(''), '');
  });
  it('Sholud return reduced string', function () {
    assert.equal(reduce('aaa'), '3a');
    assert.equal(reduce('aaabbb'), '3a3b');
    assert.equal(reduce('aaabcbc'), '3abcbc');
    assert.equal(reduce('000'), '30');
  });
});