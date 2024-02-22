const calculateNumber = require('./0-calcul');
const assert = require('assert');

describe('calculateNumber', () => {
  it('1 + 3 equals 4', () => {
    assert.equal(calculateNumber(1, 3), 4);
    assert.equal(calculateNumber(0, 3), 3);
    assert.equal(calculateNumber(1, 0), 1);
  });

  it('1 + 3.7 equals 5', () => {
    assert.equal(calculateNumber(1, 3.7), 5);
    assert.equal(calculateNumber(1, 0), 1);
    assert.equal(calculateNumber(0, 3.7), 4);
  });

  it('1.2 + 3.7 equals 5', () => {
    assert.equal(calculateNumber(1.2, 3.7), 5);
    assert.equal(calculateNumber(0, 3.7), 4);
    assert.equal(calculateNumber(1.2, 0), 1);
  });

  it('1.5 + 3.7 equals 6', () => {
    assert.equal(calculateNumber(1.5, 3.7), 6);
    assert.equal(calculateNumber(1.5, 0), 2);
    assert.equal(calculateNumber(0, 3.7), 4);
  });
});
