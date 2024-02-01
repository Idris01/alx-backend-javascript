const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('add 1 and 2', function() {
  it('checks equality', function() {
    assert.equal(calculateNumber(1, 3), 4);
    });
});

describe('add 1 and 3.7', function() {
  it('checks equality', function() {
    assert.equal(calculateNumber(1, 3.7), 5);
    });
});

describe('add 1.2 and 3.7', function() {
  it('checks equality', function() {
    assert.equal(calculateNumber(1.2, 3.7), 5);
    });
});

describe('add 1.5 and 3.7', function() {
  it('checks equality', function() {
    assert.equal(calculateNumber(1.5, 3.7), 6);
    });
});
