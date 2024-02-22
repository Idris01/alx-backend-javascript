const calculateNumber = require('./0-calcul');
const assert = require('assert');

describe('calculateNumber', () => {
  it('round first number', () => {
    assert.equal(calculateNumber(1, 0), 1);
    assert.equal(calculateNumber(1.5, 0), 2);
    assert.equal(calculateNumber(1.2, 0), 1);
  });

  it('round second number', () => {
    assert.equal(calculateNumber(0, 3), 3);
    assert.equal(calculateNumber(0, 3.7), 4);
  });

  it('return required result', () => {
    assert.equal(calculateNumber(1.2, 3.7), 5);
    assert.equal(calculateNumber(1, 3), 4);
    assert.equal(calculateNumber(1.5, 3.7), 6);
    assert.equal(calculateNumber(1, 3.7), 5);
  });
});

describe('calculateNumber second number', () => {
  it('round first number', () => {
    assert.equal(calculateNumber(1, 0), 1);
    assert.equal(calculateNumber(1.5, 0), 2);
    assert.equal(calculateNumber(1.2, 0), 1);
  });

  it('round second number', () => {
    assert.equal(calculateNumber(0, 3), 3);
    assert.equal(calculateNumber(0, 3.7), 4);
  });

  it('return required result', () => {
    assert.equal(calculateNumber(1.2, 3.7), 5);
    assert.equal(calculateNumber(1, 3), 4);
    assert.equal(calculateNumber(1.5, 3.7), 6);
    assert.equal(calculateNumber(1, 3.7), 5);
  });
});
